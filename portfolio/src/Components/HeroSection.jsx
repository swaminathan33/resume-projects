import React, { useEffect, useRef } from "react";
import Navbar from "./Navbar";
import { SiInstagram } from "react-icons/si";
import { Tilt } from "@jdion/tilt-react";
import Avatar from "../Assets/avatar.png";
import Hacker from "../Assets/hacker.png";
import { ParticlesComponent } from "./ParticlesComponent";
import Typed from "typed.js";
import links from "./constants/nav";
import { Link } from "react-scroll";
import { useGlobalStandardContext } from "./contexts/StandardContext";
import { social_links } from "./constants/nav";

const HeroSection = () => {
  const el = useRef(null);
  let { navShow, setNavShow } = useGlobalStandardContext();

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Front End Development", "Reactjs Development"],
      typeSpeed: 70,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div id="hero">
      <ParticlesComponent />
      {/* <Navbar /> */}
      {navShow ? (
        <div className="block sm:hidden p-10 bg-indigo-950 absolute top-15 right-0 text-white h-screen z-10 w-4/6">
          {links.map((i) => {
            return (
              <li className="list-none p-2 font-semibold py-4 hover:border-b-4 hover:border-blue-700 border-transparent">
                <Link
                  activeClass="active"
                  to={i.id}
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={400}
                >
                  {i.name}
                </Link>
              </li>
            );
          })}
        </div>
      ) : (
        ""
      )}
      {/* <Navbar /> */}
      <div className="flex flex-col sm:flex-row sm:px-40 justify-around  h-screen items-center z-40">
        <div className="text flex flex-col gap-5 w-full px-2 sm:px-0">
          <div className="text-4xl sm:text-5xl font-bold text-blue-950">
            Hi There,
          </div>
          <div className="text-4xl sm:text-5xl font-bold text-blue-950">
            I'm Swami <span className="text-orange-500">Nathan</span>
          </div>
          <div className="text-xl sm:text-2xl font-bold text-blue-950">
            <span>I am Into </span>
            <span className="text-red-500" ref={el}></span>
          </div>
          <div>
            <span>
              <button className="bg-blue-700 shadow-lg shadow-blue-400 text-white p-2 rounded-full px-5 font-medium">
                About Me
              </button>
            </span>
          </div>
          <div className="links">
            <ul className="flex gap-4">
              {social_links.map((i) => {
                return (
                  <a href={i.url} target="_blank">
                    <li className="bg-blue-950 p-3 rounded-full">
                      <i.icon color="lightblue" fontSize={20} />
                    </li>
                  </a>
                );
              })}
            </ul>
          </div>
        </div>
        <Tilt>
          <div className="image shadow-2xl bg-yellow-400 w-80 h-80 rounded-full flex items-center justify-center overflow-hidden">
            <div className="mt-10">
              <img src={Hacker} width={280} alt="" />
            </div>
          </div>
        </Tilt>
      </div>
    </div>
  );
};

export default HeroSection;
