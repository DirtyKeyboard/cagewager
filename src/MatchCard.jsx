import React from "react";

const MatchCard = ({ match }) => {
    return (
        <div className="flex items-center justify-center h-24 w-full bg-red-600 text-white font-bold rounded-full">
            {match.matchup[0]} vs. {match.matchup[1]}
        </div>
    );
};

export default MatchCard;
