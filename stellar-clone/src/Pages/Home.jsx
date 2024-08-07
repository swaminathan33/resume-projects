import React from "react";
import Navbar from "../Components/Navbar";
import FrontBanner from "../Components/FrontBanner";
import ScrollBar from "../Components/ScrollBar";
import { FaRegHeart } from "react-icons/fa";
import { FiLink } from "react-icons/fi";
import { HiMiniCursorArrowRipple } from "react-icons/hi2";
import { IoLockClosedOutline } from "react-icons/io5";
import { BsLayoutTextWindow } from "react-icons/bs";
import { FaRegEyeSlash } from "react-icons/fa";
import { MouseParallax, ScrollParallax } from "react-just-parallax";
import { delay, motion } from "framer-motion";

const Home = () => {
  const boxVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.7,
        beforeChildren: "when",
        staggerChildren: 0.3,
      },
    },
  };

  const listVariant = {
    hidden: {
      y: -10,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const items = [
    {
      text: "Filters",
      icon: <FaRegHeart />,
    },
    {
      text: "Configurable",
      icon: <FiLink />,
    },
    {
      text: "Adaptable",
      icon: <HiMiniCursorArrowRipple />,
    },
    {
      text: "Authorization",
      icon: <IoLockClosedOutline />,
    },
    {
      text: "Management",
      icon: <BsLayoutTextWindow />,
    },
    {
      text: "Building",
      icon: <FaRegEyeSlash />,
    },
  ];
  return (
    // <div className="bg-gradient-to-r from-fuchsia-950 via-fuchsia-500 to-fuchsia-950 py-5 px-24 ">
    <div className="bg-backgroundColor py-5 px-24 max-sm:px-5">
      <Navbar />
      <div className="flex justify-center align-middle text-center">
        <div className="absolute py-56 animate-blob bg-backgroundColor2 w-4/6 h-full blur-3xl rounded-full"></div>
        <FrontBanner />
      </div>

      <div className="absolute py-56 animate-blob bg-gradient-to-t right-5 bg-backgroundColor2 w-4/6 h-5/6 blur-3xl rounded-full"></div>
      <div className="text-center mb-14 font-bold text-4xl text-white relative max-sm:text-3xl">
        Our Clients
      </div>
      <ScrollBar />

      <motion.div
        whileInView={{ opacity: 1 }}
        transition={{
          delay: 0.5,
        }}
        initial={{ opacity: 0 }}
        className="row1 text-textColor relative my-40 mb-60"
      >
        <>
          <p className="mb-2">The Security First Platform</p>
          <h2 className="text-4xl font-bold mb-3 max-sm:text-2xl">
            Simplify your security with <br /> authentication services
          </h2>
          <p className="text-lg mb-3 w-3/6 max-sm:w-5/6">
            Define access roles for the end-users, and extend your authorization
            capabilities to implement dynamic access control.
          </p>
          <div className="buttons flex items-start gap-2 mt-16 max-sm:flex-col">
            <button className="border-2 border-violet mr-8 w-72 text-start rounded-lg pl-2 py-1">
              Simplify Your security
            </button>
            <button className="border-2 border-violet mr-8 w-72 text-start rounded-lg pl-2 py-1">
              Customer Identity
            </button>
            <button className="border-2 border-violet mr-8 w-72 text-start rounded-lg pl-2 py-1">
              Adaptable authentication
            </button>
          </div>
        </>
      </motion.div>

      <div className="absolute py-50 animate-blob bg-gradient-to-t -left-20 bg-backgroundColor2 w-3/6 h-5/6 blur-3xl rounded-full"></div>
      <motion.div
        whileInView={{ opacity: 1 }}
        transition={{
          delay: 0.5,
        }}
        initial={{ opacity: 0 }}
        className="row2 pb-52 relative text-center text-textColor"
      >
        <div className="title text-5xl text-white font-bold max-sm:text-4xl">
          Faster.Smarter.
        </div>
        <div className="text-lg mt-2 mb-10 max-sm:text-sm max-sm:mx-4 max-sm:mb-2">
          There are many variations available, but the majority have suffered
          alteration in some form, <br /> by injected humour, or randomised
          words which don't look even slightly believable.
        </div>
      </motion.div>

      <div>
        <motion.ul
          variants={boxVariants}
          animate="visible"
          initial="hidden"
          className="flex relative justify-center gap-20 flex-wrap"
        >
          {items &&
            items.map((i) => {
              return (
                <motion.li
                  variants={listVariant}
                  className=" w-72 border-2 border-neutral-400 p-2 rounded-2xl"
                >
                  <div className="title text-white flex items-center gap-2">
                    {i.icon} {i.text}
                  </div>
                  <p className="text-textColor text-sm">
                    Login box must find the right balance for the user
                    convenience, privacy and security.
                  </p>
                </motion.li>
              );
            })}
        </motion.ul>
      </div>
    </div>
  );
};

export default Home;
