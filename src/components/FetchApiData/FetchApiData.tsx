import React, { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// interface for which type of data will be stored in row hook
interface data {
    readonly userId: number;
    readonly id: number;
    readonly title: string;
    readonly body: string;
}

interface dataFormat extends Array<data> {}

const FetchApiData = () => {
    // only of interface named data types will be added in row
    const [row, setRow] = useState<dataFormat[] | string>([]);
    const navigate = useNavigate();

    // the url comming from environment file
    const URL = import.meta.env.VITE_API_BASE_URL;

    // when this component render the api will get called and data stored in row hook
    // if error occured it will add error message in row and it reflect on website
    useEffect(() => {
        axios
            .get(URL)
            .then((res) => setRow(res.data))
            .catch((err) => setRow(err.message));
    }, []);

    // colums format of datagrid defined
    const columns: GridColDef[] = [
        { field: "userId", headerName: "UserID", width: 90 },
        {
            field: "id",
            headerName: "ID",
            width: 90,
        },
        {
            field: "title",
            headerName: "Title",
            width: 450,
        },
        {
            field: "body",
            headerName: "Body",
            width: 800,
        },
    ];

    // home button will call this handleonclick function to redirect to home page
    const handleOnClick = () => {
        navigate("/");
    };

    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                    gap: "4rem",
                }}>
                <Button variant="contained" onClick={handleOnClick}>
                    Home
                </Button>
                <Typography
                    variant="h5"
                    sx={{
                        textAlign: "center",
                    }}>
                    Data was fetched from : "{URL}" and shown in following
                    Datagrid
                </Typography>
                <Box
                    sx={{
                        height: 400,
                        width: "95vw",
                    }}>
                    {typeof row !== "string" ? (
                        <DataGrid rows={row} columns={columns} />
                    ) : (
                        <h1>{row}</h1>
                    )}
                </Box>
            </Box>
        </>
    );
};

export default FetchApiData;
