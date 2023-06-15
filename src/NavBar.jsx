import React from "react";

const NavBar = () => {
    const [open, setOpen] = React.useState(false);
    const tlate = "transition-all ease-in-out duration-300";
    let currentRef = window.location.pathname.substring(1);
    currentRef = currentRef.substring(0, currentRef.indexOf("/")) || currentRef;
    return (
        <>
            <span className="fixed top-0 left-10 bg-cyan-500 text-white p-2 rounded-b-2xl font-bold">
                {currentRef.charAt(0).toUpperCase() + currentRef.slice(1)}
            </span>
            {open ? (
                <div
                    className={`h-screen w-screen fixed inset-0 bg-[#0000007e] ${tlate}`}
                />
            ) : null}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
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
                className={`w-[12vw] ${tlate} bg-gray-600 h-screen fixed top-0 ${
                    open ? `left-0` : `-left-96`
                } flex flex-col justify-start py-4 px-8 text-white
                bg-gradient-to-t from-cyan-500 to-blue-500`}
            >
                <p>Yeppers</p>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 hover:cursor-pointer"
                    onClick={() => setOpen(false)}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                    />
                </svg>
            </div>
        </>
    );
};

export default NavBar;
