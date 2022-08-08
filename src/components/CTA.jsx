import React from "react";

const CTA = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-gray-700 sm:text-4xl dark:text-white">
          Join us and get the update <br /> from anywhere
        </h2>

        <div className="mt-6 sm:-mx-2">
          <div className="inline-flex w-full sm:w-auto sm:mx-2">
            <a
              href="/#"
              className="inline-flex items-center justify-center w-full px-5 py-2 text-white bg-indigo-500 rounded-md hover:bg-indigo-400 focus:ring focus:ring-blue-300 focus:ring-opacity-80 transition-all"
            >
              Back to Home
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
