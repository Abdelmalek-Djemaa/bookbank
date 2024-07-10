import React, { useState } from 'react';
import bg from "../../assets/bg.svg"
import { motion } from "framer-motion";
import {FaPenFancy, FaTimes} from "react-icons/fa";
import {LuSettings2} from "react-icons/lu";
import {TiTags} from "react-icons/ti";
import {BiCategory} from "react-icons/bi";
import SearchResult from "./SearchResult.jsx";

function FilterSearch({ close ,searchResult ,showSearchResult ,setShowSearchResult ,search ,setSearch }) {
    const [category, setCategory] = useState('');
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (category==='' || title==='' || author===''){
            console.log("fields empty")
        } else {
            console.log("Register with:", category, title, author);
            setSearch(category+","+title+","+author)
            close();
            setShowSearchResult(true);
        }
    };

    return (
        <motion.div
            className="max-w-sm bg-white relative rounded-3xl p-4 shadow-sky-500 shadow-2xl w-full flex flex-col justify-center items-center bg-center bg-cover"
            style={{backgroundImage: `url(${bg})`}}
            initial={{opacity: 0, y: 50}}
            animate={{opacity: 1, y: 0, transition: {duration: 0.5}}}
            exit={{opacity: 0, y: 50, transition: {duration: 0.5}}}
        >
            <button className="absolute top-2 right-2 text-blue-400 text-xl" onClick={close}><FaTimes/></button>
            <h2 className="text-4xl mt-2 text-white p-2  font-semibold mb-2 bg-gradient-to-r from-pink-400 via-blue-400 rounded-full">
                <LuSettings2/></h2>
            <form onSubmit={handleSubmit} className="w-full max-w-md mt-2">
                <div className="mb-4 relative">
                    <label htmlFor="" className="absolute top-2.5 left-3 text-md text-gray-400 font-semibold"><BiCategory /></label>
                    <input
                        type="text"
                        id=""
                        placeholder="Category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full px-4 pl-8 py-2 text-sm  text-gray-400 font-medium rounded-full bg-white shadow-sky-500 shadow-2xl focus:outline-none"
                    />
                </div>
                <div className="mb-4 relative">
                    <label htmlFor="" className="absolute top-2.5 left-3 text-md text-gray-400 font-semibold"><TiTags/></label>
                    <input
                        type="text"
                        id=""
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full px-4 pl-8 py-2 text-sm  text-gray-400 font-medium rounded-full bg-white shadow-sky-500 shadow-2xl focus:outline-none"
                    />
                </div>
                <div className="mb-4 relative">
                    <label htmlFor=""
                           className="absolute top-2.5 left-3 text-sm text-gray-400 font-semibold"><FaPenFancy/></label>
                    <input
                        type="text"
                        id=""
                        placeholder="Author"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        className="w-full px-4 pl-8 py-2 text-sm  text-gray-400 font-medium rounded-full bg-white shadow-sky-500 shadow-2xl focus:outline-none"
                    />
                </div>
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="bg-gradient-to-r from-pink-400 via-blue-400 py-2 px-8 rounded-full hover:scale-105 duration-300 text-white font-semibold"
                    >
                        ok
                    </button>
                </div>
            </form>
            {showSearchResult &&
                <div className="fixed z-[999] backdrop-blur-xs top-0 bg-white bg-opacity-60 bottom-0 left-0 right-0 w-full h-full flex justify-center items-center p-4">
                    <SearchResult close={()=>setShowSearchResult(false)} searchText={"The result of «"+search+"»"} searchResult={searchResult} />
                </div>
            }
        </motion.div>
    );
}

export default FilterSearch;
