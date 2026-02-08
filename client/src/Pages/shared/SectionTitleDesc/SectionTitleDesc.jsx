import React from 'react';

const SectionTitleDesc = ({ title, desc, titleStyle, descStyle }) => {
    return (
        <div className='text-center'>
            <h2 className={`text-3xl font-bold mb-3 ${titleStyle}`}>{title}</h2>
            <p className={`text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto ${descStyle}`}>
                {desc}
            </p>
        </div>
    );
};

export default SectionTitleDesc;