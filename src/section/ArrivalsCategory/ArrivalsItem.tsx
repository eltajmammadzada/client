import { Button, Popover } from 'antd';
import './item.css'
import Icon from '../../svg/icon';

interface ArrivalsItemProps {
    category:'sale'| 'new',
    img:string,
    size:('XS' |'L' | 'S' | 'M' | 'XL')[]
}

const ArrivalsItem:React.FC<ArrivalsItemProps> = ({category,img,size}) => {
    const content = (
        <div className='flex gap-2'>
           {size.map((selectedSize) => (
                <Button key={selectedSize}>{selectedSize}</Button>
            ))}
        </div>
    );
      const categoryClass = category === 'sale' ? 'sale' : 'new';
    return (
        <div className='lg:col-span-3 md:col-span-6 col-span-12 border border-solid border-gray-600 rounded-xl'>
           <div className='relative'>
            <img src={img} alt="pro1" className='rounded-t-[11px]' />
            <div className='bg-white h-6 w-6 p-[2px] rounded-xl absolute top-3 right-3'>
            <Icon icon='heart' size={20} />
            </div>
           <span className={`absolute top-3 left-3 py-[2px] px-3 rounded-[36px] text-white uppercase ${categoryClass}`} >{category}</span>
           <div className='absolute bottom-3 left-1/2 transform -translate-x-1/2 gap-6 flex'>
           <Button>Quick View</Button>
           <Popover content={content}>
           <Button>Add To Cart</Button>
           </Popover>
           </div>
           </div>
           <div className='flex gap-2 mt-4 items-center pl-2 pb-2'>
            <span className='text-base font-medium text-On-Surface capitalize leading-6'>$68.00</span><span className='text-sm font-medium leading-5 text-Secondary2 decoration-slice line-through'>$98.00</span><span className='bg-Primary px-2 py-[2px] rounded-[36px] text-sm font-medium leading-5 uppercase text-On-Surface'>-25%</span>
           </div>
        </div>
    );
}

export default ArrivalsItem;
