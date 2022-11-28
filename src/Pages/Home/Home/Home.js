import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import Loader from '../../Shared/Loader/Loader';
import AdvertizeItems from '../AdvertizeItem/AdvertizeItems';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import EmailSubscribe from '../EmailSubscribe/EmailSubscribe';

const Home = () => {
    const {loading} = useContext(AuthContext);
    if(loading){
        return <Loader></Loader>
    }
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