import React from 'react';
import {RxExit} from "react-icons/rx";
import { motion } from "framer-motion";
function Pdf({close , pdf}) {
    return (
        <div className="relative flex justify-center items-center w-full h-full max-w-3xl py-4">
            <button className="absolute bottom-8 text-2xl hover:scale-105 duration-200  font-medium text-white rounded-full bg-gradient-to-r from-pink-400 via-blue-400 to-pink-300 p-2" onClick={close}><RxExit/></button>
            <motion.iframe
                src={pdf}
                className="w-full h-full rounded-3xl shadow-sky-500 shadow-xl"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
                exit={{ opacity: 0, y: 50, transition: { duration: 0.5 } }}
            />
        </div>

    );
}

export default Pdf;