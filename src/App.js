import React, { Fragment, useState } from "react";
import Spline from "@splinetool/react-spline";
import SCENE_OBJECT from "./scene.spline";
import { IoMenu, IoLogoGithub } from "react-icons/io5";
import mypic from "./assets/1647252505087.jpg";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Experience, Projects, SocialLinks } from "./data";
import { AnimatePresence, motion } from "framer-motion";


function App() {
  const [isActive, setIsActive] = useState(false);

  function btnClick() {
    window.open(
      "https://drive.google.com/file/d/1Sp1f3RY4ZKVKZMoiyxqeqWJJj6ohkWFE/view?usp=sharing"
    );
  }

  return (
    <>
      <AnimatePresence initial={false}>
        <div className="flex w-screen min-h-screen flex-col items-center justify-center relative bg-primary pb-20">
          {/* Navbar */}
          <nav className="w-full px-10 z-50 fixed inset-x-0 top-2 flex justify-center items-center">
            <div className="w-full md:w-880 bg-navBar p-4 rounded-2xl flex  items-center">
              <p className="text-lg text-slate-200 font-medium">Ajmal Shk.</p>
              <div className="hidden md:flex items-center gap-6 ml-6 flex-1">
                <a
                  href="#home"
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
                >
                  About
                </a>
                <a
                  href="#projects"
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
                >
                  Contact
                </a>
                <a
                  onClick={btnClick}
                  className="ml-auto text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-xl hover:border-gray-200 duration-100 ease-in-out"
                >
                  Download
                </a>
              </div>

              <motion.div
                whileTap={{ scale: 0.5 }}
                className="block md:hidden ml-auto cursor-pointer"
                onClick={() => setIsActive(!isActive)}
              >
                <IoMenu className="text-2xl text-textBase" />
              </motion.div>

              {isActive && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1.1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ delay: "0.1s", type: "spring" }}
                  className="p-4 w-275 bg-navBar rounded-lg fixed top-24 right-16 flex flex-col items-center justify-evenly gap-6 "
                >
                  <a
                    href="#home"
                    className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
                  >
                    Home
                  </a>
                  <a
                    href="#about"
                    className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
                  >
                    About
                  </a>
                  <a
                    href="#projects"
                    className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
                  >
                    Projects
                  </a>
                  <a
                    href="#contact"
                    className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out"
                  >
                    Contact
                  </a>
                  <motion.a
                    whileTap={{ scale: 0.5 }}
                    onClick={btnClick}
                    className=" text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-full hover:border-gray-200 duration-100 ease-in-out"
                  >
                    Download
                  </motion.a>
                </motion.div>
              )}
            </div>
          </nav>
          <div className="relative " id="home">
            {/* <Spline
          scene={"https://my.spline.design/scene-4456b5de437334e00e51914ed8f71c86/"}
        /> */}
            <div className="w-full min-h-screen">
              <Spline className="w-full min-h-full" width={1890} scene={SCENE_OBJECT} />
            </div>
            <div className="absolute bottom-10 w-full justify-center items-center flex">
              <div className="shadow-md p-4 flex items-center justify-center bg-zinc-900 rounded-3xl">
                <p className="text-textBase">Double Press and drag to orbit</p>
              </div>
            </div>
          </div>

          {/* Main Section */}

          <main className="w-[80%] mt-5 ">
            {/* About Section  */}
            <p className="text-4xl text-gray-400 flex items-center justify-center capitalize">
              About Me
            </p>
            <section
              className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 my-8"
              id="about"
            >
              {/* image box */}
              <div className="w-full h-420 flex items-center justify-center">
                <div className="w-275 h-275 bg-blue-500 rounded-full relative">
                  <img
                    className="w-full h-full absolute -right-5 top-5 object-cover rounded-full shadow-lg"
                    src={mypic}
                    alt=""
                  />
                </div>
              </div>
              {/* content Box */}
              <div className="w-full md:px-24 sm:px-2 md:py-4 flex flex-col items-center justify-center">
                <p className="text-lg text-textBase text-center">
                  To succeed in an environment of growth and excellence and earn
                  a job which provides me job satisfaction and self-development
                  and help me achieve personal as well as organization goals. I
                  am very confident that i will be very helpful to your
                  organaisation
                </p>

                <motion.button
                  onClick={btnClick}
                  whileTap={{ scale: 0.8 }}
                  className="w-full md:w-auto relative mt-6 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-500 hover:shadow-lg hover:shadow-teal-500/50 hover:dark:shadow-lg hover:dark:shadow-teal-800/80"
                >
                  <span className="w-full md:w-auto relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-full gorup-hover:bg-opacity-0">
                    Download
                  </span>
                </motion.button>
              </div>
            </section>

            {/* Timline Section */}

            <section className="w-full flex flex-col items-center justify-center">
              <p className="text-4xl text-gray-400 flex items-center justify-center capitalize mb-12">
                Experience
              </p>
              <VerticalTimeline>
                {Experience &&
                  Experience.map((n) => (
                    <VerticalTimelineElement
                      key={n.id}
                      className="vertical-timeline-element--work"
                      contentStyle={{
                        background: "rgb(29,30,37)",
                        color: "#888",
                      }}
                      contentArrowStyle={{
                        borderRight: "7px solid  rgb(29,30,37)",
                      }}
                      date={n.date}
                      iconStyle={{ background: "rgb(29,30,37)", color: "#888" }}
                      icon={n.iconsSrc}
                    >
                      <h3 className="vertical-timeline-element-title">
                        {n.title}
                      </h3>
                      <h4 className="vertical-timeline-element-subtitle">
                        {n.location}
                      </h4>
                      <p>{n.description}</p>
                    </VerticalTimelineElement>
                  ))}
              </VerticalTimeline>
            </section>

            {/* Project Section */}
            <p className="text-4xl text-gray-400 flex items-center justify-center capitalize mt-20">
              Projects
            </p>
            <section
              className="flex flex-wrap items-center justify-evenly my-12 gap4"
              id="projects"
            >
              {Projects &&
                Projects.map((p) => (
                  <div
                    key={p.id}
                    className="m-4 border border-zinc-800 rounded-md p-2 min-w-[350px] md:max-w-[350px] hover:border-zinc-600 hover:border-2 duration-100 ease-in-out"
                  >
                    <p className="text-lg text-textBase font-medium uppercase">
                      {p.name.length > 25
                        ? `${p.name.slice(0, 25)}...`
                        : p.name}
                    </p>
                    <img
                      src={p.imageSrc}
                      alt=""
                      srcset=""
                      className="w-full h-full object-cover rounded-md my-4 "
                    />
                    <div className="flex flex-1 item-center justify-between">
                      <p className="text-lg text-gray-300 ">
                        Technologies
                        <span className="block text-sm text-gray-500">
                          {p.techs}
                        </span>
                      </p>
                      <a href={p.github} className="flex items-center">
                        <motion.div whileTap={{ scale: 0.5 }}>
                          <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />
                        </motion.div>
                      </a>
                    </div>
                  </div>
                ))}
            </section>

            {/* Contact Section  */}
            <section
              id="contact"
              className="flex flex-col items-center justify-center w-full my-24"
            >
              <p className="text-4xl text-gray-400 capitalize mb-6">
                Connect with me
              </p>
              <div className="flex items-center justify-center w-full my-4 flex-wrap gap-4">
                {SocialLinks &&
                  SocialLinks.map((s) => (
                    <motion.a
                      whileTap={{ scale: 0.7 }}
                      id={s.id}
                      href={s.link}
                      className="w-full md:w-auto px-3 md:px-8 py-5 border border-zinc-800 rounded-full hover:borer-zinc-600 hover:border-zinc-400 hover:border-2 duration-100 ease-in-out cursor-pointer flex items-center justify-center gap-3"
                    >
                      {s.iconSrc}
                      <p className="text-lg text-textBase">{s.name}</p>
                    </motion.a>
                  ))}
              </div>
            </section>
          </main>
        </div>
      </AnimatePresence>
    </>
  );
}

export default App;
