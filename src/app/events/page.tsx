'use client'
// import NavBar from "@/components/NavBar";
import { Card, CardBody, CardHeader, HeroUIProvider } from "@heroui/react";
import { MdCalendarMonth } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoMdClock } from "react-icons/io";
import { TbUserHexagon } from "react-icons/tb";


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
    },
    {
        id: '2',
        title: 'CVBA Picnic',
        date: '10/12/2025',
        time: '1:00 PM',
        location: '9089 GA Hwy 18, Pine Mountain, GA',
        type: 'social',
        description: 'Join us for our yearly CVBA picnic! Events will start at 1:00PM and be going through 4:30. We will have a 50/50 raffle and prizes for contest run from $50-$100. We will have smoker, honey, and arts and crafts competitions. The events are as follows: 1:00 Smoker Contest Starts, 2:30 Honey and Arts and Crafts Contest, 3:30 Dinner, 4:00 Inspect Smokers, 4:30 Awards for arts and crafts.',
        // speaker: {
        //     name: 'Ben Demoras',
        //     topic: 'Organic Beekeeping',
        //     bio: 'Ben will coming from Auburn University to give a presentation to our group on Organic Beekeeping.'
        // }
    }
]
type Event = 'meeting' | 'workshop' | 'inspection' | 'social' | 'other'

const getEventTypeColor = (type: Event) => {
    const colors = {
        meeting: 'bg-yellow-100 text-yellow-800 border-yellow-200',
        workshop: 'bg-blue-100 text-blue-800 border-blue-200',
        inspection: 'bg-green-100 text-green-800 border-green-200',
        social: 'bg-purple-100 text-purple-800 border-purple-200',
        other: 'bg-gray-100 text-gray-800 border-gray-200'
    } as const;
    return colors[type];
};

const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
};

interface EventProps {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  type: string;
  description: string;
  speaker?: {
    name: string;
    topic: string;
    bio: string;
  };
}

function sortByDate(events: EventProps[]): EventProps[] {
  return [...events].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });
}

export default function Home() {
const sortedEvents = sortByDate(events);
    return (
        <HeroUIProvider>
            <div
                className='w-full relative bg-yellow-600 bg-opacity-50 text-white h-[200px] flex justify-center'
            // style={{ backgroundImage: 'url(header-image.jpg)' }}
            >
                <div className='z-1 h-full max-w-[1100px] flex items-center justify-center flex-col'>
                    <h1 className='text-3xl font-bold text-center md:text-5xl'>
                        Beekeeping Events Calendar
                    </h1>
                    <p className='text-xl pt-2 font-bold text-center '>
                        Join us for meetings, workshops, and beekeeping events in Columbus, Georgia and the Chattahoochee Valley
                    </p>
                </div>
            </div>
            <div className='flex justify-center flex-col w-full'>
                <Card className='max-w-[1100px] mx-2 w-full mt-8 p-8 text-black bg-zinc-100 mx-auto'>
                    <CardHeader>
                        <h2 className='text-xl font-bold'>
                            Regular Meeting Schedule
                        </h2>
                    </CardHeader>
                    <CardBody>
                        <p className="text-gray-600 mb-4">
                            The <strong>Chattahoochee Valley Beekeepers</strong> meet regularly on the second Monday of each month at 6:00 PM.
                            Meeting locations can vary based on guest speakers and bi-monthly. Our two meeting locations are listed below.
                            <a href='/contact' className='font-semibold text-yellow-500'> Contact us</a> to get confirmation on this months club location.
                        </p>
                        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                            <h3 className="font-semibold text-yellow-800 mb-2">Meeting Locations</h3>
                            <div>
                                <address className="text-yellow-700 not-italic mb-8">
                                    <span className='font-semibold'>Oxbow Meadows Environmental Learning Center</span><br />
                                    3535 S Lumpkin Rd<br />
                                    Columbus, GA 31903
                                </address>
                                <address className="text-yellow-700 not-italic">
                                    <span className='font-semibold'>Striplin Terrace UMC</span><br />
                                    4170 Striplin Terrace<br />
                                    Columbus, GA 31909
                                </address>
                            </div>

                        </div>
                    </CardBody>
                </Card>
                {sortedEvents?.map((mtgEvent, i) => (
                    <Card className='max-w-[1100px] mx-2 w-full mt-8 p-8 text-black bg-zinc-100 mx-auto' key={i}>
                        <CardHeader>
                            <div className="flex items-center justify-between mb-4 w-full">
                                <h2 className="text-xl font-bold text-gray-800">{mtgEvent.title}</h2>
                                <span className={`px-2 py-1 text-xs font-medium rounded border ${getEventTypeColor(mtgEvent.type as Event)}`}>
                                    {mtgEvent.type.charAt(0).toUpperCase() + mtgEvent.type.slice(1)}
                                </span>
                            </div>
                        </CardHeader>
                        <CardBody>
                            <div className="space-y-2 mb-4">
                                <p className="text-gray-600 flex items-center">
                                    <MdCalendarMonth className="w-4 h-4 mr-2" />
                                    <time dateTime={mtgEvent.date}>{formatDate(mtgEvent.date)}</time>
                                </p>
                                <p className="text-gray-600 flex items-center">
                                    <IoMdClock className="w-4 h-4 mr-2" />
                                    {mtgEvent.time}
                                </p>
                                <p className="text-gray-600 flex items-center">
                                    <FaMapMarkerAlt className="w-4 h-4 mr-2" />
                                    <span>{mtgEvent.location}</span>
                                </p>
                            </div>

                            <p className="text-gray-700 mb-4">{mtgEvent.description}</p>

                            {mtgEvent.speaker && (
                                <div className="bg-yellow-50 p-3 rounded border border-yellow-200">
                                    <p className="font-medium text-yellow-800 flex items-center">
                                        <TbUserHexagon className="w-4 h-4 mr-2" />
                                        Speaker: <span className='pl-1'>{mtgEvent.speaker.name}</span>
                                    </p>
                                    <p className="text-yellow-700 text-sm">Topic: {mtgEvent.speaker.topic}</p>
                                    {mtgEvent.speaker?.bio && (
                                        <p className="text-yellow-600 text-xs mt-1">{mtgEvent.speaker?.bio}</p>
                                    )}
                                </div>
                            )}
                        </CardBody>
                    </Card>
                ))}
            </div>
        </HeroUIProvider>
    );
}
