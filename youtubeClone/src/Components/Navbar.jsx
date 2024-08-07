import { React, useEffect, useRef, useState } from "react";
import { LuMenu } from "react-icons/lu";
import { BsThreeDotsVertical } from "react-icons/bs";
import logo from "../Assets/yt-logo.png";
import whiteLogo from "../Assets/yt-logo-white.png";
import { FaRegMoon } from "react-icons/fa";
import { IoSunnySharp } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { RiAccountCircleLine } from "react-icons/ri";
import SidebarToggle from "./SidebarToggle";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addVideos } from "../Slices/SearchVideos";
import { FiArrowLeft } from "react-icons/fi";
import { motion } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchWord, setSearchWord] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [navbarToggle, setNavbarToggle] = useState(false);

  const sampleRef = useRef([]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("darkmode", JSON.stringify(!isDarkMode));
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  // localStorage.setItem("darkmode", JSON.stringify(false));

  useEffect(() => {
    const darkmode = JSON.parse(localStorage.getItem("darkmode"));
    if (darkmode == isDarkMode) {
      return;
    } else {
      toggleDarkMode();
    }
  }, []);

  const dispatch = useDispatch((state) => state.searchvideo.addVideos);

  const navigate = useNavigate();

  const getSearchVideos = async (searchWord) => {
    const res = await axios.get("https://youtube-v31.p.rapidapi.com/search", {
      params: {
        q: searchWord,
        part: "snippet,id",
        regionCode: "US",
        maxResults: "100",
        order: "relevance",
      },
      headers: {
        "x-rapidapi-key": "4d08e6d40bmsh66c49b4bf545d8bp177b08jsn3047ad857da0",
        "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
      },
    });
    sampleRef.current = res.data.items;
    // console.log(sampleRef.current);
    return sampleRef.current;
  };

  // useEffect(() => {}, [finalWord]);

  const handleSearch = async (searchWord) => {
    const data = await getSearchVideos(searchWord);
    dispatch(addVideos(data));
    navigate(`/search`);
  };

  return (
    <div className="flex dark:bg-black justify-between items-center pt-4 px-5 fixed top-0 bg-white right-0 left-0 pb-2">
      {menuOpen ? (
        <SidebarToggle menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      ) : (
        ""
      )}
      <div className="flex justify-between items-center gap-4">
        <div
          className="hover:border-[1px] p-2 hover:bg-gray-200 dark:hover:bg-gray-800 border-none rounded-full max-sm:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <LuMenu fontSize={"22"} />
        </div>
        <div>
          <Link to={"/"}>
            <img
              src={logo}
              className="dark:hidden block"
              height={"90"}
              width={"90"}
              alt=""
            />
            <img
              src={whiteLogo}
              className="dark:block hidden"
              height={"90"}
              width={"90"}
              alt=""
            />
          </Link>
        </div>
      </div>

      <div className="flex justify-between items-center gap-6 max-sm:hidden">
        <div className="searchbar  border-[1px] border-slate-300 rounded-full px-4 p-2 flex justify-center items-center">
          <motion.input
            initial={{
              width: "25rem",
            }}
            whileFocus={{
              width: "35rem",
            }}
            type="text"
            className="w-[35rem] outline-none"
            placeholder="Search"
            onChange={(e) => setSearchWord(e.target.value)}
          />
          <div ref={sampleRef}>
            <CiSearch
              fontSize={"25px"}
              className="cursor-pointer"
              onClick={() => handleSearch(searchWord)}
            />
          </div>
        </div>
        <motion.div
          animate={{ rotate: 360 }}
          className="mic border-[1px] p-2 rounded-full bg-gray-100 hover:bg-gray-300 dark:bg-black"
        >
          {isDarkMode ? (
            <IoSunnySharp fontSize={"20px"} onClick={toggleDarkMode} />
          ) : (
            <FaRegMoon fontSize={"20px"} onClick={toggleDarkMode} />
          )}
        </motion.div>
      </div>

      <CiSearch
        fontSize={"25px"}
        className="hidden cursor-pointer max-sm:flex"
        onClick={() => setNavbarToggle(true)}
      />

      {navbarToggle ? (
        <div className="hidden navbar@smallscreen dark:bg-black bg-white py-2 shadow-lg px-2 absolute top-0 right-0 max-sm:flex justify-between w-full items-center ">
          <div>
            <FiArrowLeft
              fontSize={"23px"}
              className="cursor-pointer"
              onClick={() => setNavbarToggle(false)}
            />
          </div>
          {/* <div className="flex justify-between items-center gap-6"> */}
          <div className="searchbar  border-[1px] border-slate-300 rounded-full px-4 py-2 flex justify-center items-center">
            <motion.input
              initial={{
                width: 0,
              }}
              animate={{
                width: "10rem",
              }}
              type="text"
              className="w-[10rem] text-sm outline-none"
              placeholder="Search"
              onChange={(e) => setSearchWord(e.target.value)}
            />
            <div ref={sampleRef}>
              <CiSearch
                fontSize={"20px"}
                className="cursor-pointer"
                onClick={() => handleSearch(searchWord)}
              />
            </div>
          </div>
          <motion.div
            animate={{ rotate: 360 }}
            className="mic border-[1px] p-2 rounded-full bg-gray-100 hover:bg-gray-300 dark:bg-black"
          >
            {isDarkMode ? (
              <IoSunnySharp fontSize={"20px"} onClick={toggleDarkMode} />
            ) : (
              <FaRegMoon fontSize={"20px"} onClick={toggleDarkMode} />
            )}
          </motion.div>
          {/* </div> */}
        </div>
      ) : (
        ""
      )}

      <div className="flex justify-between items-center gap-4 max-sm:hidden">
        <BsThreeDotsVertical fontSize={"20px"} />
        <div className="signIn border-[1px] rounded-full p-2 px-3 hover:bg-blue-100">
          <button className="text-blue-600 font-medium flex justify-center items-center gap-1">
            <RiAccountCircleLine fontSize={"20px"} />
            <div className="text-sm">Sign in</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
