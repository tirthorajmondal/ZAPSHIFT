
const WorksCard = ({ work, index }) => {
    const isEvenIndex = index % 2 === 0
    // console.log(index, isEvenIndex);

    return (
        <div
            data-aos={isEvenIndex ? 'fade-up' : 'fade-up'}
            className='p-6 lg:p-8 bg-white rounded-3xl' >
            <work.Icon className="text-6xl mb-6" />
            <h4 className='font-bold text-xl text-secondary mb-4'>{work.title}</h4>
            <p>{work.desc}</p>
        </div >
    );
};

export default WorksCard;