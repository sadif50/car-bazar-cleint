import { useQuery } from '@tanstack/react-query';
import { FaCheckCircle } from 'react-icons/fa';
import { toast } from 'react-toastify';
import Loader from '../../Shared/Loader/Loader';

const AllSellers = () => {
    
    const { data: sellers = [], isLoading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users?role=seller');
            const data = await res.json();
            return data;
        }
    });

    const handleVerify = id => {
        const verifyData = {
            verified: true
        }
        fetch(`http://localhost:5000/verifySeller/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(verifyData)
        })
        .then(res=>res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                toast.success('Seller Verified SuccessFully.');
                refetch();
            }
        })
    }

    const deleteUser = id => {
        const agree = window.confirm('Are you sure to delete this seller?');
        if(agree){
            fetch(`http://localhost:5000/user/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('Seller Delete Successful.');
                    refetch();
                }
            })
            .catch(err => console.log(err));
        }
    }
    
    if(isLoading){
        return <Loader></Loader>
    }
    return (
        <div className='border rounded shadow-lg'>
            <div className='p-4 text-xl bg-slate-200'>
                All Sellers
            </div>
            <div className='p-4 overflow-x-auto'>
                <table className='table w-full'>
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Verify</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sellers.map((seller, i) => <tr key={seller?._id}>
                                <td>{i + 1}</td>
                                <td>{seller?.name}</td>
                                <td>{seller?.email}</td>
                                <td>
                                    {
                                        seller?.verified ? 'Verified' : 'Not Verified'
                                    }
                                </td>
                                <td>
                                    {
                                        seller?.verified ? <button className='flex items-center btn-sm btn-success rounded' disabled><FaCheckCircle/>&nbsp;Verified</button> 
                                        :
                                        <button onClick={()=>handleVerify(seller._id)} className='btn-sm btn-info rounded'>Verify</button>
                                    }
                                </td>
                                <td>
                                    <button onClick={()=>deleteUser(seller._id)} className='btn-sm btn-error rounded'>Delete</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;