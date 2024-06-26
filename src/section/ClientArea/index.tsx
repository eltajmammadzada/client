
import ClientItems from './ClientItems';

const ClientArea = () => {
    return (
        <div className='container my-20'>
            <h3 className='text-center text-4xl font-semibold text-On-Surface capitalize'>What People Are Saying</h3>
            <ClientItems rate={[5,5,5,5]} title={['Variety of Styles!','Quality of Clothing!','Customer Service!','Quality of Clothing!',]} desc={['"Fantastic shop! Great selection, fair prices, and friendly staff. Highly recommended. The quality of the products is exceptional, and the prices are very reasonable!"','"I absolutely love this shop! The products are high-quality and the customer service is excellent. I always leave with exactly what I need and a smile on my face."','"I love this shop! The products are always top-quality, and the staff is incredibly friendly and helpful. They go out of their way to make sure that Im satisfied with my purchase.”','"Fantastic shop! Great selection, fair prices, and friendly staff. Highly recommended. The quality of the products is exceptional, and the prices are very reasonable!"',]} name={['Lisa K.','Mark G.','Emily S.','Mark D.',]} date={['August 13, 2023','August 13, 2023','August 13, 2023','August 13, 2023',]} />
        </div>
    );
}

export default ClientArea;
