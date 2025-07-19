import { NextRequest } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const slug = searchParams.get("slug");

  if (!slug) {
    return new Response("Slug is required", { status: 400 });
  }

  const headers = {
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    Connection: "keep-alive",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Cache-Control",
  };

  const stream = new ReadableStream({
    start(controller) {
      const filePath = path.join(process.cwd(), "content", `${slug}.mdx`);

      // Send initial data
      controller.enqueue(`data: ${JSON.stringify({ type: "connected" })}\n\n`);

      let isWatching = false;

      try {
        // Watch for file changes
        fs.watchFile(filePath, { interval: 1000 }, (curr, prev) => {
          if (curr.mtime !== prev.mtime) {
            controller.enqueue(
              `data: ${JSON.stringify({ type: "file-changed", slug })}\n\n`
            );
          }
        });
        isWatching = true;

        // Keep connection alive
        const keepAlive = setInterval(() => {
          controller.enqueue(`data: ${JSON.stringify({ type: "ping" })}\n\n`);
        }, 30000);

        // Handle client disconnect
        request.signal.addEventListener("abort", () => {
          if (isWatching) {
            fs.unwatchFile(filePath);
          }
          clearInterval(keepAlive);
          controller.close();
        });
      } catch (error) {
        controller.error(error);
      }
    },
  });

  return new Response(stream, { headers });
}
