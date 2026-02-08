import WorksCard from './WorksCard';
import { TbTruckDelivery } from "react-icons/tb";


const HowItWorks = () => {
    const worksData = [
        {
            Icon: TbTruckDelivery,
            title: 'Booking Pick & Drop',
            desc: 'From personal packages to business shipments — we deliver on time, every time.'
        },
        {
            Icon: TbTruckDelivery,
            title: 'Booking Pick & Drop',
            desc: 'From personal packages to business shipments — we deliver on time, every time.'
        },
        {
            Icon: TbTruckDelivery,
            title: 'Booking Pick & Drop',
            desc: 'From personal packages to business shipments — we deliver on time, every time.'
        },
        {
            Icon: TbTruckDelivery,
            title: 'Booking Pick & Drop',
            desc: 'From personal packages to business shipments — we deliver on time, every time.'
        },
    ]

    return (
        <section className='mx-4 md:mx-8 lg:mx-16'>
            <h3 className='text-3xl font-extrabold text-secondary mb-8' data-aos="fade-right">How It Works</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {
                    worksData.map((card, index) => <WorksCard key={index} work={card} index={index + 1} />)
                }
            </div>

        </section>
    );
};

export default HowItWorks;