import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthProvider';
import useSeller from '../../Hooks/useSeller';
import Loader from '../../Pages/Shared/Loader/Loader';

const SellerRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const [isSeller, isSellerLoading] = useSeller(user?.email);
    const location = useLocation();

    if (loading || isSellerLoading) {
        return <Loader></Loader>
    }

    if (user && isSeller) {
        return children;
    }
    toast.info("Please Login as Seller to go to the page!");
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default SellerRoute;