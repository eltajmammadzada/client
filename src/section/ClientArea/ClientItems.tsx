import { Rate } from 'antd';
import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// rate title desc name date
interface ClientItemsPropss {
    rate: number[];
    title: string[];
    desc: string[];
    name: string[];
    date: string[];
}
const ClientItems:React.FC<ClientItemsPropss > = ({rate,title,desc,name,date}) => {
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
        <Carousel responsive={responsive} swipeable={false} showDots={true} draggable={false}>
  {rate.map((rate, index) => (
                    <div key={`slide-${index}`} className='mt-10'>
    <Rate defaultValue={rate} />
    <h3 className='text-xl font-semibold text-On-Surface capitalize'>{title[index]}</h3>
    <p className='pt-2 pb-4 text-On-Surface text-base font-normal'>{desc[index]}</p>
    <h4 className='text-[16px] leading-7 capitalize text-On-Surface'>{name[index]}</h4>
    <span className='text-xs font-normal text-Secondary2'>{date[index]}</span>
                    </div>
                ))}
</Carousel>
    );
}

export default ClientItems;
