import React from "react";
import NavBar from "./NavBar";
import Loader from "./Loader";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { set } from "../redux/userSlice";
import UserCard from "./UserCard";

const Search = () => {
    const nav = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.user);
    const [query, setQuery] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    const [results, setResults] = React.useState([]);
    React.useEffect(() => {
        if (query == "") {
            setLoading(false);
            setResults([]);
        }
        const delayDebounceFn = setTimeout(async () => {
            if (query !== "") {
                setLoading(false);
                try {
                    const r = await axios.get(`/api/search/${query}`, {
                        headers: { token: user.token },
                    });
                    setResults(r.data.users);
                } catch (err) {
                    dispatch(set(null));
                    nav("/");
                }
            }
            //  else {
            //     setLoading(false);
            //     setResults([]);
            // }
        }, 1500);
        return () => clearTimeout(delayDebounceFn);
    }, [query]);
    return (
        <>
            <NavBar />
            <div className="flex flex-col justify-center items-center p-4 gap-4">
                <h1>Search</h1>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => {
                        setLoading(true);
                        setResults([]);
                        setQuery(e.target.value);
                    }}
                    className="w-96 p-2 rounded-3xl bg-cyan-100 border-2 border-cyan-500"
                    placeholder="Search..."
                />
                {loading ? <Loader /> : null}
                <div name="container" className="flex flex-col gap-4">
                    {results.map((el) => (
                        <UserCard key={el.id} user={el} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Search;
