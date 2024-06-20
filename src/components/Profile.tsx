import { Box, Grid, Typography, Button, Divider, IconButton, Avatar } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import React, { useEffect, useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CircleIcon from '@mui/icons-material/Circle';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { followersType } from '../utils/types/FollowersType';
import { setFollowersData } from '../redux/slices/dataSlice';
interface socialDataType {
    count: string | undefined;
    name: string;
}

const Profile: React.FC = () => {
    const navigate = useNavigate();
    const [params, setParams] = useSearchParams();
    const reduxData = useSelector((state: any) => state.data);
    const [profileData, setProfileData] = useState<followersType | null>(null);
    const [socialData, setSocialData] = useState<socialDataType[] | null>(null)
    const { followersData } = reduxData;
    const dispatch = useDispatch();
    const getProfileData = () => {
        let id = params.get('id')
        if (id) {
            let filteredData: followersType | null = followersData.find((elem: followersType) => elem.id === id);
            let requiredData = [
                {
                    count: filteredData?.followers,
                    name: "Followers",
                },
                {
                    count: filteredData?.post,
                    name: "Post",
                },
                {
                    count: filteredData?.following,
                    name: "Following",
                },
            ];
            setSocialData(requiredData);
            setProfileData(filteredData);
        }
    }
    const handleLike = () => {
        let id = params.get('id');
        let index = followersData.findIndex((elem: followersType) => elem.id === id);
        let temp = JSON.parse(JSON.stringify(followersData));
        temp[index]['like'] = !temp[index]['like']
        dispatch(setFollowersData(temp));
    }
    const handleFollow = () => {
        let id = params.get('id');
        console.log(id)
        let index = followersData.findIndex((elem: followersType) => elem.id === id);
        console.log(index)
        let temp = JSON.parse(JSON.stringify(followersData));
        temp[index]['follow'] = !temp[index]['follow']
        console.log(temp[index])
        dispatch(setFollowersData(temp));
    }
    useEffect(() => {
        getProfileData()
    }, [followersData]);
    return (
        <Grid container justifyContent={'center'}>
            <Grid item sx={{ display: 'flex', flexDirection: 'column', border: '1px solid #b9e1aa', borderRadius: '10px', p: 2, m: 2, justifyContent: 'center', gap: 1, maxWidth: '35%' }}>
                <Grid item xs={12} sx={{ display: 'flex', gap: 2 }}>
                    <Box sx={{ width: 'fix-content' }}>
                        <Button variant='contained' color='success' sx={{ borderRadius: '8px', py: 1.8 }} onClick={() => navigate('/followers')}>
                            <ArrowBackIcon sx={{ fontSize: '1rem' }} />
                        </Button>
                    </Box>
                    <Grid item xs={12} sx={{ display: "flex", alignItems: 'center', justifyContent: 'space-between' }}>
                        <Grid item xs={12}>
                            <Typography fontSize='18px' fontWeight={600} sx={{ textAlign: 'center' }}>Profile</Typography>
                        </Grid>
                        <Box sx={{ width: 'fix-content', display: 'flex' }}>
                            {
                                profileData?.like ? <IconButton onClick={handleLike}> <FavoriteIcon color='error' />  </IconButton> : <IconButton onClick={handleLike}><FavoriteBorderOutlinedIcon />  </IconButton>
                            }
                            <IconButton>
                                <SearchOutlinedIcon color='secondary' />
                            </IconButton>
                        </Box>
                    </Grid>

                </Grid>
                <Grid item xs={12}>
                    <Divider />
                </Grid>
                <Grid item xs={12} sx={{
                    display: "flex",
                    flexDirection: 'column',
                    alignItems: "center",
                    p: 2,
                    gap: 0.6
                }}>
                    <Box
                        sx={{
                            alignItems: "center",
                            border: "2px solid #28CD56",
                            borderRadius: "50%",
                            p: 0.5,
                            width: "fit-content",
                        }}
                    >
                        <Avatar
                            alt={profileData?.name}
                            src={profileData?.pic} sx={{ width: '120px', height: '120px' }}
                        />
                    </Box>
                    <Typography fontSize={'14px'} fontWeight={600} sx={{ color: '#1A1B23' }}>{profileData?.name}</Typography>
                    <Typography fontSize={'12px'} fontWeight={400} sx={{ color: '#919191' }}>{profileData?.title}</Typography>
                </Grid>
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
                    <IconButton>
                        <CircleIcon sx={{ color: '#BEBEBE' }} />
                    </IconButton>
                    <IconButton>
                        <CircleIcon sx={{ color: '#BEBEBE' }} />
                    </IconButton>
                    <IconButton>
                        <CircleIcon sx={{ color: '#BEBEBE' }} />
                    </IconButton>
                    <IconButton>
                        <CircleIcon sx={{ color: '#BEBEBE' }} />
                    </IconButton>
                </Grid>
                <Grid item xs={12} sx={{ display: "flex", justifyContent: 'center', gap: 0.8, alignItems: 'center' }}>
                    <Button
                        onClick={() => navigate(`/chat?id=${params.get('id')}`)}
                        sx={{
                            display: "flex",
                            justifyContent: 'center',
                            borderRadius: '10px',
                            gap: 0.8,
                            alignItems: 'center',
                            '&:hover': {
                                backgroundColor: '#EEEEEE',
                            }
                        }}
                    >
                        <CircleIcon
                            sx={{
                                color: '#0F9804',
                                fontSize: '0.6rem',
                                '&:hover': {
                                    backgroundColor: '#EEEEEE'
                                }
                            }}
                        />
                        <TextsmsOutlinedIcon color='secondary' sx={{ fontSize: '1.3rem' }} />
                        <Typography sx={{ fontSize: '12px', color: '#626262' }}>Meassge</Typography>

                    </Button>
                    <Button variant='contained' sx={{
                        borderRadius: '20px', minWidth: '86px', maxHeight: '34px', fontSize: '12px', backgroundColor: profileData?.follow ? '#EEEEEE' : '#52c41a', color: profileData?.follow ? 'black' : 'white', '&:hover': {
                            backgroundColor: profileData?.follow ? '#C8C6C6' : '#4dae1d',
                            color: profileData?.follow ? 'black' : 'white',
                        }
                    }} onClick={handleFollow} >{profileData?.follow ? 'Following' : 'Follow'}</Button>
                </Grid>
                <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
                    {socialData && socialData.map((elem: socialDataType, index: number) => {
                        return (
                            <Grid
                                item
                                sx={{
                                    width: "90px",
                                    height: "80px",
                                    border: "1px solid #EEEEEE",
                                    borderRadius: "10px",
                                    m: 2,
                                    p: 2,
                                }}
                                key={index}
                            >
                                <Typography
                                    fontSize={"25px"}
                                    fontWeight={400}
                                    sx={{ color: "#1A1B23", textAlign: "center" }}
                                >
                                    {elem.count}
                                </Typography>
                                <Typography
                                    fontSize={"12px"}
                                    sx={{ color: "#919191", textAlign: "center" }}
                                >
                                    {elem.name}
                                </Typography>
                            </Grid>
                        );
                    })}
                </Grid>
                <Grid item xs={12}>
                    <Divider />
                </Grid>
                <Grid item xs={12} sm={12} sx={{ display: 'flex', gap: 2, overflowX: 'auto', overflowY: 'hidden', maxWidth: '100%' }}>
                    {imgData.map((elem: string, index: number) => (
                        <Grid item key={index}>
                            <img src={elem} alt='img' style={{ width: '166px', height: '166px' }} />
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid >
    )
}

export default Profile;

const imgData = [
    'https://s3-alpha-sig.figma.com/img/1b0c/08ce/e6491ef5f223548b11238cab3c5ef9e5?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bSFe~xH7GLKh03DCWiWRRMvK3Nmfvpb8YeIz9um4Z-09tF7eTreua~RaFJomczZY0RsiidirUtsYy-m3E2MWeSz8s1NAJ6~es-QsIgBu3Gpd747swS9IbzkZ7XlTZM3sWwwl8TBmDeHoi-bQCFYgipwqUqv0pZAaZ1rM1ULZIUGe5uDLfEFmv~4~G6cfyL0tRLA5ZRzNduv7DX2QYOdkFXgHPngosh63jDPheUN7n5pZ8eLNZ65xMmODKnALBfr9dfvh0GkND2hFZGSFgzu8uNnvWzliklR15YY~1umHhpzt5KiXSKnYJbnVenKbgQ8JTtwPtUcIFubNMC-TNrP~8g__', 'https://s3-alpha-sig.figma.com/img/32c6/fbd3/825e71805d7de0e02087bb3c62d00594?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kQCKpT1xtuQ7Pmnj2AHDN~B6s2~ClJ6kU1it~~X325BGIK~1nIOtbsVaART-5NkosK-GZEd4EebBZPz5onNlD1A-nqCRfQpzd--49POCkSPGZY7pliRO-U4xh26yfdzKwne6gl3ZULSiJXlEYGtTMmwUoQfE6iBG-fotjktpqZ6m0q8bxy4Rxn6QRPBFDNb5ZghHs-YS1LPuEXeiEq6CfloFNIQrNPs~dvsGU~DYy56rRPQR5AWhqRLHt1q5zouhBk8lYCSln-pNkCHKncN9cIDqgC5LmR8p99Ff-Uw48n1yLtlRl0WjlSXgqAUXVRtzf27foQGy3fQ6FM-WAQIzLA__',
    'https://s3-alpha-sig.figma.com/img/6f58/889e/64b267f6681d45b9405519103ab2ad99?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EhR3amhPxfqDPTnyRNAKFSH6FesXNxdG9P86gkJnha44Qimxhtxuc4aic~-sqD18OmmA9HrNObxinFqWjNG4ZicTtuL7lrfFgIlSjF2UVTwnTjb-JM8t-grV-VmGMRi64cda1WvPZGu-~TKVFO5uqNnpYNXA1XJP1QFsYXJpjvswBbiQmC3a8MWv6NxRSPm~~i9efY4BOcFamZyaCH1In8n6Sp5ln6rIID44yAs7FpEGL-Gzc0iORLo5DaLAHokyHRDgAuWrT-F6L582H-dW1C2bwl3lHV2H8auorRu2cfRsJcMYpybjyPsLjLrrZpqSKRxV9qfOJ7axJh3e7dYBmg__', 'https://s3-alpha-sig.figma.com/img/1b0c/08ce/e6491ef5f223548b11238cab3c5ef9e5?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bSFe~xH7GLKh03DCWiWRRMvK3Nmfvpb8YeIz9um4Z-09tF7eTreua~RaFJomczZY0RsiidirUtsYy-m3E2MWeSz8s1NAJ6~es-QsIgBu3Gpd747swS9IbzkZ7XlTZM3sWwwl8TBmDeHoi-bQCFYgipwqUqv0pZAaZ1rM1ULZIUGe5uDLfEFmv~4~G6cfyL0tRLA5ZRzNduv7DX2QYOdkFXgHPngosh63jDPheUN7n5pZ8eLNZ65xMmODKnALBfr9dfvh0GkND2hFZGSFgzu8uNnvWzliklR15YY~1umHhpzt5KiXSKnYJbnVenKbgQ8JTtwPtUcIFubNMC-TNrP~8g__', 'https://s3-alpha-sig.figma.com/img/32c6/fbd3/825e71805d7de0e02087bb3c62d00594?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kQCKpT1xtuQ7Pmnj2AHDN~B6s2~ClJ6kU1it~~X325BGIK~1nIOtbsVaART-5NkosK-GZEd4EebBZPz5onNlD1A-nqCRfQpzd--49POCkSPGZY7pliRO-U4xh26yfdzKwne6gl3ZULSiJXlEYGtTMmwUoQfE6iBG-fotjktpqZ6m0q8bxy4Rxn6QRPBFDNb5ZghHs-YS1LPuEXeiEq6CfloFNIQrNPs~dvsGU~DYy56rRPQR5AWhqRLHt1q5zouhBk8lYCSln-pNkCHKncN9cIDqgC5LmR8p99Ff-Uw48n1yLtlRl0WjlSXgqAUXVRtzf27foQGy3fQ6FM-WAQIzLA__',
    'https://s3-alpha-sig.figma.com/img/6f58/889e/64b267f6681d45b9405519103ab2ad99?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EhR3amhPxfqDPTnyRNAKFSH6FesXNxdG9P86gkJnha44Qimxhtxuc4aic~-sqD18OmmA9HrNObxinFqWjNG4ZicTtuL7lrfFgIlSjF2UVTwnTjb-JM8t-grV-VmGMRi64cda1WvPZGu-~TKVFO5uqNnpYNXA1XJP1QFsYXJpjvswBbiQmC3a8MWv6NxRSPm~~i9efY4BOcFamZyaCH1In8n6Sp5ln6rIID44yAs7FpEGL-Gzc0iORLo5DaLAHokyHRDgAuWrT-F6L582H-dW1C2bwl3lHV2H8auorRu2cfRsJcMYpybjyPsLjLrrZpqSKRxV9qfOJ7axJh3e7dYBmg__',
]