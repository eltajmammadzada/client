
import Icon from '../../svg/icon';

const CustomerCommitment = () => {
    return (
        <div className='grid grid-cols-12 gap-5 container my-20'>
            <div className='lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12 text-center'>
                <Icon icon='phone-call' size={80} />
                <h3 className='pt-5 pb-3'>24/7 Customer Service</h3>
                <p>We're here to help you with any questions or concerns you have, 24/7.</p>
            </div>
            <div className='lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12 text-center'>
                <Icon icon='return' size={80} />
                <h3 className='pt-5 pb-3'>14-Day Money Back</h3>
                <p>If you're not satisfied with your purchase, simply return it within 14 days for a refund.</p>
            </div>
            <div className='lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12 text-center'>
                <Icon icon='guarantee' size={80} />
                <h3 className='pt-5 pb-3'>Our Guarantee</h3>
                <p> We stand behind our products and services and guarantee your satisfaction.</p>
            </div>
            <div className='lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12 text-center'>
                <Icon icon='002-delivery-truck-1' size={80} />
                <h3 className='pt-5 pb-3'>Shipping worldwide</h3>
                <p>We ship our products worldwide, making them accessible to customers everywhere.</p>
            </div>
        </div>
    );
}

export default CustomerCommitment;
