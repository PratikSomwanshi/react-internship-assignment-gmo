import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import FetchApiData from "../../components/FetchApiData/FetchApiData";
import "react-toastify/dist/ReactToastify.css";

interface flagProps {
    flag: boolean;
    setFlag: (value: boolean) => void;
}

const ApiData = ({ flag, setFlag }: flagProps) => {
    const navigate = useNavigate();

    // get true flag stored in session storage to prevent redirecting to home page while reloading the api data fetch page
    const localFlag = sessionStorage.getItem("flag-react-internship");

    // check whether true flag is there in session storage or not
    // if not then redirect the user to home page
    useEffect(() => {
        if (!localFlag && flag === false) {
            toast.error("Enter your detail to access the api data");
            navigate("/");
        } else {
        }
    }, [flag]);

    //if true flag is in session storage or flag is not equal to false then
    //return the data fetching component
    if (localFlag || flag !== false) {
        return (
            <div>
                <FetchApiData />
                <ToastContainer />
            </div>
        );
    }

    // if no true flag or flag comming as prop is false then return not authorised on webpage
    return <h1>User Not Authorised</h1>;
};

export default ApiData;
