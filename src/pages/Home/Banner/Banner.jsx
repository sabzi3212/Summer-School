import { useState, useEffect } from 'react';
import backgroundImage from '../../../assets/images/artem-kniaz-DqgMHzeio7g-unsplash.jpg'


const Banner = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const campStartDate = new Date('2023-07-01T00:00:00');

    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    const timeUntilCamp = Math.max(0, campStartDate.getTime() - currentTime.getTime());

    const days = Math.floor(timeUntilCamp / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeUntilCamp % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeUntilCamp % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeUntilCamp % (1000 * 60)) / 1000);

    return (
        <div className="h-[400px] mb-6 mt-6" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="timer flex flex-col justify-center items-center py-20">
                <h3 className='font-bold text-3xl text-orange-400'>Summer Camp Starts In</h3>
                <h1>{days}d {hours}h {minutes}m {seconds}s</h1>
                <button className='btn bg-orange-300 mt-5'>Get Started</button>
            </div>
        </div>
    );
};

export default Banner;