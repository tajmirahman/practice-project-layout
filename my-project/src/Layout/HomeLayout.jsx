import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryNews from '../Pages/CategoryNews';

const HomeLayout = () => {
    const data=useLoaderData();
    console.log(data)
    return (
        <div>
            {
                data.map(news=> <CategoryNews key={news.id} news={news}></CategoryNews>)
            }
        </div>
    );
};

export default HomeLayout;