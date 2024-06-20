import { Box, Grid, Avatar, Typography, Divider, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useSelector, useDispatch } from "react-redux";
import { setFollowersData } from "../redux/slices/dataSlice";
import { followersType } from "../utils/types/FollowersType";
const Followers: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const reduxData = useSelector((state: any) => state.data);
    const { followersData } = reduxData;
    const handleFollowing = (index: number) => {
        let temp = JSON.parse(JSON.stringify(followersData));
        temp[index]['follow'] = !temp[index]['follow']
        dispatch(setFollowersData(temp))
    }
    const viewProfile = (id: string) => {
        navigate(`/profile?id=${id}`)
    }
    return (
        <Grid container justifyContent={"center"} spacing={2}>
            <Grid
                item
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    border: "1px solid #b9e1aa",
                    borderRadius: "10px",
                    p: 2,
                    m: 2,
                    justifyContent: "center",
                    gap: 2,
                    minWidth: "35%",
                }}
            >
                <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box sx={{ width: 'fix-content' }}>
                        <Button variant='contained' onClick={() => navigate('/menus')} color='success' sx={{ borderRadius: '8px', py: 1.8 }}>
                            <ArrowBackIcon sx={{ fontSize: '1rem' }} />
                        </Button>
                    </Box>
                    <Grid item xs={12}>
                        <Typography fontSize='18px' fontWeight={600} sx={{ textAlign: 'center' }}>Followers (4K)</Typography>
                    </Grid>

                </Grid>
                <Grid item xs={12}>
                    <Divider />
                </Grid>
                <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column', gap: 2, cursor: 'pointer' }}>
                    {
                        followersData.map((elem: followersType, index: number) => {
                            return (
                                <>

                                    <Grid item xs={12} key={index} sx={{ display: 'flex', gap: 2, justifyContent: 'space-between' }}>
                                        <Grid item sx={{ display: 'flex', gap: 2 }} onClick={() => viewProfile(elem.id)}>
                                            <Avatar alt={elem.name} src={elem.pic} />
                                            <Grid item>
                                                <Typography fontWeight={600} fontSize={'14px'}>{elem.name}</Typography>
                                                <Typography fontWeight={400} fontSize={'12px'} sx={{ color: '#919191' }}>{elem.title}</Typography>
                                            </Grid>
                                        </Grid>
                                        <Grid item sx={{ display: 'flex' }}>
                                            <Button variant='contained' sx={{
                                                borderRadius: '20px', minWidth: '86px', maxHeight: '34px', fontSize: '12px', backgroundColor: elem.follow ? '#EEEEEE' : '#52c41a', color: elem.follow ? 'black' : 'white', '&:hover': {
                                                    backgroundColor: elem.follow ? '#C8C6C6' : '#4dae1d',
                                                    color: elem.follow ? 'black' : 'white',
                                                }
                                            }} onClick={() => handleFollowing(index)}>{elem?.follow ? 'Following' : 'Follow'}</Button>
                                        </Grid>

                                    </Grid >
                                    {
                                        index !== followersData?.length - 1 && (
                                            <Grid item xs={12}>
                                                <Divider />
                                            </Grid>
                                        )
                                    }</>
                            )
                        })
                    }
                </Grid>
            </Grid>
        </Grid >
    );
};

export default Followers;
