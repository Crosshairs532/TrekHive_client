
/* eslint-disable no-unused-vars */
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';
import axios from 'axios';
import { FcGoogle } from "react-icons/fc";
import UseAuth from '../../Hooks/UseAuth';
import toast from 'react-hot-toast';
import AxiosPublic from '../../Axios/AxiosPublic';
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link to='/'>TrekHive</Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
const defaultTheme = createTheme();
const Registration = () => {
    const navigate = useNavigate();
    const axiosPublic = AxiosPublic();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { GoogleSignIn, SignUp, logOut, updateUserProfile } = UseAuth();
    const goTo = useNavigate();
    const onSubmit = async (data) => {
        const toastId = toast.loading('Loading...');
        const imageFile = { image: data.image[0] }
        console.log(imageFile);
        const res = await axios.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        console.log(res.data.data, "hi");
        const photo = res.data?.data?.display_url;
        if (res.data?.data?.display_url) {
            const userInfo = { name: data?.name, email: data?.email, image: res.data?.data?.display_url, role: 'tourist' }
            console.log(userInfo);
            SignUp(data?.email, data?.password)
                .then(res => {
                    console.log(res.user);
                    updateUserProfile(data?.name, photo)
                        .then(async () => {
                            const res = await axiosPublic.post('http://localhost:4000/users', userInfo)
                            if (res.data.insertedId) {
                                toast.success('successful', {
                                    id: toastId,
                                });
                                logOut()
                                    .then(res => {
                                        goTo('/login')
                                    })
                            }
                        })
                })
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
                //             text: `kkk`,
                //         });
                //         navigate('/')
                //     })
            })
    }
    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        fontFamily: 'Syne',
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" style={{ fontFamily: 'Syne', fontWeight: 'semi-bold' }} variant="h2">
                        Register Now
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ mt: 1 }}>
                        <TextField
                            {...register('name', { required: true })}
                            margin="normal"
                            type='text'
                            fullWidth
                            id="name"
                            label=" You Name"
                            name="name"
                            required
                            autoComplete="name"
                            autoFocus
                        />
                        {errors.name && <span style={{ color: ' red' }}>Name is required</span>}
                        <TextField
                            {...register('email', { required: true })}
                            margin="normal"
                            fullWidth
                            name="email"
                            label="email"
                            type="email"
                            id="email"
                            autoComplete="current-email"
                            placeholder="Your Email.." />
                        {/* {errors.email && <span className="text-red-600">Email is required</span>} */}
                        {errors.email && <span style={{ color: 'red' }}>Email is required</span>}
                        <TextField
                            {...register('password', { required: true })}
                            margin="normal"
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        {errors.password && <span style={{ color: ' red' }} > password is required</span>}
                        <div className="form-control w-full my-6">
                            <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                            {errors.image && <span style={{ color: ' red' }} >You have to enter Photo</span>}
                        </div>
                        <div>
                            <button onClick={handleGoogleSignIn} className=' btn bg-white shadow-xl'>
                                <FcGoogle size={40} />
                            </button>
                        </div>

                        <Grid container>
                            <Grid item>
                                <h1>Already Have an Account ?  <Link to='/login' className=' font-play-serif font-bold'>Sign IN</Link></h1>
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 1 }}
                        >
                            Sign Up
                        </Button>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider >
    );
};
export default Registration;