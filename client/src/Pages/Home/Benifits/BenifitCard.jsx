
const BenifitCard = ({ benifit }) => {
    const { image, title, description } = benifit;
    console.log(benifit);
    return (
        <div className='flex items-center bg-white p-4 lg:p-8 rounded-2xl'>
            <div className="border-r-[3px] pr-10 mr-10 border-secondary border-dashed">
                <img src={image} className="w-60 h-60" alt={title} />
            </div>
            {/* <div className=" mx-6 my-6"></div> */}
            <div className="flex flex-col justify-center">
                <h3 className='text-secondary font-bold text-xl lg:text-3xl'>{title}</h3>
                <p className='text-slate-500 text-sm lg:text-xl'>{description}</p>
            </div>
        </div>
    );
};

export default BenifitCard;