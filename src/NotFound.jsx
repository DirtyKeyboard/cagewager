import React from "react";

const NotFound = () => {
    return (
        <div className="h-screen bg-gradient-to-b from-gray-500 to-gray-900 flex justify-center items-center flex-col gap-8">
            <h1 className="text-9xl text-white">404!</h1>
            <h1 className="text-2xl text-white">
                Page not found! Click{" "}
                <a className="text-white underline" href="/">
                    here
                </a>{" "}
                to return to the landing page.
            </h1>
        </div>
    );
};

export default NotFound;
