import React from "react";
import { useDispatch } from "react-redux";
import { set } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const nav = useNavigate();
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch();
    const tlate = "transition-all ease-in-out duration-300";
    let currentRef = window.location.pathname.substring(1);
    if (currentRef === "") currentRef = "Dashboard";
    currentRef = currentRef.substring(0, currentRef.indexOf("/")) || currentRef;
    const navLink = "hover:underline";
    const tagWord = currentRef.split("_");
    const tagWordFormatted = [];
    tagWord.forEach((el) =>
        tagWordFormatted.push(el.charAt(0).toUpperCase() + el.substring(1))
    );
    return (
        <div className="h-12 fixed">
            <span className="fixed top-0 left-10 bg-red-600 text-white p-2 rounded-b-2xl font-bold">
                {tagWordFormatted.join(" ")}
            </span>
            {open ? (
                <div
                    className={`h-screen w-screen fixed inset-0 bg-[#0000007e] ${tlate} backdrop-blur-sm`}
                />
            ) : null}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-6 h-6 hover:cursor-pointer"
                onClick={() => setOpen(!open)}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
            </svg>
            <div
                className={`w-56 ${tlate} bg-gray-600 h-screen fixed top-0 ${
                    open ? `left-0` : `-left-96`
                } flex flex-col justify-start gap-2 py-4 px-8 text-white
                bg-gradient-to-t from-red-800 to-red-600`}
            >
                <a href="/dashboard" className={navLink}>
                    Dashboard
                </a>
                <a href="/search" className={navLink}>
                    Search Users
                </a>
                <a href="/link" className={navLink}>
                    Your Friends
                </a>
                <a href="/make_a_prediction" className={navLink}>
                    Create Prediction
                </a>
                <a href="/link" className={navLink}>
                    Upcoming Events
                </a>
                <a href="/link" className={navLink}>
                    Fighter Lookup
                </a>
                <div className="flex flex-row gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={4}
                        stroke="currentColor"
                        className="w-7 h-7 hover:cursor-pointer bg-red-800 p-1 rounded-lg"
                        onClick={() => setOpen(false)}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                        />
                    </svg>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2.5}
                        stroke="currentColor"
                        className="w-7 h-7 hover:cursor-pointer bg-red-800 p-1 rounded-lg"
                        onClick={() => {
                            dispatch(set(null));
                            nav("/");
                        }} //! SHOW LOG OUT MODAL
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
