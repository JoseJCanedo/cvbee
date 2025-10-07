'use client'
import { Card, CardBody, CardHeader, HeroUIProvider } from "@heroui/react";
// import { getCurrentAndNextSecondMondays } from "@/utils/dates";

const news = [
  {
    id: '1',
    title: 'Silent Auction',
    date: '9/8/2025',
    content: 'A club member inherited a gem of an observation hive and used it for many years. He donated it to the club and bidding will start at $10. Submit your bid by sending an email to the club secretary. When you submit a bid you will be notified of the current bid. The auction will close the day of the October Picnic.',
    author: 'Club Secretary'
  },
  {
    id: '2',
    title: 'Christmas Tree Decoration',
    date: '9/15/2025',
    content: 'We need CVBA members to volunteer to decorate the Uptown Christmas tree this year if we are going to participate. We won last year and several other years in the past and we get a fair bit of great publicity for the club from the event. However, we need volunteers to be able to do this event. We have to order out tree no later than Nov 15th, 2025 if we are to participate. Decorating days would be December 3rd, and 4th from 10:00 AM - 5:00 PM. The lighting of the trees is scheduled for December 5th from 6:00 - 7:00 PM. Then the tree should be un-decorated no later than January 5th, 2026. If no one is interested in participating the club will not participate.',
    author: 'Club Secretary'
  },
  {
    id: '3',
    title: 'Bi-City Columbus Parade',
    date: '9/15/2025',
    content: 'We need people to volunteer for the parade. The parade is schedule for December 6th, 2025 at 10:00 AM. The route starts at Colin Powell Parkway in Phenix City and we would need to be there by 8:30 AM. We are looking for members who would like to be decorators and riders as well. Come dressed in your beekeeping suits or as bees. A sign up sheet will be available at the picnic.',
    author: 'Club Secretary'
  },
]

interface EventProps {
  id: string;
  title: string;
  date: string;
  content: string;
  author: string;
}

function sortByDate(events: EventProps[]): EventProps[] {
  return [...events].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });
}


export default function Home() {
  const sortedNews = sortByDate(news)
  return (
    <HeroUIProvider>
      <div
        className='w-full relative bg-yellow-600 bg-opacity-50 text-white h-[200px] flex justify-center'
      // style={{ backgroundImage: 'url(header-image.jpg)' }}
      >
        <div className='z-1 h-full max-w-[1100px] flex items-center justify-center flex-col'>
          <h1 className='text-3xl font-bold text-center md:text-5xl'>
            Chattahoochee Valley Beekeepers News & Updates
          </h1>
          <p className='text-xl pt-2 font-bold text-center '>
            Stay informed about beekeeping activities, events, and community news in Columbus, Georgia
          </p>
        </div>
      </div>
      <div className='flex justify-center flex-col w-full'>

        {sortedNews?.map((item, i) => (
          <Card key={i} className='max-w-[1100px] mx-2 w-full mt-8 p-8 text-black bg-zinc-100 mx-auto mb-10'>
            <CardHeader>
              <h2 className='text-xl font-bold'>
                {item.title}
              </h2>
            </CardHeader>
            <CardBody>
              <div className="text-gray-500 text-sm mb-4">
                <time dateTime={item.date}>{new Date(item.date).toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</time>
                <span className="mx-2">•</span>
                <span>By {item.author}</span>
              </div>
              <div className="text-gray-700 leading-relaxed">{item.content}</div>
            </CardBody>
          </Card>
        ))}
      </div>
    </HeroUIProvider>
  );
}
