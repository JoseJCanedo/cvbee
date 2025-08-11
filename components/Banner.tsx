import data from '../data/meetingOverrides.json'

export default function Banner() {
    const today = new Date();
    const f = function () {
        var d = new Date(today.getFullYear(), today.getMonth(), 1, 0, 0, 0)
        var isMonday = (d.getDay() == 1);
        var targetDate = 15 - (d.getDay() - 1);
        if (isMonday) targetDate -= 7;
        d.setDate(targetDate)
        return d
    }
    const calcDate = f();
    const withinFiveDays = today.getMonth() === calcDate.getMonth() && ((today.getDate() - calcDate.getDate()) <= 0);
    if (withinFiveDays && today.getMonth() === 22) {
        let meetingLocation = (today.getMonth() + 1) % 2 === 0 ? 'Striplin Terrace UMC' : 'Oxbow Meadows'
        let overrideInfo;
        const dateKey = `${(today.getMonth() + 1).toString().padStart(2, "0")}${today.getFullYear()}`
        if(data[dateKey]){
            overrideInfo = data[dateKey]
            if(overrideInfo.location ){
                meetingLocation = overrideInfo.location
            }
        }
        return (
            <div className="relative isolate justify-center flex items-center gap-x-6 overflow-hidden bg-yellow-100 px-6 py-2.5 sm:px-3.5 ">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                    <p className="text-sm/6 text-gray-900">
                        <strong className="font-semibold">{overrideInfo ? overrideInfo.reason : "Monthly Meeting"}</strong>
                        <svg viewBox="0 0 2 2" aria-hidden="true" className="mx-2 inline size-0.5 fill-current">
                            <circle r={1} cx={1} cy={1} />
                        </svg>
                        Join us on {calcDate.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })} at {meetingLocation} from 6:00PM - 7:00PM.
                    </p>
                    <a
                        target="_blank"
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURI(meetingLocation + ' Columbus, GA')}`}
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
