import Link from "next/link";
import Image from "next/image";
import { getClient } from "@/lib/apollo/server-client";
import { CP_POSTS } from "@/graphql/cms/queries/post";
import type { Post } from "@/graphql/cms/queries/post";
import { FadeIn } from "@/components/motion/FadeIn";

export const revalidate = 60;

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const res = await getClient().query({
    query: CP_POSTS,
    variables: { language: locale, status: "published", limit: 50 },
  });
  const data = res.data as { cpPosts?: Post[] } | undefined;

  const posts: Post[] = data?.cpPosts ?? [];

  return (
    <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-16">
      <FadeIn>
        <h1 className="text-4xl md:text-5xl font-bold text-[#FAFAFA] mb-4">
          {locale === "mn" ? "Блог / Онцлох" : "Blog / Inspiration"}
        </h1>
        <p className="text-lg text-[#9A9590] mb-12">
          {locale === "mn"
            ? "Дизайны санаа, чиг хандлага, зөвлөмж"
            : "Design ideas, trends, and tips"}
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, i) => (
          <FadeIn key={post._id} delay={i * 0.1}>
            <Link href={`/blog/${post.slug}`} className="group block">
              <div className="relative h-[260px] rounded-md overflow-hidden mb-4 bg-[#161616]">
                {post.thumbnail?.url ? (
                  <Image
                    src={post.thumbnail.url}
                    alt={post.title ?? ""}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-[#5A5A5A]">
                    No Image
                  </div>
                )}
              </div>
              <h3 className="text-lg font-medium text-[#FAFAFA] mb-2 group-hover:text-[#C9A96E] transition-colors">
                {post.title}
              </h3>
              {post.excerpt && (
                <p className="text-sm text-[#9A9590] line-clamp-2">{post.excerpt}</p>
              )}
            </Link>
          </FadeIn>
        ))}
      </div>

      {posts.length === 0 && (
        <div className="text-center py-24 text-[#9A9590]">
          {locale === "mn" ? "Нийтлэл олдсонгүй" : "No posts found"}
        </div>
      )}
    </div>
  );
}
