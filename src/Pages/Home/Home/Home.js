import React from 'react';
import AdvertizeItem from '../AdvertizeItem/AdvertizeItem';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import EmailSubscribe from '../EmailSubscribe/EmailSubscribe';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <AdvertizeItem></AdvertizeItem>
            <EmailSubscribe></EmailSubscribe>
        </div>
    );
};

export default Home;