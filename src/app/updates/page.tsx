import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import UpdateCard from "@/components/UpdateCard";
import { getAllPosts } from "@/lib/mdx";
import { SITE_SHORT_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Updates",
  description: `Latest news and announcements from the ${SITE_SHORT_NAME}.`,
};

export default function UpdatesPage() {
  const posts = getAllPosts();

  return (
    <>
      <NavBar />
      <main className="min-h-screen pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-6">

          {/* Page header */}
          <div className="mb-12">
            <p className="text-accent font-semibold tracking-widest text-sm uppercase mb-3">
              News &amp; Announcements
            </p>
            <h1 className="font-display text-5xl font-bold leading-tight">
              CVBA Updates
            </h1>
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
      </main>
      <Footer />
    </>
  );
}
