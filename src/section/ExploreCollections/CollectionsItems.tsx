import { Button } from "antd";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './items.css'
interface CollectionsItemsProps {
    img: string[];
    category: string[]
}
const CollectionsItems:React.FC<CollectionsItemsProps > = ({img,category}) => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
        <div>
           <Carousel responsive={responsive} >
                {img.map((image, index) => (
                    <div key={`slide-${index}`} className="relative h-full">
                        <img src={image} alt={`Slide ${index + 1}`} className="h-full" />
                        <Button className="absolute bottom-5 left-1/2 transform -translate-x-1/2">{category[index]}</Button>
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

export default CollectionsItems;
