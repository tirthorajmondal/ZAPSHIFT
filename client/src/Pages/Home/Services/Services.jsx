import {
    FaTruck,
    FaGlobeAsia,
    FaWarehouse,
    FaMoneyBillWave,
    FaBuilding,
    FaUndo,
} from "react-icons/fa";
import ServiceCard from './ServiceCard';
import SectionTitleDesc from "../../shared/SectionTitleDesc/SectionTitleDesc";


const Services = () => {
    const serviceData = [
        {
            icon: FaTruck,
            title: "Express & Standard Delivery",
            description:
                "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
        },
        {
            icon: FaGlobeAsia,
            title: "Nationwide Delivery",
            description:
                "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
        },
        {
            icon: FaWarehouse,
            title: "Fulfillment Solution",
            description:
                "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
        },
        {
            icon: FaMoneyBillWave,
            title: "Cash on Home Delivery",
            description:
                "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
        },
        {
            icon: FaBuilding,
            title: "Corporate Service / Contract In Logistics",
            description:
                "Customized corporate services which includes warehouse and inventory management support.",
        },
        {
            icon: FaUndo,
            title: "Parcel Return",
            description:
                "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
        },
    ];


    return (
        <section data-aos="fade-up" className="py-16 bg-secondary rounded-2xl my-12">
            <div className="max-w-6xl mx-auto px-6 ">
                <SectionTitleDesc title={'Our Services'} desc={' We provide complete logistics solutions to ensure smooth, fast, and reliable parcel delivery across Bangladesh.'} titleStyle={'text-white'} />

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {serviceData.map((service, index) => (
                        <ServiceCard key={index} service={service} count={index + 1} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;

