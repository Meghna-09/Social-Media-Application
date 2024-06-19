import { Box, Grid, Typography, Button } from '@mui/material'
import { useNavigate } from "react-router-dom";
import React from 'react';
const Onboarding: React.FC = () => {
    const navigate = useNavigate();
    return (
        <Grid container justifyContent={'center'}>
            <Grid item sx={{ display: 'flex', flexDirection: 'column', border: '1px solid #b9e1aa', borderRadius: '10px', p: 2, m: 2, justifyContent: 'center', gap: 2, minWidth: '35%' }}>
                <Grid item sx={{
                    bottom: '-11.64px',
                    top: '-21.36px',
                    border: '1px solid',
                    borderImageSource: 'linear-gradient(180deg, #4DD969 0%, #28CD56 100%)'
                }}>

                    <Box
                        component="img"
                        src={'https://s3-alpha-sig.figma.com/img/481c/cbfa/52fda731dcb2c37bd4f529455d6d4c24?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F6iiw71T0vnzdhIblDWmWWpUC0OLsLpaWmD4t26626XDh7y4k6mQCmMtguFrlk~NbHRTng248QCsXm1Clm3DlUAgrF8a5-vJUl3Wo0wqOnxjGhGBVxSZmBtZhbwigln72XO6oMl2hqpd7laTx9ABJa9zG-jvHzPUNaRCawZ3IQu2G2fxdBSmGxG46GZ2Xb3Vvt8weD0mARKqyh0Al0tg318aORiqvTk-EM8sHZ-D3xjTAB0~RtY4-xI8X7gFR7BtlQ1oOK7OtDePbd-gsrHpOgDww7TztM3IzQ2UvD12ORMlJmHwsA8P9x0RtHr6ySaPmZN8jX6sCSkKUfU9eyIb~g__'}
                        alt="Uploaded"
                        sx={{
                            width: '100%',
                            height: '432.84px'
                        }}
                    />

                </Grid>
                <Grid item xs={12}>
                    <Typography sx={{ fontFamily: "Poppins", fontWeight: 580, fontSize: '40px', textAlign: 'center', textWrap: 'wrap', color: '#1A1B23' }}>Let’s connect
                        <br />with each other
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography sx={{ textAlign: 'center', textWrap: 'wrap', color: '#919191', fontFamily: "Poppins", fontWeight: 400, px: 6 }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    </Typography>
                </Grid>
                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', gap: 0.5 }}>
                    <Grid item sx={{ width: '47px', height: '5px', backgroundColor: '#392A4F', borderRadius: '20px' }} />
                    <Grid item sx={{ width: '8px', height: '5px', backgroundColor: '#392A4F', borderRadius: '20px', opacity: '25%' }} />
                    <Grid item sx={{ width: '8px', height: '5px', backgroundColor: '#392A4F', borderRadius: '20px', opacity: '25%' }} />
                </Grid>
                <Grid item xs={12}>
                    <Button variant='contained' fullWidth onClick={() => navigate('/sign-in')} color='success'>Get Started</Button>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Onboarding;