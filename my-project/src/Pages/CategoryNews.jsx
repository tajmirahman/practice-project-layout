import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from './NewsCard';

const CategoryNews = () => {
    const data = useLoaderData();
    const { id } = useParams();
    console.log(data, id)
    const [categoryNews, setCategoryNews] = useState([]);

    useEffect(() => {

        if (id == '0') {
            setCategoryNews(data);
            return;
        } else if (id == '1') {
            const findNews = data.filter(news => news.others.is_today_pick == true);
            setCategoryNews(findNews);
        } else {
            const newsFilter = data.filter(singleNews => singleNews.category_id == id);
            setCategoryNews(newsFilter);
        }




    }, [data, id])





    return (
        <div>

            {
                categoryNews.map(news => <NewsCard news={news}></NewsCard>)
            }
        </div>
    );
};

export default CategoryNews;