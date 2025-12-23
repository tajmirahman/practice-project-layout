import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from './NewsCard';

const CategoryNews = () => {
    const data= useLoaderData();
    console.log(data)


    return (
        <div>
            {
                data.map(news=> <NewsCard news={news}></NewsCard>)
            }
        </div>
    );
};

export default CategoryNews;