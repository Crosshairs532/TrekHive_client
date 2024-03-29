/* eslint-disable no-unused-vars */
import { useQuery } from '@tanstack/react-query';
import AxiosSecure from '../../../Axios/AxiosSecure';
import Loaading from '../../../Loading/Loaading';
import { useState } from 'react';
import toast from 'react-hot-toast';
import UseAuth from '../../../Hooks/UseAuth';


const ManageUsers = () => {
    const axiosSecure = AxiosSecure();
    const [disable, setDisable] = useState(false);
    const { user } = UseAuth();
    const { data: allUsers = [], isFetched, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/admin/users?email=${user?.email}`);
            return res.data;
        }
    })
    if (!isFetched) {
        return <Loaading></Loaading>
    }

    const handleRoleChange = async (role, id, name, image, email) => {
        if (role == 'admin') {
            const res = await axiosSecure.patch(`/admin/users?id=${id}&&role=${role}`);
            if (res.data.modifiedCount > 0) {
                toast.success(`${name} has been Updated to ${role}`)
                refetch()
                setDisable(true)
                return
            }
        }
        if (role == 'guide') {
            const res = await axiosSecure.patch(`/admin/users?id=${id}&&role=${role}`);
            if (res.data.modifiedCount > 0) {
                toast.success(`${name} has been Updated to ${role}`)
                refetch()
                setDisable(true)
                const guide = { name: name, image: image, contactDetails: { email: email } }
                const res = await axiosSecure.post('/admin/guides', guide);
                return
            }
        }

    }
    return (
        <div>
            <div className=" overflow-x-auto mt-[100px]">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            allUsers.length > 0 ? allUsers.map((user, idx) => (
                                <tr key={idx}>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={user.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{user.name}</div>

                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {
                                            user.email}
                                    </td>
                                    <td>{user.role}</td>
                                    <th>
                                        <button onClick={() => handleRoleChange('guide', user._id, user.name, user.image, user.email)} disabled={user?.role == 'admin' || user?.role == 'guide'} className="btn btn-ghost btn-xs">Make Guide</button>

                                    </th>
                                    <th>
                                        <button disabled={user?.role == 'guide' || user?.role == 'admin'} onClick={() => handleRoleChange('admin', user._id, user.name)} className="btn btn-ghost btn-xs">Make admin</button>
                                    </th>
                                </tr>

                            )) : <tr>
                                <td>
                                    No users found!
                                </td>

                            </tr>
                        }

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default ManageUsers;