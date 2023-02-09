import { Box, Typography } from "@mui/material";
import React from "react";

const Header = () => {
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: {
                    xs: "center",
                    lg: "space-between",
                },
                height: "4rem",
                background:
                    "linear-gradient(90deg, rgba(240,59,10,0.9136904761904762) 0%, rgba(255,196,0,0.8072478991596639) 100%)",
            }}
            maxWidth="100vw"
            px={4}
            py={2}>
            <Typography
                variant="h4"
                sx={{
                    display: {
                        xs: "none",
                        lg: "block",
                    },
                }}>
                React Internship Assignment
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: {
                        xs: "column",
                        md: "row",
                    },
                }}>
                <Box sx={{ display: "flex" }}>
                    <Box component="span">Name :&nbsp;</Box>
                    <Box component="p">Pratik Somwanshi</Box>
                </Box>
                <Box sx={{ display: "flex" }} ml={4}>
                    <Box component="span">Mobile :&nbsp;</Box>
                    <Box component="p">8830427235</Box>
                </Box>
                <Box sx={{ display: "flex" }} ml={4}>
                    <Box component="span">Email :&nbsp;</Box>
                    <Box component="p">pratiksomwanshi570@gmail.com</Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Header;
