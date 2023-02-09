import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import OutlinedInput from "@mui/material/OutlinedInput";
import PhoneInputWithCountrySelect from "react-phone-number-input";
import "./userForm.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

interface flagProps {
    setFlag: (value: boolean) => void;
    flag: boolean;
}

const UserForm = ({ setFlag, flag }: flagProps) => {
    const navigate = useNavigate();

    // to store name, email and mobile created the useState hooks
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [mobile, setMobile] = useState<any>("+91");

    // the true flag stored in session storage is cleared when this page loads to prevent access to ape data fetching page
    sessionStorage.clear();

    // flag set to false every time home page loads
    useEffect(() => {
        if (flag === true) {
            setFlag(false);
        }
    }, []);

    const handleOnClick = () => {
        //regex for email verification
        const emailFormat = /\S+@\S+\.\S+/;

        // check the name is entered or not
        if (!name) {
            return toast.error("name can not be empty!");
        }

        // check mobile number is not empty and all 10 digits are filled.
        if (!mobile) {
            setMobile("+91");
            return toast.error("Please fill valid mobile number!");
        } else if (mobile.length !== 13) {
            return toast.error("Please fill valid mobile number!");
        }

        //check email is empty or not
        if (!email) {
            return toast.error("email can not be empty!");
        }

        //email validation using regex
        if (!email.match(emailFormat)) {
            return toast.error("invalid email!");
        }

        setFlag(true);

        //data stored in local storage
        localStorage.setItem("name-react-internship", name);
        localStorage.setItem("mobile_number-react-internship", mobile);
        localStorage.setItem("email-react-internship", email);

        // true flag stored in session storage to handle reloading in api page
        sessionStorage.setItem("flag-react-internship", true.toString());
        toast.success("local");

        //navigate to api data fetching page
        navigate("/apidata");
    };

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                height: "44.55rem",
            }}
            component="section">
            <Paper
                sx={{
                    height: "30rem",
                    width: "25rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around",
                }}
                variant="outlined">
                <ToastContainer
                    limit={3}
                    autoClose={2000}
                    position="top-left"
                />
                <Typography
                    mt={3}
                    variant="h5"
                    component="h4"
                    sx={{ textAlign: "center" }}>
                    Enter Your Details
                    <Divider sx={{ marginTop: "1.6rem" }} />
                </Typography>

                <form>
                    <Box
                        px={2}
                        py={1}
                        sx={{
                            height: "24rem",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-around",
                        }}>
                        <Box
                            sx={{
                                height: "16rem",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                            }}>
                            <Box>
                                <Typography component="p">
                                    Name &nbsp;&nbsp;&rarr;
                                </Typography>
                                <OutlinedInput
                                    type="text"
                                    fullWidth
                                    value={name}
                                    onChange={(eve) =>
                                        setName(eve.target.value)
                                    }
                                />
                            </Box>

                            <Box>
                                <Typography component="p">
                                    Mobile &nbsp;&rarr;
                                </Typography>
                                <PhoneInputWithCountrySelect
                                    international
                                    defaultCountry="IN"
                                    value={mobile}
                                    onChange={setMobile}
                                />
                            </Box>

                            <Box>
                                <Typography component="p">
                                    Email &nbsp;&nbsp;&rarr;
                                </Typography>
                                <OutlinedInput
                                    type="email"
                                    fullWidth
                                    value={email}
                                    onChange={(eve) =>
                                        setEmail(eve.target.value)
                                    }
                                />
                            </Box>
                        </Box>

                        <Button variant="contained" onClick={handleOnClick}>
                            submit
                        </Button>
                    </Box>
                </form>
            </Paper>
        </Box>
    );
};

export default UserForm;
