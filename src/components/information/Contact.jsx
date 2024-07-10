import React, { useState } from 'react';
import bg from "../../assets/bg.svg"
import { motion } from "framer-motion";
import { FaEnvelope, FaTimes, FaUser, FaPen } from "react-icons/fa";
import {LuSendToBack} from "react-icons/lu";

function Contact({ close }) {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitting Contact Form:", { email, name, message });
    };

    return (
        <motion.div className="max-w-xl bg-white relative rounded-3xl p-4 py-6 shadow-sky-500 shadow-2xl w-full flex flex-col justify-center items-center bg-center bg-cover"
             style={{ backgroundImage: `url(${bg})` }}
             initial={{ opacity: 0, y: 50 }}
             animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
             exit={{ opacity: 0, y: 50, transition: { duration: 0.5 } }}
        >
            <button className="absolute top-2 right-2 text-blue-400 text-xl" onClick={close}><FaTimes/></button>
            <h2 className="text-5xl mt-2 font-semibold mb-4 bg-gradient-to-r from-pink-400 via-blue-400 to-pink-300 rounded-full p-4"><LuSendToBack/></h2>
            <h2 className="text-2xl text-gray-400 font-semibold mb-4">Contact</h2>
            <form onSubmit={handleSubmit} className="w-full max-w-md mt-2">
                <div className="mb-4 relative">
                    <label htmlFor="email" className="absolute top-3.5 left-3 text-md text-gray-400 font-semibold"><FaEnvelope/></label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 pl-8 py-3 text-gray-400 font-semibold rounded-full bg-white shadow-sky-500 shadow-2xl focus:outline-none"
                    />
                </div>
                <div className="mb-4 relative">
                    <label htmlFor="name" className="absolute top-3.5 left-3 text-md text-gray-400 font-semibold"><FaUser/></label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 pl-8 py-3 text-gray-400 font-semibold rounded-full bg-white shadow-sky-500 shadow-2xl focus:outline-none"
                    />
                </div>
                <div className="mb-6 relative">
                    <label htmlFor="message" className="absolute top-3.5 left-3 text-md text-gray-400 font-semibold"><FaPen/></label>
                    <textarea
                        id="message"
                        placeholder="Your Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full px-4 pl-8 py-3 text-gray-400 font-semibold rounded-lg bg-white shadow-sky-500 shadow-2xl focus:outline-none resize-none"
                        rows="5"
                    />
                </div>
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="bg-gradient-to-r from-pink-400 via-blue-400 to-pink-300 py-3 px-12 rounded-full hover:scale-105 duration-300 text-white font-semibold"
                    >
                        Send Message
                    </button>
                </div>
            </form>
        </motion.div>
    );
}

export default Contact;
