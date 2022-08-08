import React from "react";
import { FaGithub } from "react-icons/fa";
import { BsCameraVideo } from "react-icons/bs";
import HeroImg from "./assets/hero-2.png";

const Home = () => {
  return (
    <section className="bg-white h-full mt-10">
      <div className="grid max-w-screen-2xl px-4 py-8 mx-auto my-10 lg:gap-8 xl:gap-10 lg:py-16 lg:grid-cols-12 lg:max-w-screen-xl 2xl:max-w-screen-2xl">
        <div className="mr-auto place-self-center lg:col-span-6">
          <h1 className="max-w-3xl mb-4 font-bold text-3xl leading-none md:max-w-full md:text-5xl lg:text-5xl xl:text-6xl text-slate-900">
            High-quality Video Conferencing With
            <br />
            <span className="text-indigo-500 font-extrabold">
              No Strings Attach
            </span>
            .
          </h1>
          <p className="max-w-2xl mb-6 font-light text-md text-slate-900 lg:mb-8 lg:text-lg xl:text-xl">
            Millions of companies of all sizes—from startups to Fortune 500s—use
            Volt. To meet with clients, chat with friends, with no strings
            attached. Volt is a video conferencing platform without the usual
            clutter.
          </p>
          <div className="flex items-center">
            <a
              href="/#"
              className="inline-flex items-center justify-center px-5 py-4 md:px-8 md:py-4  mr-3 text-base font-medium text-center text-white rounded-[5px] bg-slate-900 hover:bg-indigo-500 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 transition-all"
            >
              <BsCameraVideo className="w-5 h-5 ml-2 mr-2" />
              Create a Call
            </a>
            <a
              href="/#"
              className="inline-flex items-center justify-center px-3 py-3 text-base font-medium text-center text-white bg-indigo-300 border-slate-900 rounded-lg hover:bg-indigo-500 hover:text-white transition-all"
            >
              <FaGithub className="w-[2rem] h-[2rem]" />
            </a>
            <span className="ml-3">Visit Repository</span>
          </div>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-6 lg:flex">
          <img src={HeroImg} alt="mockup" />
        </div>
      </div>
    </section>
  );
};

export default Home;
