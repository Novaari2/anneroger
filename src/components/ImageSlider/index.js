"use client"

import { Carousel } from "@material-tailwind/react";
import Image from "next/image";

const ImageSlider = () => {
    return(
        <div>
            <Image src="/images/banner.jpg" alt="image-1" width={1250} height={1200} className="mx-auto"/>
        </div>
    )
}
export default ImageSlider;