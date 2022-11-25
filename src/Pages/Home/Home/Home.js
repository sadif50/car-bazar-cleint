import React from 'react';
import AdvertizeItems from '../AdvertizeItem/AdvertizeItems';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import EmailSubscribe from '../EmailSubscribe/EmailSubscribe';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <AdvertizeItems></AdvertizeItems>
            <EmailSubscribe></EmailSubscribe>
        </div>
    );
};

export default Home;