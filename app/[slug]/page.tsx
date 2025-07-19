"use client";

import { DATA } from "@/data/resume";
import { useBlogPost } from "@/hooks/useBlog";
import { formatDate } from "@/lib/utils";
import { notFound } from "next/navigation";
import { Suspense, useEffect, use } from "react";
import "../../config/airstate";

interface BlogProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function Blog({ params }: BlogProps) {
  const resolvedParams = use(params);
  const { post, loading, error } = useBlogPost(resolvedParams.slug, {
    enableLiveReload: true,
  });

  useEffect(() => {
    if (error && error.includes("Failed to fetch")) {
      notFound();
    }
  }, [error]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!post) return notFound();

  return (
    <section id="blog">
      <title>{post.metadata.title}</title>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${DATA.url}${post.metadata.image}`
              : `${DATA.url}/og?title=${post.metadata.title}`,
            url: `${DATA.url}/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: DATA.name,
            },
          }),
        }}
      />
      <h1 className="title font-medium text-2xl tracking-tighter max-w-[650px]">
        {post.metadata.title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
        <Suspense fallback={<p className="h-5" />}>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {formatDate(post.metadata.publishedAt)}
          </p>
        </Suspense>
        {/* <button
          onClick={refetch}
          className="px-3 py-1 text-xs bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors opacity-70 hover:opacity-100"
          disabled={loading}
          title="Refresh blog post content"
        >
          {loading ? "Refreshing..." : "↻"}
        </button> */}
      </div>
      <article
        className="prose dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: post.source }}
      ></article>
    </section>
  );
}
