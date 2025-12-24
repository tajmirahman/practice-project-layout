import React from 'react';

const NewsDetailsCard = ({newsDetails}) => {
    return (
        <div>
            <img src={newsDetails.image_url} className='w-full h-full object-cover' alt="" />
            <h1 className='text-2xl font-bold'>{newsDetails.title}</h1>
            <p className=' text-justify'>{newsDetails.details}</p>
        </div>
    );
};

export default NewsDetailsCard;