import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import Footer from '../Pages/Shared/Footer/Footer';
import Loader from '../Pages/Shared/Loader/Loader';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const Main = () => {
    const { loading } = useContext(AuthContext);
    if(loading){
        return <Loader></Loader>
    }
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;