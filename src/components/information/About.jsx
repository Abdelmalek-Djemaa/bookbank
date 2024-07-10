import React from 'react';
import bg from "../../assets/bg.svg"
import { motion } from "framer-motion";
import { FaInfoCircle, FaTimes } from "react-icons/fa";


function About({ close }) {
    return (
        <motion.div className="max-w-xl bg-white relative rounded-3xl p-4 py-6 shadow-sky-500 shadow-2xl w-full flex flex-col justify-center items-center bg-center bg-cover"
             style={{ backgroundImage: `url(${bg})` }}
             initial={{ opacity: 0, y: 50 }}
             animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
             exit={{ opacity: 0, y: 50, transition: { duration: 0.5 } }}
        >
            <button className="absolute top-2 right-2 text-blue-400 text-xl" onClick={close}><FaTimes/></button>
            <h2 className="text-6xl mt-2 font-semibold mb-4 bg-gradient-to-r from-pink-400 via-blue-400 to-pink-300 rounded-full"><FaInfoCircle/></h2>
            <div className="w-full max-w-md mt-4">
                <p className="text-gray-700 font-semibold mb-4">
                    Welcome to bankbook website!
                </p>
                <p className="text-gray-700">
                    bankbook website is a digital platform designed to make accessing books and resources easier for our patrons.
                    Whether you're an avid reader, a student researching for a project, or someone looking to explore new topics,
                    our website offers a vast collection of books, journals, and multimedia resources to meet your needs.
                </p>
                <p className="text-gray-700 mt-4">
                    With bankbook website, you can:
                </p>
                <ul className="list-disc text-gray-700 ml-8 mt-2">
                    <li>Browse our extensive catalog of books and media</li>
                    <li>Search for specific titles, authors, or subjects</li>
                    <li>Access digital resources such as e-books</li>
                    <li>And much more!</li>
                </ul>
                <p className="text-gray-700 mt-4">
                    We are dedicated to promoting literacy, lifelong learning, and community engagement through our library services.
                    Thank you for being a part of our library community.
                </p>
            </div>
        </motion.div>
    );
}

export default About;
