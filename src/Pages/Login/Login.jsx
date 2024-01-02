/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import axios from 'axios';

// import useAxiosPublic from '../Axios/useaxiosPublic';
import { FcGoogle } from "react-icons/fc";
import UseAuth from '../../Hooks/UseAuth';

function Copyright(props) {
    return (
        <Typography variant="body2" className=' text-blue-gray-100' align="center" {...props}>
            {'Copyright © '}
            <Link to='/'> TrekHive</Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
const defaultTheme = createTheme();
const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { SignIn, GoogleSignIn } = UseAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const goTo = useNavigate();

    const onSubmit = async (data) => {
        const userInfo = { email: data?.email }
        console.log(userInfo);
        SignIn(data?.email, data?.password)
        try {
            Swal.fire({
                title: 'Logging in...',
                allowOutsideClick: false,
                showConfirmButton: false,
                willOpen: () => {
                    Swal.showLoading();
                },
            });
            const res = await SignIn(data?.email, data?.password);
            Swal.close();
            Swal.fire({
                icon: 'success',
                title: 'Login successful',
                text: `${res?.user?.displayName}`,
            });
            // navigate(location.state ? location.state : '/')
        } catch (error) {
            Swal.close();
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Login failed. Please check your credentials.',
            });
        }
    };
    const handleGoogleSignIn = () => {
        GoogleSignIn()
            .then(res => {
                console.log(res);
                // const userInfo = {
                //     email: res.user?.email, name: res.user?.displayName, image: res.user?.photoURL, role: 'user', badge: 'bronze',
                //     all_badge: ['bronze']
                // }
                // axios.post('/user', userInfo)
                //     .then(res => {
                //         console.log(res.data);
                //         Swal.fire({
                //             icon: 'success',
                //             title: 'Login successful',

                //         });
                //         navigate('/')

                //     })
            })
    }
    return (

        <div className=' max-w-full min-h-screen lg:flex md:flex items-center  '>
            <div className=' lg:w-[50%] h-[100vh] text-blue-gray-100 flex items-center justify-center bg-[#002539]'>
                <Container maxWidth="sm" >
                    <Box sx={{ fontFamily: 'Syne', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                        <div className=' relative'>
                            <h1 className=' signTrek font-syne text-6xl text-blue-gray-100 font-bold'>TrekHive</h1>
                        </div>
                        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>
                            <TextField
                                {...register('email', { required: true })}
                                margin="normal"
                                fullWidth
                                name="email"
                                label="Email"
                                type="email"
                                id="email"
                                InputProps={{ style: { borderBottom: '1px solid', color: ' white' } }}
                                InputLabelProps={{ style: { color: 'white' } }}
                                autoComplete="current-email"
                                variant='standard'
                                placeholder="Your Email.." />
                            {/* {errors.email && <span className="text-red-600">Email is required</span>} */}
                            {errors.email && <span style={{ color: ' red' }}>Name is required</span>}
                            <TextField
                                {...register('password', { required: true })}
                                margin="normal"
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                InputLabelProps={{ style: { color: 'white' } }}
                                id="password"
                                variant='standard'
                                InputProps={{ style: { borderBottom: '1px solid', color: ' white' } }}
                                autoComplete="current-password"
                            />
                            {errors.password && <span style={{ color: ' red' }} > password is required</span>}

                            <div>
                                <button onClick={handleGoogleSignIn} className=' btn bg-white shadow-xl'>
                                    <FcGoogle size={40} />
                                </button>
                            </div>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 1 }}
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item>
                                    <h1>Don't Have an Account ?  <Link to='/signIn' className=' Syne font-bold'>Sign Up</Link></h1>
                                </Grid>
                            </Grid>
                        </Box>
                        <Copyright sx={{ mt: 8, mb: 4 }} />
                    </Box>
                </Container>
            </div>
            <div className=' hidden w-full loginpic md:flex lg:flex justify-center items-center h-[100vh] '>
                <div className=' text w-[80%] bg-gradient-to-tr from-blue-gray-600 to-blue-gray-200  '>
                    <h5 className=' text-3xl font-syne font-extrabold text-center '>
                        Travel is the Only thing that makes you richer
                    </h5>
                </div>
            </div>

        </div>

    );
};
export default Login;