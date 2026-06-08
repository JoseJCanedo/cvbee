import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Path to the MDX content directory
const CONTENT_DIR = path.join(process.cwd(), "src/content/updates");

export interface PostFrontmatter {
  title: string;
  date: string;
  excerpt: string;
  author?: string;
}

export interface PostMeta extends PostFrontmatter {
  slug: string;
}

export interface Post extends PostMeta {
  content: string;
}

/**
 * Returns all post slugs (filenames without .mdx extension).
 * Used for generateStaticParams in Next.js App Router.
 */
export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

/**
 * Returns all post metadata sorted by date (newest first).
 * Does NOT include the full MDX content — used for listing pages.
 */
export function getAllPosts(): PostMeta[] {
  const slugs = getAllPostSlugs();

  const posts = slugs.map((slug) => {
    const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(raw);
    const fm = data as PostFrontmatter;

    return {
      slug,
      title: fm.title ?? "Untitled",
      date: fm.date ?? "",
      excerpt: fm.excerpt ?? "",
      author: fm.author ?? "",
    };
  });

  // Sort newest first
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

/**
 * Returns a single post's metadata and raw MDX content string.
 * Used by the [slug] page to render the full post.
 */
export function getPostBySlug(slug: string): Post | null {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const fm = data as PostFrontmatter;

  return {
    slug,
    title: fm.title ?? "Untitled",
    date: fm.date ?? "",
    excerpt: fm.excerpt ?? "",
    author: fm.author ?? "",
    content,
  };
}

/**
 * Formats a date string (YYYY-MM-DD) into a readable format.
 * e.g. "2025-06-01" → "June 1, 2025"
 */
export function formatDate(dateStr: string): string {
  const date = new Date(dateStr + "T12:00:00"); // noon to avoid timezone off-by-one
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
