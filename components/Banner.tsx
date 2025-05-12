

export default function Banner() {
    const today = new Date();
    const f = function () {
        var d = new Date(today.getFullYear(), today.getMonth(), 1, 0, 0, 0)
        d.setDate(d.getDate() + 15 - d.getDay())
        return d
    }
    const calcDate = f();
    const withinFiveDays = today.getMonth() === calcDate.getMonth() && ((today.getDay() - calcDate.getDay()) <= 0);

    if (withinFiveDays) {
        const meetingLocation = (today.getMonth() + 1) % 2 === 0 ? 'Striplin Terrace UMC' : 'Oxbow Meadows' 
        // const directions = (today.getMonth() + 1) % 2 === 0 ? '32.523631501341896%2C%20-84.92014205292037' : '32.386370054391094%2C%20-84.95877673226478'
        const directions = (today.getMonth() + 1) % 2 === 0 ? 'Striplin%20Terrace%20UMC%20Columbus%20GA' : 'Oxbow%20Meadows%20Columbus%20GA'
        return (
            <div className="relative isolate justify-center flex items-center gap-x-6 overflow-hidden bg-yellow-100 px-6 py-2.5 sm:px-3.5 ">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                    <p className="text-sm/6 text-gray-900">
                        <strong className="font-semibold">Monthly Meeting</strong>
                        <svg viewBox="0 0 2 2" aria-hidden="true" className="mx-2 inline size-0.5 fill-current">
                            <circle r={1} cx={1} cy={1} />
                        </svg>
                        Join us on {today.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })} at {meetingLocation} from 6:00PM - 7:00PM.
                    </p>
                    <a
                        target="_blank"
                        href={`https://www.google.com/maps/search/?api=1&query=${directions}`}
                        className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-xs hover:bg-gray-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                    >
                        See in Maps <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
            </div>
        )
    }
    return null
}
