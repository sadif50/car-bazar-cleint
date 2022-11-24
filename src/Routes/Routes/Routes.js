import { createBrowserRouter } from "react-router-dom";
import DashBoardLayout from "../../Layout/DashBoardLayout";
import Main from "../../Layout/Main";
import AllBuyers from "../../Pages/Dashboard/Admin/AllBuyers";
import AllSellers from "../../Pages/Dashboard/Admin/AllSellers";
import Myorder from "../../Pages/Dashboard/Buyer/Myorder";
import Addproduct from "../../Pages/Dashboard/Seller/Addproduct";
import MyBuyers from "../../Pages/Dashboard/Seller/MyBuyers";
import MyProducts from "../../Pages/Dashboard/Seller/MyProducts";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/User/Login/Login";
import Signup from "../../Pages/User/Signup/Signup";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashBoardLayout></DashBoardLayout>,
        children: [
            {
                path: '/dashboard/myorders',
                element: <Myorder></Myorder>
            },
            {
                path: '/dashboard/addProduct',
                element: <Addproduct></Addproduct>
            },
            {
                path: '/dashboard/myProducts',
                element: <MyProducts></MyProducts>
            },
            {
                path: '/dashboard/myBuyers',
                element: <MyBuyers></MyBuyers>
            },
            {
                path: '/dashboard/allSellers',
                element: <AllSellers></AllSellers>
            },
            {
                path: '/dashboard/allBuyers',
                element: <AllBuyers></AllBuyers>
            }
        ]
    }
]);

export default router;