import React, {useState} from "react";
import {LuBadgePlus, LuFolderSearch, LuSettings2} from "react-icons/lu";

import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import AddBook from "./components/book_manager/AddBook.jsx";
import Message from "./components/information/Message.jsx";
import SearchResult from "./components/search/SearchResult.jsx";
import FilterSearch from "./components/search/FilterSearch.jsx";
import Footer from "./components/splash/Footer.jsx";
import bg from "./assets/bg.svg"
import cover from "./assets/cover.jpeg"
import Navbar from "./components/splash/Navbar.jsx";
import book from "./assets/book.gif"



export default function App() {
    const Books = [
        { id: 1, title: "book 1", category:"category1", author: "Author 1" ,pdf:"./TP02.pdf" ,cover:cover},
        { id: 2, title: "book 2", category:"category2", author: "Author 2" ,pdf:"./TP02.pdf" ,cover:cover},
        { id: 3, title: "book 3", category: "category3", author: "Author 3" ,pdf:"./TP02.pdf" ,cover:cover},
        { id: 4, title: "book 4", category: "category1", author: "Author 4" ,pdf:"./TP02.pdf" ,cover:cover},
        { id: 5, title: "book 5", category: "category2", author: "Author 5" ,pdf:"./TP02.pdf" ,cover:cover},
        { id: 6, title: "book 6", category: "category3", author: "Author 6" ,pdf:"./TP02.pdf" ,cover:cover},
        { id: 7, title: "book 7", category: "category1", author: "Author 7" ,pdf:"./TP02.pdf" ,cover:cover},
        { id: 8, title: "book 8", category: "category2", author: "Author 8" ,pdf:"./TP02.pdf" ,cover:cover},
        { id: 9, title: "book 9", category: "category3", author: "Author 9" ,pdf:"./TP02.pdf" ,cover:cover},
        { id: 10, title: "book 10", category: "category1", author: "Author 10" ,pdf:"./TP02.pdf" ,cover:cover},
    ];
    const [search, setSearch] = useState('');
    const [showFilterSearch, setShowFilterSearch] = useState(false);
    const [showSearchResult, setShowSearchResult] = useState(false);
    const [searchResult, setSearchResult] = useState([]);
    const [showAddBook, setShowAddBook] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const handleSearch = (e) => {
        e.preventDefault();
        if (search === ''){
            console.log("search input is empty")
        }else {
            setShowSearchResult(true)
            setSearchResult(Books);
            console.log("Search with:", search);
        }
    };

    const isAuthenticated=(profile)=>{
        if (profile){
            setShowAddBook(true);
        }else {
            setShowMessage(true);
        }
    }
    return (
        <main
            className="fixed h-full bg-sky-100 w-full flex flex-col justify-between p-4 items-center bg-cover bg-center"
            style={{backgroundImage: `url(${bg})`}}
        >
            <Navbar/>
            <div className="z-0 max-w-lg w-full flex flex-col justify-center items-center">
                <div className="flex justify-center items-center rounded-3xl">
                    <img src={book} alt="book" className="px-4 w-full rounded-[50px] shadow-sky-500 shadow-2xl"/>
                </div>
                <form onSubmit={handleSearch} className="w-full mt-4">
                    <div className="my-6 relative">
                        <button type={"submit"}
                                className="absolute top-[12px] left-3 text-xl text-gray-400 font-semibold">
                            <LuFolderSearch/></button>
                        <button type={"button"}
                                className="absolute top-[12px] right-3 text-xl text-gray-400 font-semibold hover:scale-110 duration-300"
                                onClick={() => setShowFilterSearch(true)}><LuSettings2/></button>
                        <input
                            type="text"
                            id="search"
                            placeholder="Search ..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full px-10 py-3  text-gray-400 text-sm font-semibold rounded-full bg-white shadow-sky-500 shadow-2xl focus:outline-none"
                        />
                    </div>
                </form>
            </div>
            <ToastContainer position="bottom-right"/>
            <Footer/>
            {showFilterSearch &&
                <div
                    className="fixed z-[999] backdrop-blur-xs top-0 bg-white bg-opacity-60 bottom-0 left-0 right-0 w-full h-full flex justify-center items-center p-4">
                    <FilterSearch
                        close={() => setShowFilterSearch(false)}
                        searchResult={searchResult}
                        showSearchResult={showSearchResult}
                        setShowSearchResult={setShowSearchResult}
                        search={search}
                        setSearch={setSearch}
                    />
                </div>
            }
            {showSearchResult &&
                <div
                    className="fixed z-[999] backdrop-blur-xs top-0 bg-white bg-opacity-60 bottom-0 left-0 right-0 w-full h-full flex justify-center items-center p-4">
                    <SearchResult close={() => setShowSearchResult(false)} searchText={"The result of «" + search + "»"}
                                  searchResult={searchResult}/>
                </div>
            }
            {showAddBook &&
                <div
                    className="fixed z-[999] backdrop-blur-xs top-0 bg-white bg-opacity-60 bottom-0 left-0 right-0 w-full h-full flex justify-center items-center p-4">
                    <AddBook close={() => setShowAddBook(false)} type={"Add book"}/>
                </div>
            }
            {showMessage &&
                <div
                    className="fixed z-[999] backdrop-blur-xs top-0 bg-white bg-opacity-60 bottom-0 left-0 right-0 w-full h-full flex justify-center items-center p-4">
                    <Message close={() => setShowMessage(false)} message={"this operation required authentication"}/>
                </div>
            }
            <div
                className="absolute animate-bounce cursor-pointer bottom-8 sm:right-8 right-4 text-5xl hover:scale-105 duration-200 font-medium text-white rounded-full bg-gradient-to-r from-pink-400 via-blue-400 to-pink-300 p-2"
                onClick={() => isAuthenticated(true)}>
                <LuBadgePlus/>
            </div>
        </main>
    );
}
