import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import MdxRenderer from "@/components/MdxRenderer";
import { getPostBySlug, getAllPostSlugs, formatDate } from "@/lib/mdx";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate static routes for all MDX files at build time
export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

// Generate page metadata from frontmatter
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  return (
    <>
      <NavBar />
      <main className="min-h-screen pt-28 pb-20">
        <div className="max-w-2xl mx-auto px-6">

          {/* Back link */}
          <Link
            href="/updates"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors mb-10"
          >
            ← Back to Updates
          </Link>

          {/* Post header */}
          <header className="mb-10">
            <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-3">
              {post.author && `By ${post.author} · `}{formatDate(post.date)}
            </p>
            <h1 className="font-display text-4xl font-bold leading-tight mb-4">
              {post.title}
            </h1>
            {post.excerpt && (
              <p className="text-lg text-muted leading-relaxed">{post.excerpt}</p>
            )}
          </header>

          <hr className="border-border mb-10" />

          {/* MDX content */}
          <MdxRenderer source={post.content} />

        </div>
      </main>
      <Footer />
    </>
  );
}
