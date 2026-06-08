import { MEETING_INFO, MEETING_LOCATIONS } from "@/lib/constants";
import { formatDate } from "@/lib/mdx";
import type { UpcomingMeeting } from "@/lib/meetings";

function CalendarIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function MapIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function MicIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" y1="19" x2="12" y2="23" />
      <line x1="8" y1="23" x2="16" y2="23" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

interface Props {
  upcomingMeeting: UpcomingMeeting | null;
}

export default function MeetingSection({ upcomingMeeting }: Props) {
  const location = upcomingMeeting
    ? MEETING_LOCATIONS.find((l) => l.id === upcomingMeeting.locationId) ?? MEETING_LOCATIONS[0]
    : MEETING_LOCATIONS[0];

  return (
    <section id="meetings" className="py-24">
      <div className="max-w-6xl mx-auto px-6">

        <div className="mb-12">
          <p className="text-accent font-semibold tracking-widest text-sm uppercase mb-3">
            Come Join Us
          </p>
          <h2 className="font-display text-4xl font-bold">
            Monthly Meetings
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

          {/* Left: schedule, location, optional speaker */}
          <div className="space-y-6">

            {/* When */}
            <div className="flex gap-4 p-6 rounded-xl border border-border bg-card">
              <div className="text-accent mt-0.5 shrink-0">
                <CalendarIcon />
              </div>
              <div>
                <p className="font-display font-semibold text-lg mb-1">When</p>
                <p className="text-foreground/80">{MEETING_INFO.schedule}</p>
                <p className="text-accent font-semibold text-xl mt-1">{MEETING_INFO.time}</p>
              </div>
            </div>

            {/* Where */}
            <div className="flex gap-4 p-6 rounded-xl border border-border bg-card">
              <div className="text-accent mt-0.5 shrink-0">
                <MapIcon />
              </div>
              <div>
                <div className="flex items-baseline gap-3 mb-1">
                  <p className="font-display font-semibold text-lg">Where</p>
                  {upcomingMeeting && (
                    <span className="text-xs font-medium text-accent/80 bg-accent/10 px-2 py-0.5 rounded-full">
                      {formatDate(upcomingMeeting.date)}
                    </span>
                  )}
                </div>
                <p className="text-foreground/80 font-medium">{location.name}</p>
                <p className="text-muted text-sm mt-0.5">{location.address}</p>
                {location.googleMapsUrl && (
                  <a
                    href={location.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-accent text-sm font-medium hover:underline mt-2"
                  >
                    View on Google Maps →
                  </a>
                )}
              </div>
            </div>

            {/* Speaker / topic (conditional) */}
            {upcomingMeeting?.speaker && (
              <div className="flex gap-4 p-6 rounded-xl border border-border bg-card">
                <div className="text-accent mt-0.5 shrink-0">
                  <MicIcon />
                </div>
                <div>
                  <p className="font-display font-semibold text-lg mb-1">This Month</p>
                  <p className="text-foreground/80 font-medium">{upcomingMeeting.speaker}</p>
                  {upcomingMeeting.speakerTitle && (
                    <p className="text-muted text-sm">{upcomingMeeting.speakerTitle}</p>
                  )}
                  {upcomingMeeting.topic && (
                    <p className="text-foreground/70 text-sm mt-2 italic">
                      &ldquo;{upcomingMeeting.topic}&rdquo;
                    </p>
                  )}
                </div>
              </div>
            )}

            {MEETING_INFO.notes && (
              <p className="text-sm text-muted italic px-1">{MEETING_INFO.notes}</p>
            )}
          </div>

          {/* Right: what to expect */}
          <div className="p-6 rounded-xl border border-border bg-card">
            <p className="font-display font-semibold text-lg mb-5">What to Expect</p>
            <ul className="space-y-4">
              {MEETING_INFO.whatToExpect.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-accent mt-0.5 shrink-0">
                    <CheckIcon />
                  </span>
                  <span className="text-foreground/80 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
