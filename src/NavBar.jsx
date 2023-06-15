import React from "react";

const NavBar = () => {
    const [open, setOpen] = React.useState(false);
    const tlate = "transition-all ease-in-out duration-300";
    const left = Math.ceil(screen.width * 0.12);
    return (
        <>
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
                className={`w-[12vw] ${tlate} bg-gray-600 h-screen fixed top-0  ${
                    open ? `left-0` : `left-[-${left}px]`
                } flex flex-col justify-start py-4 px-8 text-white`}
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
