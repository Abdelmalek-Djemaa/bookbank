import React from 'react';
import bg from "../../assets/bg.svg"
import { motion } from "framer-motion";
import {TbFaceIdError} from "react-icons/tb";
function Message({message , close}) {
    return (
        <motion.div className="max-w-sm bg-white relative rounded-3xl p-4 py-6 shadow-sky-500 shadow-2xl w-full flex flex-col justify-center items-center bg-center bg-cover"
                    style={{ backgroundImage: `url(${bg})` }}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
                    exit={{ opacity: 0, y: 50, transition: { duration: 0.5 } }}
        >
            <h2 className="text-5xl mt-2 font-semibold p-2 bg-gradient-to-r from-pink-400 via-blue-400 to-pink-300  text-white rounded-full"><TbFaceIdError /></h2>
            <div className="text-gray-500 text-center font-medium py-4">
                {message}
            </div>
            <button className="bg-gradient-to-r from-pink-400 via-blue-400 to-pink-300 text-sm py-2.5 px-8 rounded-full hover:scale-105 duration-300 text-white font-semibold"
            onClick={close}>
                ok
            </button>


        </motion.div>
    );
}

export default Message;