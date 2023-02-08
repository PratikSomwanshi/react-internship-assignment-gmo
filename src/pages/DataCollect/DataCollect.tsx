import React from "react";
import Header from "../../components/Header/Header";
import UserForm from "../../components/Form/UserForm";

interface flagProp {
    setFlag: (value: boolean) => void;
    flag: boolean;
}

const DataCollect = ({ setFlag, flag }: flagProp) => {
    return (
        <div>
            <Header />
            <UserForm flag={flag} setFlag={setFlag} />
        </div>
    );
};

export default DataCollect;
