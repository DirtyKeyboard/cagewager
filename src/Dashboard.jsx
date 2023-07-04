import React from "react";
import { useSelector, useDispatch } from "react-redux";
import NavBar from "./NavBar";
import axios from "axios";
import ufc from "./assets/ufc-logo.png";

const Dashboard = () => {
    const testItem = sessionStorage.getItem("testItem");
    const { user } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    return (
        <>
            <NavBar />
            <div className="flex justify-center items-center gap-4 flex-col p-4">
                <h1 className="text-white text-6xl my-4 flex flex-row justify-center gap-4">
                    <img src={ufc} className="w-44" />
                    <span className="font-[orbitron]">CageWager</span>
                </h1>
            </div>
        </>
    );
};

export default Dashboard;
