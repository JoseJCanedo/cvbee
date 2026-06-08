import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import OfficersSection from "@/components/OfficersSection";
import MeetingSection from "@/components/MeetingSection";
import UpdatesPreview from "@/components/UpdatesPreview";
import Footer from "@/components/Footer";
import { getAllPosts } from "@/lib/mdx";
import { getUpcomingMeeting } from "@/lib/meetings";

export default function HomePage() {
  const recentPosts = getAllPosts().slice(0, 3);
  const upcomingMeeting = getUpcomingMeeting();

  return (
    <>
      <NavBar />
      <main>
        <HeroSection />
        <OfficersSection />
        <MeetingSection upcomingMeeting={upcomingMeeting} />
        <UpdatesPreview posts={recentPosts} />
      </main>
      <Footer />
    </>
  );
}
