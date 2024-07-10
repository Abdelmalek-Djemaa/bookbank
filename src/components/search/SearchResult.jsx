import React, {useState} from 'react';
import bg from "../../assets/bg.svg"
import { FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import {IoCloudDownloadOutline, IoOpenOutline} from "react-icons/io5";
import {AiOutlineDelete} from "react-icons/ai";
import {LiaEdit} from "react-icons/lia";
import AddBook from "../book_manager/AddBook.jsx";
import Pdf from "../book_manager/Pdf.jsx";


function SearchResult({ close, searchText, searchResult ,profile}) {
    const [pdfUrl, setPdfUrl] = useState('');
    const [showEdit, setShowEdit] = useState(false);
    const [data, setData] = useState();

    const openPdf = (url) => {
        setPdfUrl(url);
    };

    const closePdf = () => {
        setPdfUrl('');
    };

    const deleteBook = (book) => {
        console.log("Deleted book with id :" , book.id)
    };

    const editBookInformation = (book) => {
        setData(book);
        setShowEdit(true)
        console.log("Edited book with id :" , book.id)
    };
    return (
        <motion.div
            className="max-w-3xl bg-white relative rounded-3xl shadow-sky-500 shadow-2xl w-full flex flex-col justify-center items-center bg-center bg-cover max-h-full h-full"
            style={{ backgroundImage: `url(${bg})` }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
            exit={{ opacity: 0, y: 50, transition: { duration: 0.5 } }}
        >
            <button className="absolute top-2 right-2 text-blue-400 text-xl" onClick={close}><FaTimes /></button>
            <div className="flex flex-col justify-center items-center w-full h-full p-4">
                <div className="font-medium text-xl text-gray-500 pt-2 text-center">
                    {searchText}
                </div>
                <div className="flex flex-wrap h-full justify-center items-center gap-10 mt-4 w-full overflow-auto p-4 rounded-3xl">
                    {searchResult.map(book => (
                        <div key={book.id} className="relative bg-white shadow-sky-500 shadow-xl p-4 rounded-lg max-w-[200px] h-64 w-full hover:scale-105 duration-300 bg-cover"
                             style={{ backgroundImage: `url(${book.cover})` }}>
                            <p className="absolute top-3 left-3 text-xs font-medium text-gray-500 bg-sky-50 rounded-full shadow-lg px-1.5 py-1">{book.title}</p>
                            <p className="absolute bottom-2 left-2 text-[8px] font-medium text-gray-500 bg-sky-50 shadow-lg rounded-full px-1.5 py-1">{book.category}</p>
                            <p className="absolute bottom-2 right-2 text-[8px] font-medium text-gray-500 bg-sky-50 shadow-lg rounded-full px-1.5 py-1">{book.author}</p>
                            <div className="w-full h-full space-y-2 flex flex-col justify-center items-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                                <div className="w-full flex flex-row justify-center space-x-2 items-center">
                                    <button className="text-xl hover:scale-105 duration-200 font-medium text-white rounded-full bg-gradient-to-r from-pink-400 via-blue-400 to-pink-300 p-2" onClick={() => openPdf(book.pdf)}><IoOpenOutline /></button>
                                    <a href={book.pdf} download={book.title+".pdf"} className="text-xl hover:scale-105 duration-200 font-medium text-white rounded-full bg-gradient-to-r from-pink-400 via-blue-400 to-pink-300 p-2"><IoCloudDownloadOutline /></a>
                                </div>
                                {profile &&
                                    <div className="w-full flex flex-row justify-center space-x-2 items-center">
                                        <button className="text-xl hover:scale-105 duration-200 font-medium text-white rounded-full bg-gradient-to-r from-pink-400 via-blue-400 to-pink-300 p-2" onClick={()=>deleteBook(book.id)}><AiOutlineDelete /></button>
                                        <button className="text-xl hover:scale-105 duration-200 font-medium text-white rounded-full bg-gradient-to-r from-pink-400 via-blue-400 to-pink-300 p-2" onClick={() => editBookInformation(book)}><LiaEdit /></button>
                                    </div>
                                }
                            </div>

                        </div>
                    ))}
                </div>
            </div>
            {pdfUrl &&
                <div className="fixed z-[999] backdrop-blur-xs top-0 bg-white bg-opacity-60 bottom-0 left-0 right-0 w-full h-full flex justify-center items-center px-2">
                    <Pdf pdf={pdfUrl} close={closePdf}/>
                </div>
            }
            {showEdit&&
                <div className="fixed z-[999] backdrop-blur-xs top-0 bg-white bg-opacity-60 bottom-0 left-0 right-0 w-full h-full flex justify-center items-center p-4">
                    <AddBook close={()=>setShowEdit(false)} type={"Edit book"} data={data}/>
                </div>
            }
        </motion.div>
    );
}

export default SearchResult;
