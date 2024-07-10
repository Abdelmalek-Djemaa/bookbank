import React, {useState} from 'react';
import logo from '../../assets/logo.svg'
import {FaUserCircle} from "react-icons/fa";
import { motion } from "framer-motion";
import {IoIosLogOut} from "react-icons/io";
import {PiUserCircleLight, PiUserLight} from "react-icons/pi";
import cover from "../../assets/cover.jpeg";
import LogIn from "../authentication/LogIn.jsx";
import Register from "../authentication/Register.jsx";
import Contact from "../information/Contact.jsx";
import About from "../information/About.jsx";
import SearchResult from "../search/SearchResult.jsx";

export default function Navbar() {
    const [showLogIn, setShowLogIn ] = useState(false);
    const [profile, setProfile] = useState();
    const [showProfile, setShowProfile] = useState(false)
    const [showRegister, setShowRegister ] = useState(false);
    const [showContact, setShowContact ] = useState(false);
    const [showAbout, setShowAbout ] = useState(false);
    const [showMyBooks, setShowMyBooks ] = useState(false);

    const myBooks = [
        { id: 1, title: "book 1", category:"category1", author: "Author 1" ,pdf:"./TP02.pdf" ,cover:cover},
        { id: 2, title: "book 2", category:"category2", author: "Author 2" ,pdf:"./TP02.pdf" ,cover:cover},
        { id: 3, title: "book 3", category: "category3", author: "Author 3" ,pdf:"./TP02.pdf" ,cover:cover},
        { id: 4, title: "book 4", category: "category1", author: "Author 4" ,pdf:"./TP02.pdf" ,cover:cover},
        { id: 5, title: "book 5", category: "category2", author: "Author 5" ,pdf:"./TP02.pdf" ,cover:cover},
    ];
    const handleLogout = () => {
        setProfile(null);
    };

    return (
        <div className="flex relative sm:text-sm max-w-xl w-full text-xs font-medium items-center bg-gradient-to-r from-pink-400 via-blue-400 to-pink-300 justify-between shadow-sky-500 shadow-2xl px-4 py-3 rounded-full text-white">
            <div className="flex items-center sm:space-x-4 space-x-2 sm:px-4 px-2">
                <button className="hover:scale-105 duration-300" onClick={()=>setShowAbout(true)}>About</button>
                <button className="hover:scale-105 duration-300" onClick={()=>setShowContact(true)}>Contact</button>
            </div>
            <div className="flex items-center sm:px-10">
                <img src={logo} alt="logo" className="sm:w-32 w-16"/>
            </div>
            {profile?(
                    <div className="flex items-center sm:space-x-4 space-x-2 sm:px-4 px-2">
                        <button className="hover:scale-105 duration-300" onClick={()=>setShowMyBooks(true)}>My books</button>
                        <button className="hover:scale-105 duration-300 text-2xl" onClick={()=>setShowProfile(!showProfile)}><FaUserCircle/></button>
                        {showProfile &&
                            <motion.div
                                className="flex flex-col space-y-3 justify-center items-center absolute top-[55px] right-0 rounded-2xl z-[999] max-w-[200px] w-full h-28 bg-white shadow-sky-500 shadow-2xl"
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
                                exit={{ opacity: 0, y: 50, transition: { duration: 0.5 } }}
                            >
                                <div className="flex flex-row justify-start items-center w-full px-2">
                                    <PiUserCircleLight className="text-xl text-gray-500 "/>
                                    <span className="font-medium text-gray-500 text-xs px-2">{profile.userName}</span>
                                </div>
                                <div className="flex flex-row justify-start items-center w-full px-2">
                                    <PiUserLight className="text-xl text-gray-500"/>
                                    <span className="font-medium text-gray-500 text-xs px-2">{profile.fullName}</span>
                                </div>
                                <div className="flex flex-row justify-start items-center w-full px-2 cursor-pointer"
                                     onClick={handleLogout}>
                                    <IoIosLogOut className="text-xl text-gray-500"/>
                                    <span className="font-medium text-gray-500 text-xs px-2">Logout</span>
                                </div>

                            </motion.div>
                        }
                    </div>
                ):
                (
                    <div className="flex items-center sm:space-x-4 space-x-2 sm:px-4 px-2">
                        <button className="hover:scale-105 duration-300" onClick={()=>setShowRegister(true)}>Register</button>
                        <button className="hover:scale-105 duration-300" onClick={()=>setShowLogIn(true)}>Log in</button>
                    </div>
                )}

            {showLogIn &&
                <div className="fixed z-[999] backdrop-blur-xs top-0 bg-white bg-opacity-40 bottom-0 left-0 right-0 w-full h-full flex justify-center items-center p-4">
                    <LogIn close={()=>setShowLogIn(false)} setProfile={setProfile}/>
                </div>
            }
            {showRegister &&
                <div className="fixed z-[999] backdrop-blur-xs top-0 bg-white bg-opacity-60 bottom-0 left-0 right-0 w-full h-full flex justify-center items-center p-4">
                    <Register close={()=>setShowRegister(false)} setProfile={setProfile}/>
                </div>
            }
            {showContact &&
                <div className="fixed z-[999] backdrop-blur-xs top-0 bg-white bg-opacity-60 bottom-0 left-0 right-0 w-full h-full flex justify-center items-center p-4">
                    <Contact close={()=>setShowContact(false)}/>
                </div>
            }
            {showAbout &&
                <div className="fixed z-[999] backdrop-blur-xs top-0 bg-white bg-opacity-60 bottom-0 left-0 right-0 w-full h-full flex justify-center items-center p-4">
                    <About close={()=>setShowAbout(false)}/>
                </div>
            }
            {showMyBooks &&
                <div className="fixed z-[999] backdrop-blur-xs top-0 bg-white bg-opacity-60 bottom-0 left-0 right-0 w-full h-full flex justify-center items-center p-4">
                    <SearchResult close={()=>setShowMyBooks(false)} searchText={"My Books"} searchResult={myBooks} profile={profile} />
                </div>
            }
        </div>
    );
}
