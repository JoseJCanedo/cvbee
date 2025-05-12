import Link from "next/link";

export default function Hero() {
  return (
    <section className="text-center py-32 px-4 sm:px-8 md:px-16 lg:px-24 bg-[url(/queen_bee.jpg)] bg-gray-500 bg-blend-multiply bg-cover">
      <h1 className="font-sans text-3xl tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6">
        Chattahoochee Valley Beekeepers Association
      </h1>
      {/* <img rel="icon" src="/favicon.svg" width='100'/> */}
      <p className="text-xl text-white mb-12 font-light">
        Born to make honey. Come bee a part of our journey.
      </p>
      <div className="flex justify-center space-x-6">
        {/* <Link
          href="/about"
          className="bg-black text-white dark:bg-white dark:text-black px-5 py-2 rounded-md text-base font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition duration-300"
        >
          About Us
        </Link> */}
        <Link
          href="/membership"
          className="bg-black bg-white text-black px-5 py-2 rounded-md text-base font-semibold hover:bg-yellow-400 transition duration-300"
        >
          Become a Member
        </Link>
      </div>
    </section>
  );
}
