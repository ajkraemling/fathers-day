import React, {useState, useEffect} from 'react';
import Image from "next/image";

// @ts-ignore
const Slideshow = ({images, interval = 3000}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, interval);

        return () => clearInterval(timer);
    }, [images, interval]);

    return (
        <Image
            src={images[currentIndex]}
            alt="Slideshow Image"
            width={1000}
            height={1000}
            className="rounded-[20%] border-8 border-orange-400 border-dotted object-cover"
        />
    );
};

export default Slideshow;
