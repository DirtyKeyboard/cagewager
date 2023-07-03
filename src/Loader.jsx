import React from "react";

const Loader = () => {
    return (
        <div
            className={`h-12 w-12 rounded-xl border-2 border-red-600 animate-spin transition-all ease-in-out duration-300`}
        />
    );
};

export default Loader;
