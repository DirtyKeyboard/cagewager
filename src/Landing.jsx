import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { set } from "../redux/userSlice";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import NavBar from "./NavBar";

function Landing() {
    const [form, setForm] = React.useState({ username: "", password: "" });
    const { user } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    async function handleSubmit(e) {
        e.preventDefault();
        if (e.nativeEvent.submitter.name === "login") {
            try {
                const r = await axios.post("/api/login", {
                    username: form.username,
                    password: form.password,
                });
                dispatch(set(r.data.user));
            } catch (err) {
                toast.error("Invalid username or password.", {
                    position: "bottom-right",
                });
            }
        } else {
            try {
                const r = await axios.post("/api/register", {
                    username: form.username,
                    password: form.password,
                });
                dispatch(set(r.data.user));
            } catch (err) {
                toast.error("Invalid username or password.", {
                    position: "bottom-right",
                });
            }
        }
    }
    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }
    return (
        <>
            {user ? <NavBar /> : null}
            <div className="h-screen bg-gradient-to-r from-cyan-500 to-blue-500 flex justify-center items-center flex-col">
                <h1 className="text-white text-6xl mb-2">
                    Welcome to Stock Up!
                </h1>
                <ToastContainer />
                {user ? (
                    <>
                        <h1 className="text-xs">{user.token.split(" ")[1]}</h1>
                        <button
                            className="bg-blue-600 text-white font-bold p-4 rounded-2xl hover:bg-blue-400 transition-all"
                            onClick={() => {
                                dispatch(set(null));
                            }}
                        >
                            Log Out
                        </button>
                    </>
                ) : (
                    <form
                        className="rounded-xl border-double border-4 border-slate-200 rounded-br-[250px] flex flex-col gap-4 items-center justify-center bg-white w-[55rem] h-[50rem] bg-gradient-to-l from-cyan-500 to-blue-500 shadow-2xl"
                        onSubmit={handleSubmit}
                    >
                        <h1 className="text-white font-semibold">Username</h1>
                        <input
                            name="username"
                            value={form.username}
                            onChange={handleChange}
                            type="text"
                            className="border border-black rounded-full w-64"
                        />
                        <h1 className="text-white font-semibold">Password</h1>
                        <input
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            type="password"
                            className="border border-black rounded-full w-64"
                        />
                        <div className="flex gap-4 items-center">
                            <button
                                name="login"
                                type="submit"
                                className="bg-blue-600 text-white font-bold p-4 rounded-2xl hover:bg-blue-400 transition-all"
                            >
                                Log In
                            </button>
                            <span className="text-white text-lg font-bold">
                                OR
                            </span>
                            <button
                                name="create"
                                type="submit"
                                className="bg-blue-600 text-white font-bold p-4 rounded-2xl hover:bg-blue-400 transition-all"
                            >
                                Create Account
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </>
    );
}

export default Landing;
