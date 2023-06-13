import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./Landing";
import NotFound from "./NotFound";
import NavBar from "./NavBar";

function App() {
    return (
        <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default App;
