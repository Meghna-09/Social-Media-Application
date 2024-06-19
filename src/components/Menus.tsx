import { Box, Grid, Avatar, Typography, Divider, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
const Menus: React.FC = () => {
    const navigate = useNavigate();
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
                    <Box
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
                    <Grid item xs={12}>
                        <Typography fontSize={"16px"} fontWeight={500}>
                            Morsalin Nur
                        </Typography>
                        <Typography sx={{ color: "#919191" }} fontSize="12px">
                            @morsalin.nur
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sx={{ display: "flex", justifyContent: "end" }}>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                border: "2px solid #EEEEEE",
                                borderRadius: "50%",
                                p: 0.5,
                                width: "fit-content",
                                cursor: "pointer",
                                "&:hover": { backgroundColor: "#f2f0ef" },
                            }}
                        >
                            <ChevronRightIcon sx={{ color: "#919191" }} />
                        </Box>
                    </Grid>
                </Grid>
                <Grid item xs={12} sx={{ pb: 2 }}>
                    <Divider />
                </Grid>
                <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
                    {socialData.map((elem, index) => {
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
                                    cursor: elem.path ? 'pointer' : ''
                                }}
                                key={index}
                                onClick={() => {
                                    if (elem.path) navigate(elem.path);
                                }}
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
                <Grid
                    item
                    xs={12}
                    sx={{ display: "flex", flexDirection: "column", gap: 2, p: 1 }}
                >
                    {menuData.map((elem, index) => {
                        return (
                            <>
                                <Grid
                                    key={index}
                                    item
                                    xs={12}
                                    sx={{
                                        display: "flex",
                                        gap: 2,
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <Grid item>
                                        <Typography sx={{ fontSize: "15px", fontWeight: 600 }}>
                                            {elem.title}
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontSize: "12px",
                                                fontWeight: 400,
                                                color: "#919191",
                                            }}
                                        >
                                            {elem.desc}
                                        </Typography>
                                    </Grid>
                                    <Grid item sx={{ display: "flex", gap: 2 }}>
                                        {elem.count && (
                                            <Grid item sx={{ alignContent: "center" }}>
                                                <Avatar
                                                    sx={{
                                                        bgcolor: "#28CD56",
                                                        width: "24px",
                                                        height: "24px",
                                                        fontSize: "0.8rem",
                                                    }}
                                                >
                                                    {elem.count}
                                                </Avatar>
                                            </Grid>
                                        )}
                                        <Grid item sx={{ display: "flex", justifyContent: "end" }}>
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    border: "2px solid #EEEEEE",
                                                    borderRadius: "50%",
                                                    p: 0.5,
                                                    width: "fit-content",
                                                    cursor: "pointer",
                                                    "&:hover": { backgroundColor: "#f2f0ef" },
                                                }}
                                            >
                                                <ChevronRightIcon sx={{ color: "#919191" }} />
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                {index === menuData.length - 2 && (
                                    <Grid item>
                                        <Divider />
                                    </Grid>
                                )}
                            </>
                        );
                    })}
                </Grid>
                <Grid item xs={12}>
                    <Button
                        variant="contained"
                        fullWidth
                        sx={{ p: 1, backgroundColor: "#C9FFD5", color: "#28CD56" }}
                    >
                        Log Out
                    </Button>
                </Grid>
            </Grid>
        </Grid >
    );
};

export default Menus;

const socialData = [
    {
        count: "572",
        name: "Post",
    },
    {
        count: "6.9K",
        name: "Followers",
        path: "/followers",
    },
    {
        count: "2.5K",
        name: "Following",
    },
];

const menuData = [
    {
        title: "Notification",
        count: "35",
        desc: "See your recent activity",
    },
    {
        title: "Friends",
        desc: "Friendlist totals",
    },
    {
        title: "Messages",
        count: "2",
        desc: "Message your friend",
    },
    {
        title: "Albums",
        desc: "Save or post your albums",
    },
    {
        title: "Favorites",
        desc: "Friends you love",
    },
    {
        title: "Privacy Policy",
        desc: "Protect your privacy",
    },
];
