import Header from "components/Header";
import Hero from "components/Hero";
import Features from "components/Features";
import Section from "components/Section";
import Footer from "components/Footer";
import Customers from "components/Customers";
import Image from "next/image";
import Accordion from "components/Accordion";
import Reviews from "components/Reviews";
import Download from "components/Download";

export default function Page() {
  return (
    <div>
      <main>
        {/* <Hero /> */}
        
        <Section
          rightHalf={<></>}
          leftHalf={
            <div className="flex flex-col justify-end">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
                Coming Soon
              </h2>
              <p className="text-xl font-light">
                Check back shortly
              </p>
            </div>
          }
        />
        {/* <Reviews />
        <Download /> */}
      </main>
    </div>
  );
}
