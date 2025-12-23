import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from './NewsCard';

const CategoryNews = () => {
    const data= useLoaderData();
    const {id}= useParams();
    console.log(data,id)


    return (
        <div>
            {
                data.map(news=> <NewsCard news={news}></NewsCard>)
            }
        </div>
    );
};

export default CategoryNews;