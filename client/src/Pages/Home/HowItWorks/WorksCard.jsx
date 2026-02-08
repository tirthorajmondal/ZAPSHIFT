
const WorksCard = ({ work, index }) => {
    const isEvenIndex = index % 2 === 0
    const isMobileDevice = window.innerWidth < 768
    return (
        <div
            data-aos={isMobileDevice ? (isEvenIndex ? 'fade-up-left' : 'fade-up-right') : 'zoom-in'}
            data-aos-duration={isMobileDevice ?  '1200' : '2000'}
            className='p-6 lg:p-8 bg-white rounded-3xl' >
            <work.Icon className="text-6xl mb-6" />
            <h4 className='font-bold text-xl text-secondary mb-4'>{work.title}</h4>
            <p>{work.desc}</p>
        </div >
    );
};

export default WorksCard;