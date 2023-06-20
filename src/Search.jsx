import React from "react";
import NavBar from "./NavBar";
import Loader from "./Loader";

const Search = () => {
    const [query, setQuery] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    const [results, setResults] = React.useState([]);
    React.useEffect(() => {
        const delayDebounceFn = setTimeout(async () => {
            if (query !== "") {
                setLoading(false);
                setResults(["Result 1", "Result 2", "Result 3"]);
            } else {
                setLoading(false);
                setResults([]);
            }
        }, 1500);
        return () => clearTimeout(delayDebounceFn);
    }, [query]);
    return (
        <>
            <NavBar />
            <div className="flex flex-col justify-center items-center p-4 gap-4">
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
                {results.map((el) => (
                    <h3>{el}</h3>
                ))}
            </div>
        </>
    );
};

export default Search;
