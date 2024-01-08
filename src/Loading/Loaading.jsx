import { ThreeDots } from "react-loader-spinner";
const Loaading = () => {
    return (
        <div className=' min-h-screen flex justify-center items-center'>
            <ThreeDots
                visible={true}
                height="80"
                width="80"
                color="#4fa94d"
                radius="9"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    );
};

export default Loaading;