import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { set } from "../redux/userSlice";

const Dashboard = () => {
    const { user } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Welcome, {user.username}</h1>
            <button
                className="bg-blue-100 p-4"
                onClick={() => {
                    dispatch(set(null));
                }}
            >
                Log Out
            </button>
        </div>
    );
};

export default Dashboard;
