// ─────────────────────────────────────────────
// CVBA Site Constants
// Edit this file to update officers, meeting
// details, and navigation links.
// ─────────────────────────────────────────────

export const SITE_NAME = "Chattahoochee Valley Beekeepers Association";
export const SITE_SHORT_NAME = "CVBA";
export const SITE_TAGLINE = "Keeping Bees. Building Community.";
export const SITE_DESCRIPTION =
  "The Chattahoochee Valley Beekeepers Association serves hobbyist and commercial beekeepers across the Chattahoochee Valley region of Georgia and Alabama.";

// ─── Contact ───────────────────────────────────
export const CONTACT_EMAIL = "cvbasecretary1@gmail.com"; // update as needed
export const SOCIAL_LINKS = {
  facebook: "https://facebook.com/cvba", // update or set to "" to hide
  instagram: "", // set to "" to hide
};

// ─── Navigation ────────────────────────────────
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  // { label: "Officers", href: "/#officers" },
  { label: "Meetings", href: "/#meetings" },
  { label: "Updates", href: "/updates" },
  { label: "Marketplace", href: "/products" },
];

// ─── Officers ──────────────────────────────────
// Add, remove, or edit entries here.
// photo: path relative to /public, e.g. "/officers/jane.jpg"
//        or set to "" to show initials placeholder
export interface Officer {
  name: string;
  title: string;
  email?: string;
  photo?: string;
}

export const OFFICERS: Officer[] = [
  {
    name: "Dr. Kevin Weiss",
    title: "President",
    // email: "president@cvba.org",
    photo: "/officers/kevin.png",
  },
  {
    name: "Jose Canedo",
    title: "Vice President",
    // email: "vp@cvba.org",
    photo: "/officers/jose.png",
  },
  {
    name: "Frances",
    title: "",
    // email: "secretary@cvba.org",
    // photo: "",
  },
  {
    name: "Barbara",
    title: "",
    // email: "treasurer@cvba.org",
    // photo: "",
  },
  // {
  //   name: "Sue Davis",
  //   title: "Education Chair",
  //   email: "",
  //   photo: "",
  // },
  // {
  //   name: "Tom Brown",
  //   title: "Newsletter Editor",
  //   email: "",
  //   photo: "",
  // },
];

// ─── Meetings ──────────────────────────────────
export const MEETING_LOCATIONS = [
  {
    id: "oxbow",
    name: "Oxbow Meadows",
    address: "3535 S Lumpkin Rd, Columbus, GA 31903",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Oxbow+Meadows+Columbus+GA",
  },
  // TODO: add second alternating venue
  // {
  //   id: "second-venue-id",
  //   name: "Venue Name",
  //   address: "Street, City, State ZIP",
  //   googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=...",
  // },
];

export const MEETING_INFO = {
  schedule: "Second Monday of each month",
  time: "6:00 PM",
  whatToExpect: [
    "Introductions and announcements",
    "Educational presentation or hands-on demo",
    "Open Q&A with experienced beekeepers",
    "Networking",
    "Raffles",
  ],
  notes:
    "Meetings are open to all members. New and prospective beekeepers are always welcome!",
};

// ─── Updates listing page ──────────────────────
export const UPDATES_PER_PAGE = 9; // how many posts to show on /updates
