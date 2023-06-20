import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import NotFound from "./NotFound";
import Dashboard from "./Dashboard";
import Protected from "./Protected";
import Search from "./Search";
import { useSelector } from "react-redux";

function App() {
    const { user } = useSelector((state) => state.user);
    return (
        <>
            <Routes>
                <Route
                    exact
                    path="/"
                    element={
                        <Protected canNav={!user} path="/dashboard">
                            <Login />
                        </Protected>
                    }
                />
                <Route
                    path="/dashboard"
                    element={
                        <Protected canNav={user} path="/">
                            <Dashboard />
                        </Protected>
                    }
                />
                <Route path="/search" element={<Search />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App;
