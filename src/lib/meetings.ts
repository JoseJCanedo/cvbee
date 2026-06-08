import fs from "fs";
import path from "path";
import matter from "gray-matter";

const MEETINGS_DIR = path.join(process.cwd(), "src/content/meetings");

export interface MeetingFrontmatter {
  title: string;
  date: string;         // YYYY-MM-DD — the meeting date
  locationId: string;   // must match an id in MEETING_LOCATIONS
  speaker?: string;
  speakerTitle?: string;
  topic?: string;
}

export interface UpcomingMeeting extends MeetingFrontmatter {
  slug: string;
}

/**
 * Returns the nearest upcoming meeting (date >= today), falling back to the
 * most recently past one if no future meeting file exists.
 */
export function getUpcomingMeeting(): UpcomingMeeting | null {
  if (!fs.existsSync(MEETINGS_DIR)) return null;

  const files = fs
    .readdirSync(MEETINGS_DIR)
    .filter((f) => f.endsWith(".mdx"));

  if (!files.length) return null;

  const meetings: UpcomingMeeting[] = files.map((f) => {
    const slug = f.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(MEETINGS_DIR, f), "utf-8");
    const { data } = matter(raw);
    const fm = data as MeetingFrontmatter;
    return { slug, ...fm };
  });

  meetings.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const today = new Date().toISOString().split("T")[0];
  return meetings.find((m) => m.date >= today) ?? meetings[meetings.length - 1];
}
