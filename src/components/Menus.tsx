import { Box, Grid, Avatar, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
import React from 'react';

const Menus: React.FC = () => {
    const navigate = useNavigate();

    return (
        <Grid container justifyContent={'center'}>
            <Grid item sx={{ display: 'flex', flexDirection: 'column', border: '1px solid #b9e1aa', borderRadius: '10px', p: 2, m: 2, justifyContent: 'center', gap: 2, minWidth: '35%' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', border: '2px solid #28CD56', borderRadius: '50%', p: 0.5, width: 'fit-content' }} >
                    <Avatar alt="Morsalin Nur" src="https://s3-alpha-sig.figma.com/img/9ffb/c5ae/c9c30c0248c3731569b1f7170833a931?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H-zlSFib2fopXav-Bsg3t8wY2NXGRhItME349UbJQcZrm7o~jAYz6gXE1iRXHqinfZar3JA4bhKT0LRSsI7u9bAr~yxT6KEsIJBjJQQ5aKidmItfBi7T21VmMgo3m4AfF44K4HzJgRKx8HmN7qDOc6W3MqlOO-pVppq-HcufgeXlj6vKaY0ujQkbCe2VUwF0xUjXxRd3V3Km2wSvVYiWknjCE3zO7tPRhPZp17WNqZfztPFVZ3dXyK0o7JSJL-fdDU1GVoWNoNYmdtp95qnr2zBh2yH8qiM~j5Ye9xSI5Y4ZvglsvRHoFs8b4yBeSauH-aQla8ClZc86xdH1i9edhg__" />
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Typography fontSize={'16px'} fontWeight={400}>
                    Morsalin Nur
                </Typography>
            </Grid>
        </Grid>
    );
}

export default Menus;
