import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthProvider';
import useAdmin from '../../Hooks/useAdmin';
import Loader from '../../Pages/Shared/Loader/Loader';

const AdminRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <Loader></Loader>
    }

    if (user && isAdmin) {
        return children;
    }
    toast.info("Please Login as ADMIN to go to the page!");
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;