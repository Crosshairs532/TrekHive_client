import { useContext } from "react";
import { authContext } from "../Authprovider/Authprovider";


const UseAuth = () => {
    const Auth = useContext(authContext)
    console.log(Auth);
    return Auth
};

export default UseAuth;