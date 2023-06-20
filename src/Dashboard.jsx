import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { set } from "../redux/userSlice";
import NavBar from "./NavBar";

const Dashboard = () => {
    const { user } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    return (
        <>
            <NavBar />
            <div className="flex justify-center items-center gap-4 flex-col">
                <h1>Welcome, {user.username}</h1>
                {/* NOTES 
                    Dashboard should be populated with cards
                    1: Grocery list w/ quick edit
                    2: Friends, sorted by online ( show green dot )
                
                */}
                <button
                    className="btn"
                    onClick={() => {
                        dispatch(set(null));
                    }}
                >
                    Log Out
                </button>
            </div>
        </>
    );
};

export default Dashboard;
