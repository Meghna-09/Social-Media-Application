import { Box, Grid, Typography, Button, Divider, IconButton, Avatar, TextField } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import React, { useEffect, useState } from 'react';
import CircleIcon from '@mui/icons-material/Circle';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { followersType } from '../utils/types/FollowersType';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import { ChatType } from '../utils/types/Chat';
import { setChatData } from '../redux/slices/dataSlice';

const Chat: React.FC = () => {
    const navigate = useNavigate();
    const [params, setParams] = useSearchParams();
    const reduxData = useSelector((state: any) => state.data);
    const [profileData, setProfileData] = useState<followersType | null>(null);
    const { followersData, chatData } = reduxData;
    const dispatch = useDispatch();
    const getProfileData = () => {
        let id = params.get('id');
        if (id) {
            let filteredData: followersType | null = followersData.find((elem: followersType) => elem.id === id);
            setProfileData(filteredData);
        }
    };
    const [message, setMessage] = useState<string>('');
    const handleSendMessage = () => {
        dispatch(setChatData({
            sender: true, message: message
        }));
        setMessage('');
    };
    useEffect(() => {
        getProfileData();
    }, [followersData]);
    return (
        <Grid container justifyContent={'center'}>
            <Grid item sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                border: '1px solid #b9e1aa', 
                borderRadius: '10px', 
                p: 2, 
                m: 2, 
                justifyContent: 'center', 
                gap: 1, 
                width: { xs: '100%', sm: '70%', md: '50%', lg: '35%' }, 
                height: '80vh' 
            }}>
                {/* chat header */}
                <Grid item xs={12} sx={{ 
                    display: 'flex', 
                    gap: 2, 
                    position: 'sticky', 
                    top: 0,  
                    zIndex: 1, 
                    alignItems:'start' 
                }}>
                    <Box sx={{ width: 'fix-content' }}>
                        <Button variant='contained' color='success' sx={{ 
                            borderRadius: '8px', 
                            py: 1.8, 
                        }} onClick={() => navigate(`/profile?id=${params.get('id')}`)}>
                            <ArrowBackIcon sx={{ fontSize: '1rem' }} />
                        </Button>
                    </Box>
                    <Grid item xs={12} sx={{ display: "flex", alignItems: 'center', justifyContent: 'space-between' }}>
                        <Grid item xs={12}>
                            <Grid item sx={{ display: "flex", gap: 0.7, alignItems: 'center' }}>
                                <CircleIcon
                                    sx={{
                                        color: '#0F9804',
                                        fontSize: '0.6rem',
                                    }}
                                />
                                <Typography fontSize='14px' fontWeight={600} >{profileData?.title}</Typography>
                            </Grid>
                            <Typography fontSize='12px' sx={{ color: "#919191" }}>Last active, 10 sec ago</Typography>
                        </Grid>
                        <Box sx={{ width: 'fix-content', display: 'flex' }}>
                            <IconButton sx={{
                                borderRadius: '50%', backgroundColor: '#E8FDED'
                            }}>
                                <CallOutlinedIcon sx={{ color: '#4DD969' }} />
                            </IconButton>
                        </Box>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Divider />
                </Grid>
                <Grid item xs={12} sx={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    gap: 2, 
                    overflowY: 'auto', 
                    flexGrow: 1, 
                    minHeight: '60vh' 
                }}>
                    {
                        chatData.map((elem: ChatType, index: number) => {
                            return (
                                <Grid key={index} item xs={12} sx={{
                                    display: 'flex',
                                    justifyContent: elem.sender ? 'flex-end' : 'flex-start',
                                    gap: 0.7,
                                    alignItems: 'center',
                                }}>
                                    <Grid item>
                                        {!elem.sender && (index === 0 || chatData[index - 1].sender) ? (
                                            <Avatar
                                                alt={profileData?.name}
                                                src={profileData?.pic}
                                            />
                                        ) : (
                                            // Placeholder for empty space if avatar is not shown
                                            <div style={{ width: 40, height: 40 }} />
                                        )}
                                    </Grid>
                                    <Grid item sx={{
                                        maxWidth: '70%',
                                        borderRadius: '15px',
                                        backgroundColor: elem.sender ? '#28CD56' : '#EEEEEE',
                                        color: elem.sender ? 'white' : '',
                                        padding: '10px',
                                        textAlign: 'left',
                                    }}>
                                        <Typography>{elem.message}</Typography>
                                    </Grid>
                                    <Grid item>
                                        {elem.sender && (index === 0 || !chatData[index - 1].sender) ? (
                                            <Avatar
                                                alt={"Morsalin Nur"}
                                                src={"https://s3-alpha-sig.figma.com/img/9ffb/c5ae/c9c30c0248c3731569b1f7170833a931?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H-zlSFib2fopXav-Bsg3t8wY2NXGRhItME349UbJQcZrm7o~jAYz6gXE1iRXHqinfZar3JA4bhKT0LRSsI7u9bAr~yxT6KEsIJBjJQQ5aKidmItfBi7T21VmMgo3m4AfF44K4HzJgRKx8HmN7qDOc6W3MqlOO-pVppq-HcufgeXlj6vKaY0ujQkbCe2VUwF0xUjXxRd3V3Km2wSvVYiWknjCE3zO7tPRhPZp17WNqZfztPFVZ3dXyK0o7JSJL-fdDU1GVoWNoNYmdtp95qnr2zBh2yH8qiM~j5Ye9xSI5Y4ZvglsvRHoFs8b4yBeSauH-aQla8ClZc86xdH1i9edhg__"} />
                                        ) : (
                                            // Placeholder for empty space if avatar is not shown
                                            <div style={{ width: 40, height: 40 }} />
                                        )}
                                    </Grid>
                                </Grid>
                            );
                        })
                    }
                </Grid>

                {/* chat footer  */}
                <Grid item xs={12} sx={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    gap: 1, 
                    position: 'sticky', 
                    bottom: 0, 
                    zIndex: 1, 
                    paddingBottom: 2, 
                    alignItems:'end' 
                }}>
                    <TextField fullWidth value={message} placeholder={'say something'} sx={{ 
                        borderRadius: '20px' 
                    }} onChange={(e) => setMessage(e.target.value)} />
                    <IconButton onClick={handleSendMessage} sx={{
                        borderRadius: '50%', 
                        backgroundColor: '#4DD969', 
                        width: 'fix-content', 
                        '&:hover': {
                            backgroundColor: '#52c41a'
                        }
                    }}>
                        <SendOutlinedIcon sx={{ color: 'white' }} />
                    </IconButton>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Chat;
