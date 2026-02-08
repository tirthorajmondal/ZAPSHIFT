
const ServiceCard = ({ service, count }) => {
    const { icon: Icon, title, description } = service;
    const isEvenIndex = count % 2 === 0
    const isMobileDevice = window.innerWidth < 768

    return (
        <div
            data-aos={isMobileDevice ? (isEvenIndex ? 'zoom-in-right' : 'zoom-in-right') : 'zoom-in-up'}
            className="bg-white shadow-md hover:shadow-lg hover:bg-primary rounded-2xl p-6 text-center transition-all ease-in-out duration-1000">
            <div className="text-4xl text-blue-500 mb-4 flex justify-center">
                <Icon />
            </div>
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 text-sm">{description}</p>
        </div>
    );
};

export default ServiceCard;
