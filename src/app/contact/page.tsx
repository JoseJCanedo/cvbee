'use client'
// import NavBar from "@/components/NavBar";
import { Card, CardBody, CardHeader, HeroUIProvider } from "@heroui/react";
import { MdOutlineMailOutline } from "react-icons/md";


export default function Home() {
    return (
        <HeroUIProvider>
            <div
                className='w-full relative bg-yellow-600 bg-opacity-50 text-white h-[200px] flex justify-center'
            // style={{ backgroundImage: 'url(header-image.jpg)' }}
            >
                <div className='z-1 h-full max-w-[1100px] flex items-center justify-center flex-col'>
                    <h1 className='text-3xl font-bold text-center md:text-5xl'>
                        Contact Chattahoochee Valley Beekeepers
                    </h1>
                    <p className='text-xl pt-2 font-bold'>
                        Reach out with any questions about membership
                    </p>
                    {/* <div className='mt-4'>
            <Chip className='mr-2' color='warning' variant='solid'>
              50+ Active Members
            </Chip>
            <Chip className='ml-2' color='warning' variant='solid'>
              Monthly Meetings
            </Chip>
          </div> */}
                </div>
                {/* <div className="z-0 absolute inset-0 bg-black" style={{ opacity: '0.1' }}></div> */}
            </div>
            <div className='flex justify-center flex-col w-full'>
                <Card className='max-w-[1100px] mx-2 w-full mt-8 p-8 text-black bg-zinc-100 mx-auto'>
                    <CardHeader>
                        <h2 className='text-xl font-bold'>
                            Get in touch
                        </h2>
                    </CardHeader>
                    <CardBody>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <MdOutlineMailOutline className="w-7 h-7 text-yellow-600 mr-3" />
                                <div>
                                    <p className="font-medium">Email</p>
                                    <a href="mailto:cvbasecretary1@gmail.com" className="text-yellow-600 hover:text-yellow-700">
                                        cvbasecretary1@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </CardBody>
                </Card>
                <Card className='max-w-[1100px] mx-2 w-full mt-8 p-8 text-black bg-zinc-100 mx-auto'>
                    <CardHeader>
                        <h2 className='text-xl font-bold'>
                            Club Officers
                        </h2>
                    </CardHeader>
                    <CardBody>
                        <div className="space-y-4">
                            <div>
                                <p className="font-medium">President</p>
                                <p className="text-gray-600">TBA</p>
                                {/* <a href="mailto:president@cvbeeks.org" className="text-gray-500 text-sm hover:text-yellow-600">
                                    president@cvbeeks.org
                                </a> */}
                            </div>
                            <div>
                                <p className="font-medium">Vice President</p>
                                <p className="text-gray-600">TBA</p>
                                {/* <a href="mailto:vp@cvbeeks.org" className="text-gray-500 text-sm hover:text-yellow-600">
                                    vp@cvbeeks.org
                                </a> */}
                            </div>
                            <div>
                                <p className="font-medium">Secretary/Treasurer</p>
                                <p className="text-gray-600">TBA</p>
                                {/* <a href="mailto:secretary@cvbeeks.org" className="text-gray-500 text-sm hover:text-yellow-600">
                                    secretary@cvbeeks.org
                                </a> */}
                            </div>
                        </div>
                    </CardBody>
                </Card>
                <Card className='max-w-[1100px] w-full mt-8 p-8 text-black bg-zinc-100 mx-auto'>
                    <CardHeader>
                        <h2 className='text-xl font-bold'>
                            Join Our Beekeepers
                        </h2>
                    </CardHeader>
                    <CardBody>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="font-semibold text-gray-700 mb-2">Membership Benefits</h3>
                                <ul className="text-gray-600 space-y-1">
                                    <li>• Monthly educational meetings with expert speakers</li>
                                    <li>• Hands-on beekeeping workshops and training</li>
                                    <li>• Group purchasing discounts on equipment</li>
                                    <li>• Mentoring for beginning beekeepers</li>
                                    <li>• Access to club equipment and resources</li>
                                    <li>• Networking with experienced local beekeepers</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-700 mb-2">How to Join</h3>
                                <p className="text-gray-600 mb-2">
                                    New members are always welcome! We have both annual and family memberships available..
                                </p>
                                <p className="text-gray-600 mb-2">
                                    Attend any monthly meeting to learn more, or contact us directly to get started with beekeeping in the Chattahoochee Valley.
                                </p>
                                <div className="bg-yellow-50 p-3 rounded border border-yellow-200 mt-3">
                                    <p className="text-yellow-800 text-sm">
                                        <strong>Next Meeting:</strong> Second Monday of the month at 6:00 PM
                                    </p>
                                </div>
                            </div>
                        </div>
                    </CardBody>
                    {/* <CardFooter>
                        <Link href='/events'>View Events <FaArrowRight className='ml-1' /></Link>
                    </CardFooter> */}
                </Card>
                <Card className='max-w-[1100px] mx-2 w-full my-8 p-8 text-black bg-zinc-100 mx-auto'>
                    <CardHeader>
                        <h2 className='text-xl font-bold'>
                            Send Us A Message
                        </h2>
                    </CardHeader>
                    <CardBody>
                        <div className="space-y-4">
                            <div className="grid gap-4 md:grid-cols-2">
                                <div>
                                    <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                    <input
                                        id="contact-name"
                                        name="name"
                                        type="text"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                    <input
                                        id="contact-email"
                                        name="email"
                                        type="email"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                                        placeholder="your@email.com"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="contact-subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                                <input
                                    id="contact-subject"
                                    name="subject"
                                    type="text"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                                    placeholder="Message subject"
                                />
                            </div>
                            <div>
                                <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea
                                    id="contact-message"
                                    name="message"
                                    rows={5}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                                    placeholder="Your message..."
                                ></textarea>
                            </div>
                            <button
                                disabled={true}
                                onClick={() => alert('Message sent! (This is a demo - in production, this would submit the form)')}
                                className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-yellow-600 transition-colors"
                            >
                                Send Message
                            </button>
                        </div>
                    </CardBody>

                </Card>
            </div>
        </HeroUIProvider>
    );
}
