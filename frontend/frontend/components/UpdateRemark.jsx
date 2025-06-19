import { useState } from "react";
import axios from "axios";

const UpdateRemark = () => {
    const [configId, setConfigId] = useState("");
    const [remark, setRemark] = useState("");
    const [message, setMessage] = useState("");

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.put(`http://localhost:8080/api/configurations/${configId}`, {
                remark,
            });
            setMessage(res.data.message);
        } catch (err) {
            console.error("Error updating remark:", err);
            setMessage("Failed to update remark");
        }
    };

    return (
        <div>
            <h2>Update Remark</h2>
            <form onSubmit={handleUpdate}>
                <input
                    type="text"
                    placeholder="Enter Config ID"
                    value={configId}
                    onChange={(e) => setConfigId(e.target.value)}
                />
                <br /><br />
                <textarea
                    placeholder="Enter Remark"
                    value={remark}
                    onChange={(e) => setRemark(e.target.value)}
                />
                <br /><br />
                <button type="submit">Submit</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default UpdateRemark;
