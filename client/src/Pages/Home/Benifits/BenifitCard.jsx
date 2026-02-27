
const BenifitCard = ({ benifit, index }) => {
    const { image, title, description } = benifit;

    return (
        <div
            data-aos={(index + 1) % 2 === 0 ? "zoom-in-left" : "zoom-in-right"}
            data-aos-once="true"
            className='flex bg-white p-4 lg:p-8 rounded-2xl'>
            <div className="flex justify-center">
                <img src={image} className="max-w-20 lg:max-w-40 object-contain aspect-square" alt={title} />
            </div>
            <div className="border-r-2 border-dashed border-secondary mx-6 md:mx-8 lg:mx-10 my-2"></div>
            <div className="flex flex-col justify-center ">
                <h3 className='text-secondary font-bold text-xl lg:text-3xl mt-2'>{title}</h3>
                <p className='text-slate-500 text-xs md:text-sm lg:text-xl w-11/12' >{description}</p>
            </div>
        </div>
    );
};

export default BenifitCard;