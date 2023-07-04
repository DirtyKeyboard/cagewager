import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { set } from "../redux/userSlice";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ufc from "./assets/ufc-logo.png";

function Login() {
    const [form, setForm] = React.useState({ username: "", password: "" });
    const { user } = useSelector((state) => state.user);
    const nav = useNavigate();
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
                nav("/dashboard");
            } catch (err) {
                toast.error("Invalid username or password.", {
                    position: "bottom-right",
                });
            }
        } else {
            try {
                //? Successfull Login
                const r = await axios.post("/api/register", {
                    username: form.username,
                    password: form.password,
                });
                dispatch(set(r.data.user));
                nav("/dashboard");
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
            <div className="h-screen flex justify-center items-center flex-col">
                <h1 className="text-white text-6xl my-4 flex flex-row justify-center gap-4">
                    Welcome to <img src={ufc} className="w-44" />
                    <span className="font-[orbitron]">CageWager</span>
                </h1>
                <ToastContainer />
                <form
                    className="mb-16 rounded-xl bg-gray-800 border-slate-200 rounded-br-[250px] flex flex-col gap-4 items-center justify-center lg:w-[60vw] w-[80vw] h-[50rem] shadow-2xl"
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
                        <button name="login" type="submit" className="btn">
                            Log In
                        </button>
                        <span className="text-white text-lg font-bold">OR</span>
                        <button
                            name="create"
                            type="submit"
                            className="btn-sway"
                        >
                            Create Account
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Login;
