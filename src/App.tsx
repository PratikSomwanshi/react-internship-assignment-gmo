import { useState } from "react";

import DataCollect from "./pages/DataCollect/DataCollect";
import { Routes, Route } from "react-router-dom";
import ApiData from "./pages/apiData/ApiData";

const App = () => {
    // flag to see use has filled the details or not
    const [flag, setFlag] = useState(false);

    return (
        <div>
            {/* routs for home page and api data fetching page */}
            <Routes>
                <Route
                    path="/"
                    element={<DataCollect setFlag={setFlag} flag={flag} />}
                />
                <Route
                    path="/apidata"
                    element={<ApiData flag={flag} setFlag={setFlag} />}
                />
                <Route path="*" element={<h1>404 not found</h1>} />
            </Routes>
        </div>
    );
};

export default App;
