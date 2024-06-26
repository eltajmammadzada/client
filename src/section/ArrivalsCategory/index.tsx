import { Tabs } from 'antd';
import ArrivalsItems from './ArrivalsItems.tsx';

const ArrivalsCategory = () => {
    return (
        <section className='container'>
            <h3 className='text-center text-[36px] font-semibold capitalize text-On-Surface mt-6'>What's new</h3>
            <Tabs
        centered
    defaultActiveKey="1"
    items={[
      {
        label: 'TOPS',
        key: '1',
        children: <ArrivalsItems />,
      },
      {
        label: 'Accessories',
        key: '2',
        children: <ArrivalsItems />,
      },
      {
        label: 'Short',
        key: '3',
        children: <ArrivalsItems />,
      },
      {
        label: 'Shirt',
        key: '4',
        children: <ArrivalsItems />,
      },
    ]}
  />
        </section>
    );
}

export default ArrivalsCategory;
