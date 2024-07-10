import React, { useState } from 'react';
import bg from "../../assets/bg.svg"
import {FaKey, FaTimes, FaUser, FaUserCircle} from "react-icons/fa";
import { motion } from "framer-motion";
import {toast} from "react-toastify";

function LogIn({ close ,setProfile }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            toast.success('Login successful');
            setProfile({
                userName: username,
                fullName: username,
            })
        } catch (error) {
            toast.error('Login failed');
        }
        close();
    };

    return (
        <motion.div className="max-w-xl bg-white relative rounded-3xl p-4 py-6 shadow-sky-500 shadow-2xl w-full flex flex-col justify-center items-center bg-center bg-cover"
                    style={{backgroundImage: `url(${bg})`}}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
                    exit={{ opacity: 0, y: 50, transition: { duration: 0.5 } }}
        >
            <button className="absolute top-2 right-2 text-blue-400 text-xl" onClick={close}><FaTimes/></button>
            <h2 className="text-6xl mt-4  font-semibold mb-4 bg-gradient-to-r from-pink-400 via-blue-400 to-pink-300 rounded-full"><FaUserCircle/></h2>
            <h2 className="text-2xl text-gray-400 font-semibold mb-4">Log in</h2>

            <form onSubmit={handleSignIn} className="w-full max-w-md mt-2">
                <div className="mb-6 relative">
                    <label htmlFor="username" className="absolute top-3.5 left-3 text-md text-gray-400 font-semibold"><FaUser/></label>
                    <input
                        type="text"
                        id="username"
                        placeholder={"Username"}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full px-4 pl-8 py-3 text-gray-400 font-semibold rounded-full bg-white shadow-sky-500 shadow-2xl focus:outline-none"
                    />
                </div>
                <div className="mb-10 relative">
                    <label htmlFor="password" className="absolute top-3.5 left-3 text-md text-gray-400 font-semibold"><FaKey/></label>
                    <input
                        type="password"
                        id="password"
                        placeholder={"Password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 pl-8 py-3  text-gray-400 font-semibold rounded-full bg-white shadow-sky-500 shadow-2xl focus:outline-none"
                    />
                </div>
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="bg-gradient-to-r from-pink-400 via-blue-400 to-pink-300 py-3 px-12 rounded-full hover:scale-105 duration-300 text-white font-semibold"
                    >
                        Log in
                    </button>
                </div>
            </form>
        </motion.div>
    );
}

export default LogIn;
