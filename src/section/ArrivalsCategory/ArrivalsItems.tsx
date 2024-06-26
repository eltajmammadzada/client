import ArrivalsItem from './ArrivalsItem';

const ArrivalsItems = () => {
    return (
        <div className='grid lg:grid-cols-12 md:grid-cols-12 grid-cols-12 gap-6 mb-10'>
            <ArrivalsItem category='sale' img='./1.png' size={['XS', 'XL']} />
            <ArrivalsItem category='new'  img='./2.png' size={['XS', 'M']}/>
            <ArrivalsItem category='sale' img='./3.png' size={['XS','L', 'XL']} />
            <ArrivalsItem category='new'  img='./4.png' size={['XS','S', 'XL']}/>
        </div>

    );
}

export default ArrivalsItems;
