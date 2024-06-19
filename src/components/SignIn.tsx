import { Box, Grid, Typography, Button, InputLabel, TextField, Divider } from '@mui/material'
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import React, { useState } from 'react';
interface DataType {
    email: string;
    password: string;
}
const SignIn: React.FC = () => {
    const navigate = useNavigate();
    const [data, setData] = useState<DataType>({ email: '', password: '' });
    const [validation, setValidation] = useState<DataType>({ email: '', password: '' });
    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setValidation((prev) => ({ ...prev, [name]: '' }));
        setData((prev) => ({ ...prev, [name]: value }));
    }
    const handleSignIn = () => {
        if (data?.email == '') {
            setValidation((prev) => ({ ...prev, ["email"]: 'Email is required' }));
        }
        if (data?.password == '') {
            setValidation((prev) => ({ ...prev, ["password"]: 'Password is required' }))
        }
        if (data?.email != '' && data?.password != '') {
            navigate('/menus')
        }
    }
    return (
        <Grid container justifyContent={'center'}>
            <Grid item sx={{ display: 'flex', flexDirection: 'column', border: '1px solid #b9e1aa', borderRadius: '10px', p: 2, m: 2, justifyContent: 'center', gap: 2, minWidth: '35%' }}>
                <Grid item xs={12}>
                    <Button variant='contained' onClick={() => navigate('/')} color='success' sx={{ borderRadius: '8px', py: 1.8 }}>
                        <ArrowBackIcon sx={{ fontSize: '1rem' }} />
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <Typography sx={{ fontWeight: 600, fontSize: '40px', fontFamily: 'Poppins', textAlign: 'center' }}>Hello Again!</Typography>
                    <Typography sx={{ color: '#4A4A4A', fontSize: '14px', textAlign: 'center', opacity: '67%' }}>Sign in to your account</Typography>
                </Grid>
                <Grid item xs={12}>
                    <InputLabel sx={{ color: data.email ? '#4DD969' : '' }}>Email address</InputLabel>
                    <TextField name='email' value={data.email} onChange={handleChange} helperText={validation.email} fullWidth required error={validation.email ? true : false} />
                </Grid>
                <Grid item xs={12}>
                    <InputLabel sx={{ color: data.password ? '#4DD969' : '' }}>Password</InputLabel>
                    <TextField name='password' value={data.password} onChange={handleChange} helperText={validation.password} fullWidth required error={validation.password ? true : false} />
                </Grid>
                <Grid item xs={12}>
                    <Typography sx={{ color: '#4DD969', textDecoration: 'underline', cursor: 'pointer' }}>Forgot your password?</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Button variant='contained' fullWidth color='success' sx={{ p: 1.5 }} onClick={handleSignIn}>Sign In</Button>
                </Grid>
                <Grid item xs={12}>
                    <Divider sx={{ color: '#DDDDDD' }}>
                        <Typography sx={{ color: '#818181', fontSize: '12px' }}>
                            Or With
                        </Typography>
                    </Divider>
                </Grid>
                <Grid item xs={12} sx={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #EEEEEE', borderRadius: '10px', p: 2, cursor: 'pointer', transition: 'background-color 0.3s ease',
                    '&:hover': {
                        backgroundColor: '#f2f0ef ',
                    }
                }}>
                    {/* <Button fullWidth variant='outlined'>Sign in with Google</Button> */}
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.1229 7.86249H8.6275V9.79624H13.2387C13.005 12.495 10.7596 13.6496 8.63458 13.6496C5.92166 13.6496 3.54166 11.5104 3.54166 8.49999C3.54166 5.59582 5.80833 3.35041 8.64166 3.35041C10.8304 3.35041 12.1125 4.74582 12.1125 4.74582L13.4583 3.34332C13.4583 3.34332 11.73 1.41666 8.57083 1.41666C4.5475 1.41666 1.43791 4.81666 1.43791 8.49999C1.43791 12.0771 4.36333 15.5833 8.67708 15.5833C12.4667 15.5833 15.2292 12.9837 15.2292 9.14457C15.2292 8.32999 15.1229 7.86249 15.1229 7.86249Z" fill="black" />
                    </svg>&nbsp;
                    <Typography fontSize={'14px'} fontWeight={500}>Sign in with Google</Typography>
                </Grid>
                <Grid item xs={12} sx={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #EEEEEE', borderRadius: '10px', p: 2, cursor: 'pointer', transition: 'background-color 0.3s ease',
                    '&:hover': {
                        backgroundColor: '#f2f0ef ',
                    }
                }}>
                    <svg width="16" height="14" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.8375 1.93125C10.2991 1.93116 9.78227 2.14242 9.3981 2.51957C9.01393 2.89672 8.79318 3.40961 8.78334 3.94787L8.7635 5.0635C8.76234 5.1234 8.74853 5.18238 8.72297 5.23656C8.69742 5.29075 8.66069 5.33892 8.61521 5.37791C8.56973 5.41691 8.51651 5.44585 8.45906 5.46283C8.40161 5.47981 8.34121 5.48446 8.28184 5.47646L7.17613 5.32629C5.72121 5.12796 4.32721 4.45787 2.98988 3.34367C2.5663 5.68825 3.39363 7.31246 5.38617 8.5655L6.62363 9.34325C6.68243 9.3802 6.73127 9.43099 6.76589 9.49119C6.80052 9.55138 6.81987 9.61915 6.82224 9.68855C6.82462 9.75795 6.80995 9.82688 6.77953 9.8893C6.7491 9.95172 6.70384 10.0057 6.64771 10.0466L5.52005 10.8704C6.19084 10.9122 6.82763 10.8825 7.35604 10.7776C10.698 10.1104 12.92 7.59579 12.92 3.44779C12.92 3.10921 12.2032 1.93125 10.8375 1.93125ZM7.36667 3.92167C7.37903 3.23887 7.59255 2.57489 7.98048 2.01286C8.36842 1.45084 8.91353 1.01574 9.54757 0.762051C10.1816 0.50836 10.8764 0.447348 11.5449 0.586654C12.2135 0.72596 12.8261 1.05939 13.306 1.54521C13.8097 1.54167 14.2382 1.66917 15.1966 1.08833C14.9593 2.25 14.8424 2.75433 14.3367 3.44779C14.3367 8.86088 11.0096 11.493 7.63371 12.1667C5.31888 12.6285 1.95288 11.8699 0.988129 10.8626C1.47971 10.8244 3.47721 10.6097 4.6318 9.76471C3.655 9.12083 -0.233038 6.83292 2.32192 0.68175C3.52113 2.08212 4.73734 3.03554 5.96984 3.54129C6.79009 3.87775 6.99125 3.87067 7.36738 3.92237L7.36667 3.92167Z" fill="black" />
                    </svg>&nbsp;
                    <Typography fontSize={'14px'} fontWeight={500}>Sign in with Twitter</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography sx={{ color: '#818181', textAlign: 'center' }} fontSize={'12px'} >Don’t have account? Let’s <Typography component={'span'} sx={{ textDecoration: 'underline', color: '#4DD969', cursor: 'pointer', textAlign: 'center' }} fontSize={'12px'} >Sign Up</Typography></Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default SignIn;