
const ServiceCard = ({ service }) => {
    const { icon: Icon, title, description } = service;
    return (
        <div className="bg-white shadow-md hover:shadow-lg hover:bg-primary rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-2">
            <div className="text-4xl text-blue-500 mb-4 flex justify-center">
                <Icon />
            </div>
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 text-sm">{description}</p>
        </div>
    );
};

export default ServiceCard;
