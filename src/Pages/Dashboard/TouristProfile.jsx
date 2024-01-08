import UseAuth from '../../Hooks/UseAuth'
const TouristProfile = () => {
    const { user } = UseAuth();
    return (
        <div className=' w-full h-full'>
            <div className=' w-[200px] border-2 p-2 h-[200px] rounded-full'>
                <img className='rounded-full' src={user?.photoURL} alt="" />
                <h1 className=' text-2xl'>{user?.displayName}</h1>
                <p className=' text-xl'>{user?.email}</p>
                <textarea className=' bg-transparent border-2' placeholder=' share your story' name="" id="" cols="30" rows="10"></textarea>
            </div>
        </div>
    );
};

export default TouristProfile;