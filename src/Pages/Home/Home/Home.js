import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import AdvertizeItems from '../AdvertizeItem/AdvertizeItems';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import EmailSubscribe from '../EmailSubscribe/EmailSubscribe';

const Home = () => {
    const {user} = useContext(AuthContext);
    console.log(user)
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