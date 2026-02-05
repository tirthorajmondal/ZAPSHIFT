import React from 'react';

const WorksCard = ({ work }) => {
    return (
        <div className='p-6 lg:p-8 bg-white rounded-3xl'>
            <work.Icon className="text-6xl mb-6"/>
            <h4 className='font-bold text-xl text-secondary mb-4'>{work.title}</h4>
            <p>{work.desc}</p>
        </div>
    );
};

export default WorksCard;