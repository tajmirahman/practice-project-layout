import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from './NewsCard';

const CategoryNews = () => {
    const data= useLoaderData();
    const {id}= useParams();
    // console.log(data,id)
    const [categoryNews,setCategoryNews]=useState([]);

    useEffect(()=>{

        const newsFilter= data.filter(singleNews=> singleNews.category_id == id);
        setCategoryNews(newsFilter);

        
    },[data, id])


 


    return (
        <div>
            
            {
                categoryNews.map(news=> <NewsCard news={news}></NewsCard>)
            }
        </div>
    );
};

export default CategoryNews;