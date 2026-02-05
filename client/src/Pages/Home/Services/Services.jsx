import {
    FaTruck,
    FaGlobeAsia,
    FaWarehouse,
    FaMoneyBillWave,
    FaBuilding,
    FaUndo,
} from "react-icons/fa";
import ServiceCard from "./ServiceCard";
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
        <section className="py-16 bg-secondary rounded-2xl my-12">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold mb-3 text-white">Our Services</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
                    We provide complete logistics solutions to ensure smooth, fast, and reliable parcel delivery across Bangladesh.
                </p>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {serviceData.map((service, index) => (
                        <ServiceCard key={index} service={service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;

