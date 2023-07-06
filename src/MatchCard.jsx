import React from "react";

const MatchCard = ({ match }) => {
    const [selected, setSelected] = React.useState(null);
    const handleChange = (e) => {
        if (e.target.value === selected) setSelected(null);
        else setSelected(e.target.value);
    };
    return (
        <form className="w-full flex justify-center items-center gap-2">
            <input
                type="radio"
                checked={selected === match.matchup[0]}
                value={match.matchup[0]}
                className="radio"
                onClick={handleChange}
            />
            <div className="flex items-center justify-center h-12 w-3/4 bg-red-600 text-white font-bold rounded-full">
                {match.matchup[0]} vs. {match.matchup[1]}
            </div>
            <input
                type="radio"
                checked={selected === match.matchup[1]}
                value={match.matchup[1]}
                className="radio"
                onClick={handleChange}
            />
        </form>
    );
};

export default MatchCard;
