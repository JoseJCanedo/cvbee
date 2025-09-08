import { getCurrentAndNextSecondMondays } from "@/utils/dates";

export default function Footer() {
    const monthData = getCurrentAndNextSecondMondays();
    return (
        <footer className="bg-black text-white py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <div className="flex items-center justify-center mb-4">
                        <div className="w-8 h-8 bg-yellow-500 rounded-full mr-3 flex items-center justify-center">
                            <span className="text-white font-bold text-sm">🐝</span>
                        </div>
                        <span className="font-bold text-xl">Chattahoochee Valley Beekeepers</span>
                    </div>
                    <p className="text-gray-300 mb-2">
                        Cultivating the art and science of beekeeping in the Chattahoochee Valley
                    </p>
                    <p className="text-gray-400 text-sm mb-4">
                        Serving Columbus, GA and the greater Chattahoochee Valley region
                    </p>
                    <div className="flex justify-center space-x-4 mb-4 text-sm">
                        <a href="mailto:info@cvbeeks.org" className="text-gray-300 hover:text-yellow-400">
                            Email: info@cvbeeks.org
                        </a>
                        {/* <span className="text-gray-500">•</span>
                        <a href="tel:+17065552337" className="text-gray-300 hover:text-yellow-400">
                            Phone: (706) 555-BEES
                        </a> */}
                    </div>
                    <p className="text-gray-400 text-sm">
                        © {monthData?.current?.year} Chattahoochee Valley Beekeepers Association. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}