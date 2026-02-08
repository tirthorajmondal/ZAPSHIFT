import React from 'react';
import image from '../../../assets/location-merchant.png';

const BecomeMarchant = () => {
    return (
        <section className='bg-secondary flex gap-3 my-12 md:my-24 rounded-3xl p-10 md:p-20'>
            <div className="flex flex-col justify-center">
                <h3 className='text-2xl md:text-5xl font-bold text-white '>Merchant and Customer Satisfaction is Our First Priority</h3>
                <p className='text-slate-400 text-sm md:text-base my-3 md:my-6'>We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.</p>
                <div className="flex flex-col md:flex-row gap-4">
                    <button className="btn text-secondary border-primary font-bold bg-primary rounded-full shadow-none">
                        Become a Merchant
                    </button>
                    <button className="btn btn-outline text-primary font-bold border-primary bg-transparent rounded-full shadow-none">
                        Become a Merchant
                    </button>
                </div>
            </div>
            <img src={image} className='-mr-6 hidden md:block max-w-full md:max-w-9/12 overflow -hidden' alt="" />
        </section>
    );
};

export default BecomeMarchant;