"use client";

import { useState, useEffect } from "react";
import { useSharedState } from "@airstate/react";

type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
};

type BlogPost = {
  metadata: Metadata;
  slug: string;
  source: string;
};

export function useBlogPosts() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch("/api/blog");
        if (!response.ok) throw new Error("Failed to fetch posts");
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  return { posts, loading, error };
}

export function useBlogPost(
  slug: string,
  options?: { pollInterval?: number; enableLiveReload?: boolean }
) {
  const [post, setPost] = useSharedState<BlogPost | null>(null, {
    key: `blog-post-${slug}`,
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { pollInterval = 0, enableLiveReload = false } = options || {};

  const fetchPost = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`/api/blog/${slug}?t=${Date.now()}`);
      if (!response.ok) throw new Error("Failed to fetch post");
      const data = await response.json();
      setPost(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!slug) return;

    fetchPost();

    // Set up polling if specified
    if (pollInterval > 0) {
      const interval = setInterval(fetchPost, pollInterval);
      return () => clearInterval(interval);
    }
  }, [slug, pollInterval]);

  // Set up real-time file watching for any environment
  useEffect(() => {
    if (!enableLiveReload || !slug) return;

    let eventSource: EventSource | null = null;

    try {
      eventSource = new EventSource(`/api/blog/watch?slug=${slug}`);

      eventSource.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          if (data.type === "file-changed") {
            console.log(`Blog file ${slug} changed, refetching...`);
            fetchPost();
          }
        } catch (err) {
          console.error("Error parsing SSE data:", err);
        }
      };

      eventSource.onerror = (error) => {
        console.error("SSE error:", error);
      };
    } catch (err) {
      console.error("Failed to setup live reload:", err);
    }

    return () => {
      if (eventSource) {
        eventSource.close();
      }
    };
  }, [slug, enableLiveReload]);

  const refetch = () => {
    if (slug) fetchPost();
  };

  return { post, loading, error, refetch };
}
