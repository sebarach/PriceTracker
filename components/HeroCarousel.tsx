"use client"

import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";

const HeroCarouselImgs = [
 { imgUrl:"/assets/images/hero-1.svg",alt:"smartwatch"},
 { imgUrl:"/assets/images/hero-2.svg",alt:"bag"},
 { imgUrl:"/assets/images/hero-3.svg",alt:"lamp"},
 { imgUrl:"/assets/images/hero-4.svg",alt:"air fryer"},
 { imgUrl:"/assets/images/hero-5.svg",alt:"chair"},
]

const HeroCarousel = () => {
  return (
    <Carousel>
        {HeroCarouselImgs.map((img) => (
            <Image
            src={img.imgUrl} 
            alt={img.alt}
            width={484}
            height={484}
            className='object-contain'
            key={img.alt}
            />
        ))}
    </Carousel>
  ) 
}

export default HeroCarousel