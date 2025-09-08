'use client'
import { Alert, Card, CardBody, CardFooter, CardHeader, Chip, HeroUIProvider, Link } from "@heroui/react";
import { MdCalendarMonth } from "react-icons/md";
import { GrWorkshop } from "react-icons/gr";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";
import { CgBee } from "react-icons/cg";

const events = [
  {
    id: '1',
    title: 'Monthly Beekeepers Meeting',
    date: '9/8/2025',
    time: '6:00 PM',
    location: 'Oxbow Meadows Environmental Learning Center',
    type: 'meeting',
    description: 'Join us for our monthly meeting to discuss organic beekeeping. Perfect for beekeepers of all experience levels.',
    speaker: {
      name: 'Ben Demoras',
      topic: 'Organic Beekeeping',
      bio: 'Ben will coming from Auburn University to give a presentation to our group on Organic Beekeeping.'
    }
  }
]

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

const news = [
  {
    id: '1',
    title: 'Silent Auction',
    date: '9/8/2025',
    content: 'A club member inherited a gem of an observation hive and used it for many years. He donated it to the club and bidding will start at $10. Submit your bid by sending an email to the club secretary. When you submit a bid you will be notified of the current bid. The auction will close the day of the October Picnic.',
    author: 'Club Secretary'
  },
]

export default function Home() {

  return (
    <HeroUIProvider>
      <div
        className='w-full relative bg-yellow-400 bg-opacity-50 text-white h-[400px] flex justify-center bg-center bg-cover'
        style={{ backgroundImage: 'url(header-image.jpg)' }}
      >
        <div className='z-1 h-full max-w-[1100px] flex items-center justify-center flex-col'>
          <h1 className='text-3xl font-bold text-center md:text-5xl'>
            Chattahoochee Valley Beekeepers
          </h1>
          <p className='text-xl pt-2 font-bold'>
            Cultivating the art and science of beekeeping in the Chattahoochee Valley
          </p>
          <div className='mt-4'>
            <Chip className='mr-2' color='warning' variant='solid'>
              50+ Active Members
            </Chip>
            <Chip className='ml-2' color='warning' variant='solid'>
              Monthly Meetings
            </Chip>
          </div>
        </div>
        <div className="z-0 absolute inset-0 bg-black" style={{ opacity: '0.6' }}></div>
      </div>
      <div className='flex justify-center flex-col w-full'>
        <Card className='max-w-[1100px] mx-2 w-full mt-8 p-8 text-black bg-zinc-100 mx-auto'>
          <CardHeader>
            <h2 className='text-xl font-bold'>
              Columbus Georgia&apos;s Premier Beekeeping Community
            </h2>
          </CardHeader>
          <CardBody>
            <p className='mb-2'>
              The <b>Chattahoochee Valley Beekeepers Association</b> is dedicated to promoting the art and science of beekeeping
              throughout the Chattahoochee Valley region in <b>Columbus, Georgia</b>. Whether you&apos;re a
              seasoned apiarist or just starting your journey into the fascinating world of <b>honey bees</b>,
              our club offers education, support, and community for all skill levels.
            </p>
            <p className='mb-2'>
              Located in <b>West Georgia</b>, we serve beekeepers throughout the greater Columbus area
              and surrounding counties. Our members benefit from shared knowledge, group purchasing power,
              and hands-on learning opportunities in a supportive environment.
            </p>
            <p className='mb-2'>
              Join us for <b>monthly meetings</b>, hands-on workshops, hive inspections, and social events.
              Together, we&apos;re working to support healthy bee populations and sustainable beekeeping
              practices in the <b>Chattahoochee Valley</b>.
            </p>
            <Alert
              title='Monthly Meetings'
              description='Educational presentations by expert beekeepers and industry professionals'
              color='warning'
              variant='faded'
              icon={<MdCalendarMonth className='w-4 h-4' />}
              className='mb-4 mt-4'
            />
            <Alert
              title='Hands-On Workshops'
              description='Learn practical beekeeping skills including hive management and honey extraction'
              color='warning'
              variant='faded'
              icon={<FaPeopleGroup />}
              className='mb-4'
            />
            <Alert
              title='Beginner Support'
              description='Yearly classes for new beekeepers starting their first hives'
              color='warning'
              variant='faded'
              icon={<GrWorkshop />}
              className='mb-4'
            />
            <Alert
              title='Group Purchasing Discounts'
              description='Members can order supplies, Nucs, or Bee Packages as a group for bulk discounts'
              color='warning'
              variant='faded'
              icon={<CgBee />}
            />
          </CardBody>
        </Card>
        <Card className='max-w-[1100px] mx-2 w-full mt-8 p-8 text-black bg-zinc-100 mx-auto'>
          <CardHeader>
            <h2 className='text-xl font-bold'>
              Serving the Chattahoochee Valley Region
            </h2>
          </CardHeader>
          <CardBody>
            <p className='mb-2'>
              Our club serves beekeepers throughout <b>Columbus, Georgia</b> and the surrounding
              Chattahoochee Valley region, including:
            </p>
            <p>
              Muscogee County
            </p>
            <p>
              Harris County
            </p>
            <p>
              Stewart County
            </p>
            <p>
              Talbot County
            </p>
            <p>
              Lee County
            </p>
            <p>
              Russell County
            </p>
          </CardBody>
        </Card>
        <Card className='max-w-[1100px] w-full mt-8 p-8 text-black bg-zinc-100 mx-auto'>
          <CardHeader>
            <h2 className='text-xl font-bold'>
              Upcoming Events
            </h2>
          </CardHeader>
          <CardBody>
            {events.slice(0, 2).map(event => (
              <div key={event.id} className="border-l-4 border-yellow-500 pl-4">
                <h3 className="font-semibold text-gray-800">{event.title}</h3>
                <p className="text-gray-600 text-sm">
                  <MdCalendarMonth className="w-4 h-4 inline mr-1" />
                  {formatDate(event.date)} at {event.time}
                </p>
                <p className="text-gray-600 text-sm">
                  <FaMapMarkerAlt className="w-4 h-4 inline mr-1" />
                  {event.location}
                </p>
              </div>
            ))}
          </CardBody>
          <CardFooter>
            {/* <button
          onClick={() => setCurrentPage('calendar')}
          className="mt-4 text-yellow-600 hover:text-yellow-700 font-medium"
        >
          View all events <FaArrowRight className='ml-1' />
        </button> */}
            <Link href='/events' className="mt-2 text-yellow-600 hover:text-yellow-700 font-medium">View Events <FaArrowRight className='ml-1' /></Link>
          </CardFooter>
        </Card>
        <Card className='max-w-[1100px] mx-2 w-full my-8 p-8 text-black bg-zinc-100 mx-auto'>
          <CardHeader>
            <h2 className='text-xl font-bold'>
              Latest News
            </h2>
          </CardHeader>
          <CardBody>
            <div className="space-y-4">
              {news.slice(0, 2).map((item, i) => (
                <article key={i} className="border-b border-gray-200 pb-4 last:border-b-0">
                  <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">
                    {new Date(item.date).toLocaleDateString()} • By {item.author}
                  </p>
                  <p className="text-gray-700">{item.content.substring(0, 150)}...</p>
                </article>
              ))}
            </div>
          </CardBody>
          <CardFooter>
            <Link href='/news' className="mt-2 text-yellow-600 hover:text-yellow-700 font-medium">Read All News <FaArrowRight className='ml-1' /></Link>
          </CardFooter>
        </Card>
      </div>
    </HeroUIProvider>
  );
}
