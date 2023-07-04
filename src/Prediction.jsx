import React from "react";
import NavBar from "./NavBar";
import moment from "moment";
import axios from "axios";
import EventCard from "./EventCard";

const Prediction = () => {
    const [event, setEvent] = React.useState([]);
    const dayOneRaw = moment().weekday(6);
    const dayOne = dayOneRaw.format("MMMM_DD_yyyy");
    React.useEffect(() => {
        const getData = async () => {
            // const dayTwo = dayOneRaw.add(7, "days").format("MMMM_DD_yyyy");
            // const dayThree = dayOneRaw.add(7, "days").format("MMMM_DD_yyyy");
            const headers = {
                "X-RapidAPI-Key":
                    "9e0c0ccf07msh5034fcd9c9e8340p12555cjsn516087d377c1",
                "X-RapidAPI-Host": "mma-stats.p.rapidapi.com",
            };
            try {
                // const response = await axios.get(
                //     `https://mma-stats.p.rapidapi.com/${dayOne}`,
                //     { headers }
                // );
                // setEvent(response.data);
                setEvent([{ matchup: ["Guy1", "Guy2"] }]);
            } catch (error) {
                console.error(error);
            }
        };
        getData();
    }, []);
    return (
        <>
            <NavBar />
            <div className="flex justify-center items-center gap-4 flex-col p-4">
                <h1>Select Your Event</h1>
                {event.length > 0 ? (
                    <EventCard
                        headliners={
                            event[0].matchup[0] + " vs. " + event[0].matchup[1]
                        }
                        date={dayOne}
                    />
                ) : null}
            </div>
        </>
    );
};

export default Prediction;
