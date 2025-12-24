
import { useLoaderData, useParams } from 'react-router-dom';
import Header from '../Components/Header';
import { useEffect, useState } from 'react';
import NewsDetailsCard from './NewsDetailsCard';

const NewsDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();

    const [newsDetails, setNewsDetails] = useState([]);

    // console.log(data, id);

    useEffect(() => {
        const newsFind = data.find(news => news.id == id);
        setNewsDetails(newsFind);

    }, [data, id])


    // console.log(newsDetails)





    return (
        <div className='w-11/12 mx-auto '>
            <Header></Header>
            <div className='grid md:grid-cols-12 gap-3'>
                <div className='col-span-9'>
                    <NewsDetailsCard
                        newsDetails={newsDetails}>
                    </NewsDetailsCard>
                </div>
                <div className='col-span-3'>
                right side
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;