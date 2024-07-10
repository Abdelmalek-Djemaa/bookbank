import React, { useState } from 'react';
import {FaPenFancy, FaTimes, FaUser} from 'react-icons/fa';
import { motion } from 'framer-motion';
import bg from "../../assets/bg.svg"
import {TiTags} from "react-icons/ti";
import {LuImagePlus} from "react-icons/lu";
import {PiFilePdf} from "react-icons/pi";

function AddBook({ close , type , data }) {
    const [category, setCategory] = useState(data?.category || '');
    const [title, setTitle] = useState(data?.title || '');
    const [author, setAuthor] = useState(data?.author || '');
    const [pdfFile, setPdfFile] = useState(null);
    const [imageFile, setImageFile] = useState(null);

    const handlePdfFileChange = (e) => {
        setPdfFile(e.target.files[0]);
    };

    const handleImageFileChange = (e) => {
        setImageFile(e.target.files[0]);
    };

    const handleAddBook = (e) => {
        e.preventDefault();
        const newBook = {
            category,
            title,
            author,
            pdfFile,
            imageFile
        };

        console.log(newBook)
    };

    return (
        <motion.div
            className="max-w-xl bg-white relative rounded-3xl p-4 py-6 shadow-sky-500 shadow-2xl w-full flex flex-col justify-center items-center bg-center bg-cover"
            style={{ backgroundImage: `url(${bg})` }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
            exit={{ opacity: 0, y: 50, transition: { duration: 0.5 } }}
        >
            <button className="absolute top-2 right-2 text-blue-400 text-xl" onClick={close}><FaTimes /></button>
            <h2 className="text-2xl text-gray-400 font-semibold mb-4">{type}</h2>
            <form onSubmit={handleAddBook} className="w-full max-w-md mt-4">
                <div className="mb-4 relative">
                    <label htmlFor="category" className="absolute top-3 left-3 text-md text-gray-400 font-semibold"><FaUser/></label>
                    <input
                        type="text"
                        id="category"
                        placeholder={"Category"}
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full px-4 pl-8 py-2.5 text-gray-400 font-semibold rounded-full bg-white shadow-sky-500 shadow-2xl text-sm focus:outline-none"
                    />
                </div>
                <div className="mb-4 relative">
                    <label htmlFor="title" className="absolute top-3 left-3 text-md text-gray-400 font-semibold"><TiTags/></label>
                    <input
                        type="text"
                        id="title"
                        placeholder={"Title"}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full px-4 pl-8 py-2.5 text-gray-400 text-sm font-semibold rounded-full bg-white shadow-sky-500 shadow-2xl focus:outline-none"
                    />
                </div>
                <div className="mb-4 relative">
                    <label htmlFor="author" className="absolute top-3 left-3 text-md text-gray-400 font-semibold"><FaPenFancy/></label>
                    <input
                        type="text"
                        id="author"
                        placeholder={"Author"}
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        className="w-full px-4 pl-8 py-2.5 text-sm text-gray-400 font-semibold rounded-full bg-white shadow-sky-500 shadow-2xl focus:outline-none"
                    />
                </div>
                <div className="flex flex-row justify-center items-center px-4 pb-4 space-x-4">
                    <div className="w-1/2">
                        <label htmlFor="pdfFile" className="mb-1 block text-sm font-medium text-gray-700">Upload PDF file</label>
                        <label className="flex w-full cursor-pointer appearance-none items-center justify-center rounded-md border-2 border-dashed border-gray-200 p-6 transition-all hover:border-primary-300">
                            <div className="flex flex-col text-center justify-center items-center space-y-2">
                                <div className="text-xl hover:scale-105 duration-200 flex justify-center items-center font-medium text-white rounded-full bg-gradient-to-r from-pink-400 via-blue-400 to-pink-300 p-2 h-10 w-10">
                                    <PiFilePdf />
                                </div>
                                <p className="text-sm text-gray-500">{pdfFile ? pdfFile.name : "Click to upload or drag and drop"}</p>
                            </div>
                            <input
                                type="file"
                                id="pdfFile"
                                accept=".pdf"
                                onChange={handlePdfFileChange}
                                required
                                className="sr-only"/>
                        </label>
                    </div>
                    <div className="w-1/2">
                        <label htmlFor="example5" className="mb-1 block text-sm font-medium text-gray-700">Upload Image file</label>
                        <label className="flex w-full cursor-pointer appearance-none items-center justify-center rounded-md border-2 border-dashed border-gray-200 p-6 transition-all hover:border-primary-300">
                            <div className="flex flex-col text-center justify-center items-center space-y-2">
                                <div className="text-xl hover:scale-105 duration-200 flex justify-center items-center font-medium text-white rounded-full bg-gradient-to-r from-pink-400 via-blue-400 to-pink-300 p-2 h-10 w-10">
                                    <LuImagePlus />
                                </div>
                                <p className="text-sm text-gray-500">{imageFile ? imageFile.name : "Click to upload or drag and drop"}</p>
                            </div>
                            <input
                                type="file"
                                id="imageFile"
                                accept="image/*"
                                onChange={handleImageFileChange}
                                required
                                className="sr-only"
                            />
                        </label>
                    </div>
                </div>
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="bg-gradient-to-r from-pink-400 via-blue-400 to-pink-300 py-3 px-12 rounded-full hover:scale-105 duration-300 text-white font-medium"
                    >
                        {type}
                    </button>
                </div>
            </form>
        </motion.div>
    );
}

export default AddBook;
