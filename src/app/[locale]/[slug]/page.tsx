import { notFound } from "next/navigation";
import { getClient } from "@/lib/apollo/server-client";
import { CP_PAGES } from "@/graphql/cms/queries/page";
import { CP_POSTS } from "@/graphql/cms/queries/post";
import type { Page } from "@/graphql/cms/queries/page";
import type { Post } from "@/graphql/cms/queries/post";

export const revalidate = 60;

export async function generateStaticParams() {
  const pagesRes = await getClient().query({
    query: CP_PAGES,
    variables: { language: "mn" },
  });
  const postsRes = await getClient().query({
    query: CP_POSTS,
    variables: { language: "mn", status: "published", limit: 50 },
  });

  const pagesData = pagesRes.data as { cpPages?: Page[] } | undefined;
  const postsData = postsRes.data as { cpPosts?: Post[] } | undefined;

  const pages: Page[] = pagesData?.cpPages ?? [];
  const posts: Post[] = postsData?.cpPosts ?? [];

  const pageSlugs = pages
    .map((p) => p.slug)
    .filter((s): s is string => !!s && s !== "home");

  const postSlugs = posts
    .map((p) => p.slug)
    .filter((s): s is string => !!s);

  const params: { locale: string; slug: string }[] = [];

  for (const locale of ["mn", "en"]) {
    for (const slug of pageSlugs) {
      params.push({ locale, slug });
    }
    for (const slug of postSlugs) {
      params.push({ locale, slug });
    }
  }

  return params;
}

export default async function UnifiedDynamicPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;

  // Try page first
  const pagesRes2 = await getClient().query({
    query: CP_PAGES,
    variables: { language: locale },
  });
  const pageData = pagesRes2.data as { cpPages?: Page[] } | undefined;

  const pages: Page[] = pageData?.cpPages ?? [];
  const page = pages.find((p) => p.slug === slug);

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

  // Try post
  const postsRes2 = await getClient().query({
    query: CP_POSTS,
    variables: { language: locale, status: "published", limit: 50 },
  });
  const postData = postsRes2.data as { cpPosts?: Post[] } | undefined;

  const posts: Post[] = postData?.cpPosts ?? [];
  const post = posts.find((p) => p.slug === slug);

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

  notFound();
}
