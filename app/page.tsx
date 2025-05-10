
import Hero from "components/Hero";
import Features from "components/Features";
import Section from "components/Section";

import Customers from "components/Customers";
import Image from "next/image";
import Accordion from "components/Accordion";
import Reviews from "components/Reviews";
import Download from "components/Download";

export default function Page() {
  return (
    <div>
      <main>
        <Hero />
        {/* <Features /> */}
        <div className="dark:bg-gray-600">
          <Section
            leftHalf={
              <>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
                  Our Mission
                </h2>
                <p className="text-xl font-light">
                  To educate and further the local beekeeping community by partnering with local institutions and mentoring and educating
                  new and seasoned beekeepers.
                </p>
                <br />
                <p className="text-xl font-light">
                  We partner with Columbus State University and Oxbow Meadows to provide yearly beekeeping workshops, honey extraction demos, and
                  provide our members with networking and learning opportunities.
                </p>
              </>
            }
            rightHalf={
              <Image src={"/favicon.svg"} alt="section-image" width={500} height={100} className=" h-auto" />
            }
          />
        </div>

        <Customers />
        <Section
          leftHalf={<Accordion />}
          rightHalf={
            <div className="flex flex-col justify-end">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
                How we serve our members
              </h2>
              <p className="text-xl font-light">
                There are a large number of benefits that come with being a CVBA member. Signing up is easy. Feel free to join us at a meeting to sign up
                or email us a completed application.
              </p>
            </div>
          }
        />
        {/* <Reviews /> */}
        {/* <Download /> */}
      </main>
    </div>
  );
}
