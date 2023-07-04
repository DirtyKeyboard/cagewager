import React from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";

const EventCard = ({ tag, date }) => {
    const nav = useNavigate();
    const fDate = moment(date, "MMMM_DD_YYYY");
    return (
        <div
            className="p-4 text-white bg-red-600 font-bold rounded-md text-center hover:translate-y-1 transition-all ease-in-out hover:cursor-pointer hover:bg-red-700 flex flex-col gap-1"
            onClick={() => {
                nav(date);
            }}
        >
            {tag}
            <h3 className="text-sm">{fDate.format("MMMM Do, YYYY")}</h3>
        </div>
    );
};

export default EventCard;
