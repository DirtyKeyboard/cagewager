import React from "react";
import { useNavigate } from "react-router-dom";

const EventCard = ({ headliners, date }) => {
    const nav = useNavigate();
    return (
        <div
            className="p-4 text-white bg-red-600 font-bold rounded-md text-center hover:translate-y-1 transition-all ease-in-out hover:cursor-pointer hover:bg-red-700"
            onClick={() => {
                nav(date);
            }}
        >
            {headliners}
        </div>
    );
};

export default EventCard;
