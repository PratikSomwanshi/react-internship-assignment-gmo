import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface flagProps {
    flag: boolean;
    setFlag: (value: boolean) => void;
}

const ApiData = ({ flag, setFlag }: flagProps) => {
    const navigate = useNavigate();
    const localFlag = sessionStorage.getItem("flag-react-internship");

    useEffect(() => {
        if (!localFlag && flag === false) {
            toast.error("Enter your detail to access the api data");
            navigate("/");
        } else {
        }
    }, [flag]);

    if (localFlag || flag !== false) {
        return (
            <div>
                <h1>HEllo</h1>
                <ToastContainer />
            </div>
        );
    }

    return <h1>Error</h1>;
};

export default ApiData;
