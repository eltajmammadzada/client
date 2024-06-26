import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../svg/icon';

const Header:React.FC = () => {
    return (
        <header className='container py-7'>
            <div className='grid grid-cols-12 items-center'>
            <Link to={'/'} className='text-[30px] font-semibold leading-[42px] capitalize text-On-Surface lg:col-span-2 md:col-span-2 col-span-7 lg:order-1 md:order-1 order-2 lg:text-start md:text-start text-center'>anvogue</Link>
              <Icon icon='menu' size={24} className='lg:!hidden md:!hidden flex col-span-2 order-1' />
            <nav className='lg:col-span-8 md:col-span-8 gap-5 lg:flex md:flex hidden lg:order-2 md:order-2'>
                <Link to={'/'} className='text-sm text-On-Surface font-semibold leading-5 uppercase'>Home</Link>
                <Link to={'/'} className='text-sm text-On-Surface font-semibold leading-5 uppercase'>Features</Link>
                <Link to={'/'} className='text-sm text-On-Surface font-semibold leading-5 uppercase'>Shop</Link>
                <Link to={'/'} className='text-sm text-On-Surface font-semibold leading-5 uppercase'>Product</Link>
                <Link to={'/'} className='text-sm text-On-Surface font-semibold leading-5 uppercase'>Blog</Link>
                <Link to={'/'} className='text-sm text-On-Surface font-semibold leading-5 uppercase'>Pages</Link>
            </nav>
            <div className='lg:col-span-2 md:col-span-2 col-span-3 flex gap-3 justify-end order-3'>
                <Icon icon='search' size={24} color='#1F1F1F' />
                <Icon icon='user' size={24} color='#1F1F1F' />
                <Icon icon='heart' size={24} color='#1F1F1F' />
                <Icon icon='shopping-cart' size={24} color='#1F1F1F' />
            </div>
            </div>
        </header>
    );
}

export default Header;
