import React from 'react';

const NewsDetailsCard = ({newsDetails}) => {
    return (
        <div>
            <img src={newsDetails.image_url} alt="" />
            <h1>{newsDetails.title}</h1>
            <p>{newsDetails.details}</p>
        </div>
    );
};

export default NewsDetailsCard;