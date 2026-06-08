import Link from "next/link";
import UpdateCard from "@/components/UpdateCard";
import type { PostMeta } from "@/lib/mdx";

interface UpdatesPreviewProps {
  posts: PostMeta[];
}

export default function UpdatesPreview({ posts }: UpdatesPreviewProps) {
  return (
    <section id="updates" className="py-24 bg-card/50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <p className="text-accent font-semibold tracking-widest text-sm uppercase mb-3">
              News &amp; Announcements
            </p>
            <h2 className="font-display text-4xl font-bold">
              Latest Updates
            </h2>
          </div>

          <Link
            href="/updates"
            className="text-sm font-semibold text-accent hover:underline whitespace-nowrap"
          >
            View all updates →
          </Link>
        </div>

        {/* Posts grid */}
        {posts.length === 0 ? (
          <p className="text-muted">No updates yet — check back soon!</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <UpdateCard key={post.slug} post={post} />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
