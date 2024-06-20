import { Box, Grid, Avatar, Typography, Divider, Button, IconButton } from "@mui/material";
import React, { useState, useEffect } from "react";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useDispatch, useSelector } from "react-redux";
import { NotificationType } from "../utils/types/NotificaitonType";
import DoneIcon from '@mui/icons-material/Done';
import { setNotificationData } from "../redux/slices/dataSlice";
import { useNavigate } from "react-router-dom";
const Notifications: React.FC = () => {
    const navigate = useNavigate()
    const reduxData = useSelector((state: any) => state.data);
    const { notificationData } = reduxData;
    const dispatch = useDispatch();
    const [data, setData] = useState<NotificationType[]>([])
    const [show, setShow] = useState<boolean>(false);
    const showMoreOrLess = () => {
        setData([])
        if (show) {
            for (let i = 0; i < 3; i++) {
                setData((prev: NotificationType[]) => [...prev, notificationData[i]])
            }
        }
        else {
            setData(notificationData);
        }
        setShow(!show)
    }
    const markAllRead = () => {
        setData([])
        let temp = JSON.parse(JSON.stringify(notificationData))
        for (let elem of temp) {
            elem.read = true
        }
        dispatch(setNotificationData(temp));

    }
    const handleData = () => {
        setData([])
        if (!show) {
            for (let i = 0; i < 3; i++) {
                setData((prev: NotificationType[]) => [...prev, notificationData[i]])
            }
        }
        else {
            setData(notificationData);
        }
    }
    useEffect(() => {
        handleData()
    }, [notificationData])
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
                <Grid
                    item
                    xs={12}
                    sx={{ display: "flex", gap: 2, alignItems: "center" }}
                >
                    <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <Box
                            onClick={() => navigate('/menus')}
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                border: "2px solid #28CD56",
                                borderRadius: "50%",
                                p: 0.5,
                                width: "fit-content",
                            }}
                        >
                            <Avatar
                                alt="Morsalin Nur"
                                src="https://s3-alpha-sig.figma.com/img/9ffb/c5ae/c9c30c0248c3731569b1f7170833a931?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H-zlSFib2fopXav-Bsg3t8wY2NXGRhItME349UbJQcZrm7o~jAYz6gXE1iRXHqinfZar3JA4bhKT0LRSsI7u9bAr~yxT6KEsIJBjJQQ5aKidmItfBi7T21VmMgo3m4AfF44K4HzJgRKx8HmN7qDOc6W3MqlOO-pVppq-HcufgeXlj6vKaY0ujQkbCe2VUwF0xUjXxRd3V3Km2wSvVYiWknjCE3zO7tPRhPZp17WNqZfztPFVZ3dXyK0o7JSJL-fdDU1GVoWNoNYmdtp95qnr2zBh2yH8qiM~j5Ye9xSI5Y4ZvglsvRHoFs8b4yBeSauH-aQla8ClZc86xdH1i9edhg__"
                            />
                        </Box>

                        <Grid item xs={12} sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                            <Typography fontSize={"18px"} fontWeight={600}>
                                Notifications
                            </Typography>
                            <Avatar
                                sx={{
                                    bgcolor: "#28CD56",
                                    width: "24px",
                                    height: "24px",
                                    fontSize: "0.8rem",
                                }}
                            >
                                35
                            </Avatar>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} sx={{ display: "flex", justifyContent: "end" }}>
                        <IconButton>
                            <SearchOutlinedIcon sx={{ color: '#1A1B23' }} />
                        </IconButton>
                    </Grid>
                </Grid>
                <Grid item xs={12} sx={{ pb: 2 }}>
                    <Divider />
                </Grid>
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography sx={{ color: '#8B8B8B', fontSize: '12px', cursor: 'pointer' }} onClick={showMoreOrLess}>{show ? 'Show less' : 'Show all'}</Typography>
                    <Typography sx={{ color: '#8B8B8B', fontSize: '12px', cursor: 'pointer' }} onClick={markAllRead}>Mark all as read</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Divider />
                </Grid>
                <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column', gap: 2, }}>
                    {
                        data.map((elem: NotificationType, index: number) => {
                            return (
                                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between', gap: 2 }}>
                                    <Grid item xs={12} key={index} sx={{ display: 'flex', gap: 2, justifyContent: 'space-between', border: '1px solid #EEEEEE', borderRadius: "15px", p: 2 }}>
                                        <Grid item sx={{ display: 'flex', gap: 2 }} >
                                            <Avatar alt={elem.name} src={elem.pic} />
                                            <Grid item>
                                                <Typography fontWeight={600} fontSize={'14px'} >{elem.name}&nbsp;
                                                    <Typography component='span' sx={{ color: '#676767', fontSize: '12px' }}> {elem.desc}</Typography></Typography>
                                                {elem.groupName && <Typography fontWeight={600} fontSize={'14px'} >{elem.groupName}</Typography>}
                                                <Typography fontWeight={400} fontSize={'12px'} sx={{ color: '#919191' }}>{elem.time} {elem.time !== 'Just now' && 'ago'}</Typography>
                                            </Grid>

                                        </Grid>

                                    </Grid >
                                    {
                                        elem.read && (
                                            <Button variant='contained' color="success" sx={{ bordrRadius: '15px', }}><DoneIcon sx={{ fontSize: '1.2rem', pb: '2' }} /><br />Read</Button>
                                        )
                                    }
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Grid>
        </Grid >
    );
};

export default Notifications;

