import { notFound } from "next/navigation";
import { getClient } from "@/lib/apollo/server-client";
import { CP_PAGE_DETAIL } from "@/graphql/cms/queries/page";
import { CP_POST } from "@/graphql/cms/queries/post";
import type { Page } from "@/graphql/cms/queries/page";
import type { Post } from "@/graphql/cms/queries/post";

export const revalidate = 60;

export async function generateStaticParams() {
  // Return known slugs for static generation at build time
  return [
    { locale: "mn", slug: "about" },
    { locale: "en", slug: "about" },
    { locale: "mn", slug: "services" },
    { locale: "en", slug: "services" },
    { locale: "mn", slug: "contact" },
    { locale: "en", slug: "contact" },
    { locale: "mn", slug: "perfect-sofa-guide" },
    { locale: "en", slug: "perfect-sofa-guide" },
    { locale: "mn", slug: "warm-modernism-2026" },
    { locale: "en", slug: "warm-modernism-2026" },
    { locale: "mn", slug: "optimize-small-spaces" },
    { locale: "en", slug: "optimize-small-spaces" },
  ];
}

export default async function UnifiedDynamicPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;

  // Try page first
  try {
    const pageRes = await getClient().query({
      query: CP_PAGE_DETAIL,
      variables: { slug, language: locale },
    });
    const pageData = pageRes.data as { cpPageDetail?: Page } | undefined;
    const page = pageData?.cpPageDetail;

    if (page) {
      return (
        <div className="max-w-[900px] mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-[#FAFAFA] mb-6">{page.name}</h1>
          {page.description && (
            <p className="text-lg text-[#9A9590] mb-8">{page.description}</p>
          )}
          {page.content && (
            <div
              className="prose prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: page.content }}
            />
          )}
        </div>
      );
    }
  } catch {
    // Page not found, try post
  }

  // Try post
  try {
    const postRes = await getClient().query({
      query: CP_POST,
      variables: { slug, language: locale },
    });
    const postData = postRes.data as { cpPost?: Post } | undefined;
    const post = postData?.cpPost;

    if (post) {
      return (
        <article className="max-w-[900px] mx-auto px-6 py-16">
          <h1 className="text-3xl md:text-4xl font-bold text-[#FAFAFA] mb-4">
            {post.title}
          </h1>
          {post.publishedDate && (
            <time className="text-sm text-[#9A9590] block mb-8">
              {new Date(post.publishedDate).toLocaleDateString(
                locale === "mn" ? "mn-MN" : "en-US",
                { year: "numeric", month: "long", day: "numeric" }
              )}
            </time>
          )}
          {post.excerpt && (
            <p className="text-lg text-[#D4CFC9] mb-8 leading-relaxed">{post.excerpt}</p>
          )}
          {post.content && (
            <div
              className="prose prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          )}
        </article>
      );
    }
  } catch {
    // Post not found
  }

  notFound();
}
