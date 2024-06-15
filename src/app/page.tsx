'use client'
import Image from "next/image";
import FrameImg from '@/components/images/3114x3406.png';
import Slideshow from '../components/Slideshow';
import father1 from '@/components/images/ae8a889c-47b0-4040-b5b6-393bdecb23e5.JPG';
import father2 from '@/components/images/d3978894-064f-44ad-b656-9401a35221dd.JPG';
import father3 from '@/components/images/IMG_0005.jpg';
import father4 from '@/components/images/IMG_0027.jpg';
import father5 from '@/components/images/IMG_0184.JPG';
import father6 from '@/components/images/IMG_0187.JPG';
import father7 from '@/components/images/IMG_0191.JPG';
import father8 from '@/components/images/IMG_0201.JPG';
import father9 from '@/components/images/IMG_0226.JPG';
import father10 from '@/components/images/IMG_0377.JPG';
import father11 from '@/components/images/IMG_0393.JPG';
import father12 from '@/components/images/IMG_0782.JPG';
import father13 from '@/components/images/IMG_0846.JPG';
import father14 from '@/components/images/IMG_0853.JPG';
import father15 from '@/components/images/IMG_1075.jpg';
import father16 from '@/components/images/IMG_1121.JPG';
import father17 from '@/components/images/IMG_1219.jpg';
import father19 from '@/components/images/IMG_2481.jpg';
import father20 from '@/components/images/IMG_2626.JPG';
import father21 from '@/components/images/IMG_2796.jpg';
import father22 from '@/components/images/IMG_2798.JPG';
import father23 from '@/components/images/IMG_2814.JPG';
import father24 from '@/components/images/IMG_2830.JPG';
import father25 from '@/components/images/IMG_2835.jpg';
import father26 from '@/components/images/IMG_3066.JPG';
import father27 from '@/components/images/IMG_5192.jpg';
import father28 from '@/components/images/IMG_6031.jpg';
import father29 from '@/components/images/IMG_6512.jpg';
import father30 from '@/components/images/IMG_6583.jpg';
import father31 from '@/components/images/IMG_6616.jpg';
import father32 from '@/components/images/IMG_7621.jpg';
import type {StaticImageData} from 'next/image';
const images:StaticImageData[]  = [
    father1,
    father2,
    father3,
    father4,
    father5,
    father6,
    father7,
    father8,
    father9,
    father10,
    father11,
    father12,
    father13,
    father14,
    father15,
    father16,
    father17,
    father19,
    father20,
    father21,
    father22,
    father23,
    father24,
    father25,
    father26,
    father27,
    father28,
    father29,
    father30,
    father31,
    father32,

    // "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    // "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    // "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
];

import React from "react";

export default function Home() {
    return (
        <div>
            <Slideshow images={images}/>
            <Image
                src={FrameImg}
                alt="handsome face"
                width={1000}
                height={800}
                className=" w-[60%] object-cover absolute top-0 bottom-0 left-0 right-0 m-auto rotate-90 "
            />
            <style jsx>{`
                div {
                    text-align: center;
                }
            `}</style>
        </div>
    );
}
