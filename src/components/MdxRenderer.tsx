import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

interface MdxRendererProps {
  source: string;
}

/**
 * Renders MDX content using next-mdx-remote.
 * Add custom MDX components to the `components` object below
 * to use them inside your .mdx post files.
 *
 * Example: add a <Callout> component and use it in any post:
 *   components={{ Callout: MyCalloutComponent }}
 */

// Prose styles applied via Tailwind classes on the wrapper div
const proseClasses = [
  "prose",
  "max-w-none",
  "prose-headings:font-display",
  "prose-headings:font-bold",
  "prose-a:text-accent",
  "prose-a:no-underline",
  "prose-a:hover:underline",
  "prose-strong:text-foreground",
  "prose-code:text-accent",
  "prose-code:bg-border/40",
  "prose-code:px-1",
  "prose-code:py-0.5",
  "prose-code:rounded",
  "prose-blockquote:border-accent",
  "prose-blockquote:text-muted",
  "dark:prose-invert",
].join(" ");

export default function MdxRenderer({ source }: MdxRendererProps) {
  return (
    <div className={proseClasses}>
      <MDXRemote source={source} components={{}} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
    </div>
  );
}
