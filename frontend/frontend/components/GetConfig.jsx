import React, { useState } from "react";
import axios from "axios";

const GetConfig = () => {
    const [configId, setConfigId] = useState("");
    const [data, setData] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.get(`http://localhost:8080/api/configurations/${configId}`);
        setData(res.data);
    };

    return (
        <div>
            <h2>Get Configuration</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter Config ID"
                    value={configId}
                    onChange={(e) => setConfigId(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
            <div>
                <h3>Output:</h3>
                <pre>{JSON.stringify(data, null, 2)}</pre>
            </div>
        </div>
    );
};

export default GetConfig;
