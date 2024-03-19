import { useQuery } from '@tanstack/react-query';
import UseAdmin from '../../Hooks/UseAdmin';
import UseAuth from '../../Hooks/UseAuth'
import UseGuide from '../../Hooks/UseGuide';
import AxiosPublic from '../../Axios/AxiosPublic';
import Loaading from '../../Loading/Loaading';
import Textarea from '../../Utils/Textarea';
const Profile = () => {
    const { user } = UseAuth();
    const isAdmin = UseAdmin();
    const isGuide = UseGuide();
    const axiosPublic = AxiosPublic();
    // const isGuide = true
    const { data, isLoading } = useQuery({
        queryKey: ["findUser"],
        queryFn: async () => {
            const res = await axiosPublic(`/userProfile?email=${user?.email}`)
            console.log(res?.data);
            return res?.data
        }
    })
    if (isLoading) {
        return <Loaading></Loaading>

    }

    return (
        <div className=' w-full h-full pt-[100px]'>
            <div className=" flex items-center justify-evenly gap-x-[100px]">
                <div className=' w-[200px]  border-2 p-2 h-[200px] rounded-full'>
                    <img className='rounded-full' src={user?.photoURL} alt="" />

                </div>
                <div className=' flex flex-col gap-y-5'>
                    <h1 className=' text-4xl font-syne'>{user?.displayName}</h1>
                    <hr />
                    <p className=' text-lg font-syne'> {user?.email}</p>
                    <hr />
                    <p>Role:{isAdmin ? "admin" : (isGuide ? 'guide' : `${data}`)}

                    </p>
                    <hr />

                </div>
            </div>

            <div>
                <h1 className=' text-4xl font-extrabold'>Share Your Experience: </h1>
                {
                    !isAdmin ? <Textarea></Textarea> : ""
                }
            </div>
        </div >
    );
};

export default Profile;