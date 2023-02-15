import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

const Ban = () => {
  return ( 
  <div className="relative">
    <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100-to-transparent bottom-0 z-20"/>
<Carousel
autoPlay
infiniteLoop
showStatus={false}
showIndicators={false}
showThumbs={false}
interval={5000} >

    <div>
<Image loading="lazy" src="/ban1.png" alt="ban1" width={1500} height={600} />
    </div>
    <div>
    <Image loading="lazy" src="/ban2.png" alt="ban2" width={1500} height={600}/>

    </div>
    
</Carousel>
    </div>
  )
}

export default Ban