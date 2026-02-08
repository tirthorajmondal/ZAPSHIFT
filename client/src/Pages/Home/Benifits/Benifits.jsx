import image1 from '../../../assets/benifits/live-tracking.png';
import image2 from '../../../assets/benifits/safe-delivery.png';
import BenifitCard from './BenifitCard';

const Benifits = () => {
    const benefitsData = [
        {
            image: image1,
            title: "Live Parcel Tracking",
            description: "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind."
        },
        {
            image: image2,
            title: "100% Safe Delivery",
            description: "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time."
        },
        {
            image: image2,
            title: "24/7 Call Center Support",
            description: "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us."
        }
    ]
    return (
        <div className="my-24 flex flex-col gap-y-6 max-w-11/12 mx-auto">
            {
                benefitsData.map((item, index) => <BenifitCard key={index} benifit={item} />)
            }
        </div>
    );
};

export default Benifits;