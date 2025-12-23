import React from 'react';
import { useLoaderData } from 'react-router-dom';

const HomeLayout = () => {
    const news=useLoaderData();
    console.log(news)
    return (
        <div>
            THis is hohme page
        </div>
    );
};

export default HomeLayout;