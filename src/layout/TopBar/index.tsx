import React from 'react';
import './index.css';
import { Select } from 'antd';
import Icon from '../../svg/icon';

const { Option } = Select;

const TopBar: React.FC = () => {
    return (
        <div className='topBar'>
            <div className="container">
               <div className='grid grid-cols-12 items-center py-3 lg:gap-0 md:gap-0 gap-2'>
                  <div className='space-x-5 lg:col-span-4 md:col-span-5 col-span-12 lg:text-start md:text-start text-center'>
                <Select
                className='bg-transparent'
                    defaultValue="english"
                    style={{ width: 120 }}
                >
                    <Option value="english">English</Option>
                    <Option value="azerbaijan">Azerbaijan</Option>
                </Select>

                <Select
                    defaultValue="usd"
                    style={{ width: 120 }}
                >
                    <Option value="usd">
                    <Icon icon='um' size={16} />
                        USD
                    </Option>
                    <Option value="azn">
                        <Icon icon='az' size={16} /> AZN
                    </Option>
                </Select>
                  </div>

                  <span className='lg:col-span-6 md:col-span-5 col-span-12 text-center text-white text-sm font-semibold'>New customers save 10% with the code GET10</span>
                  
                  <div className='lg:col-span-2 md:col-span-2 col-span-12 flex gap-5 lg:justify-end md:justify-end justify-center'>
                    <Icon icon='facebook' size={16} color='white' />
                    <Icon icon='instagram' size={16} color='white' />
                    <Icon icon='youtube' size={16} color='white' />
                  </div>
               </div>
            </div>
        </div>
    );
};

export default TopBar;
