import React from "react";
import NavBar from "./NavBar";
import moment from "moment";
import axios from "axios";
import EventCard from "./EventCard";
import Loader from "./Loader";
import { v4 as uuid } from "uuid";

const Prediction = () => {
    const [event, setEvent] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const dayOneRaw = moment().weekday(6);
    const dayOne = dayOneRaw.format("MMMM_DD_yyyy");
    const dayTwo = dayOneRaw.add(7, "days").format("MMMM_DD_yyyy");
    React.useEffect(() => {
        const getData = async () => {
            const headers = {
                "X-RapidAPI-Key":
                    "9e0c0ccf07msh5034fcd9c9e8340p12555cjsn516087d377c1",
                "X-RapidAPI-Host": "mma-stats.p.rapidapi.com",
            };
            try {
                const response = await axios.get(
                    `https://mma-stats.p.rapidapi.com/${dayOne}`,
                    { headers }
                );
                response.data.push(dayOne);
                setEvent([response.data]);
                const r2 = await axios.get(
                    `https://mma-stats.p.rapidapi.com/${dayTwo}`,
                    { headers }
                );
                r2.data.push(dayTwo);
                setEvent([response.data, r2.data]);

                setLoading(false);
            } catch (error) {
                console.warn("Seems like one date is not ready yet.");
                setLoading(false);
            }
        };
        getData();
    }, []);

    return (
        <>
            <NavBar />
            <div className="flex justify-center items-center gap-4 flex-col p-4">
                <h1>Select Your Event</h1>
                {loading ? (
                    <Loader />
                ) : (
                    <>
                        {event.length > 0 ? (
                            <>
                                {event.map((el) => (
                                    <EventCard
                                        key={uuid()}
                                        tag={`${el[0].matchup[0]} vs ${el[0].matchup[1]}`}
                                        date={el[el.length - 1]}
                                    />
                                ))}
                            </>
                        ) : (
                            <h1>{"No events! :("}</h1>
                        )}
                    </>
                )}
            </div>
        </>
    );
};

export default Prediction;
