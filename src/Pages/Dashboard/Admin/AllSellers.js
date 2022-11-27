import { useQuery } from '@tanstack/react-query';
import Loader from '../../Shared/Loader/Loader';

const AllSellers = () => {
    
    const { data: sellers = [], isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users?role=seller');
            const data = await res.json();
            return data;
        }
    });
    
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
                                <td><button className='btn-sm btn-secondary rounded'>Verify</button></td>
                                <td>
                                    <button className='btn-sm btn-error rounded'>Delete</button>
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