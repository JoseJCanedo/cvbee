'use client'
import { Card, CardBody, CardHeader, HeroUIProvider } from "@heroui/react";
import { getCurrentAndNextSecondMondays } from "@/utils/dates";

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

        {news.map((item, i) => (
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
