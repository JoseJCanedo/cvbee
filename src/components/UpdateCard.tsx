// HeroUI Pro component opportunity:
// You can replace this Card with a Pro "Blog Card" or "News Card" component
// from https://heroui.pro/components/cards for richer layouts.
// Current implementation uses free @heroui/react Card.
"use client"; 
import Link from "next/link";
import { Card } from "@heroui/react";
import type { PostMeta } from "@/lib/mdx";
import { formatDate } from "@/lib/mdx";

interface UpdateCardProps {
  post: PostMeta;
}

export default function UpdateCard({ post }: UpdateCardProps) {
  return (
    <Link href={`/updates/${post.slug}`} className="group block h-full">
      <Card className="h-full border border-border bg-card group-hover:border-accent transition-colors duration-200">
        <Card.Content className="p-6 flex flex-col gap-3 h-full">

          {/* Date */}
          <p className="text-xs text-accent font-semibold tracking-widest uppercase">
            {formatDate(post.date)}
          </p>

          {/* Title */}
          <h3 className="font-display font-bold text-lg leading-snug group-hover:text-accent transition-colors">
            {post.title}
          </h3>

          {/* Excerpt */}
          {post.excerpt && (
            <p className="text-sm text-muted leading-relaxed flex-1">
              {post.excerpt}
            </p>
          )}

          {/* Read more */}
          <p className="text-accent text-sm font-medium mt-auto pt-2">
            Read more →
          </p>

        </Card.Content>
      </Card>
    </Link>
  );
}
