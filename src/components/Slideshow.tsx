import React, { useState, useEffect } from 'react';
import Image from "next/image";

// @ts-ignore
const Slideshow = ({ images, interval = 3000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, interval);

        return () => clearInterval(timer);
    }, [images, interval]);

    return (
        <div className="slideshow">
            <Image
                src={images[currentIndex]}
                alt="Slideshow Image"
                width={1000}
                height={1000}
                className="w-[100%] max-h-[35vw] rounded-[20%] border-8 border-orange-400 border-dotted object-cover absolute top-1 bottom-0 left-0 right-0 m-auto"
            />
            <style jsx>{`
                .slideshow {
                    position: absolute;
                    width: 100%;
                    max-width: 50%;
                    max-height: 90%;
                    overflow: hidden;
                    top: 0;
                    bottom: 0;
                    right: 0;
                    left: 0;
                    margin: auto;
                }
            `}</style>
        </div>
    );
};

export default Slideshow;
