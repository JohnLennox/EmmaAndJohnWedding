import {useEffect, useState} from "react";

function Countdown() {
    const calculateTimeLeft = () => {
        const endDate = new Date("November 17, 2024 00:00:00").getTime();
        const now = new Date().getTime();
        const difference = endDate - now;

        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((difference % (1000 * 60)) / 1000),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        // Clear the interval on component unmount
        return () => clearTimeout(timer);
    });

    return (
        <div>
            <h3>
                {timeLeft.days || 0} days {timeLeft.hours || 0} hours {timeLeft.minutes || 0} minutes until <strong>"I do"</strong>
            </h3>
        </div>
    );
}

export default Countdown;