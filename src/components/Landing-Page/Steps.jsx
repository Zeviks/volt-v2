const Steps = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-slate-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-indigo-500 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="d0d83814-78b6-480f-9a5f-7f637616b267"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#d0d83814-78b6-480f-9a5f-7f637616b267)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative text-5xl text-slate-900">
              It's Super Simple!
            </span>
          </span>{" "}
          <br />
          {/* Second line of Title */}
        </h2>
        <p className="text-base text-slate-700 md:text-lg">
          We have desinged the platform with ease in mind. No account required.
          Just follow the steps below to get started.
        </p>
      </div>
      <div className="relative grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-4 sm:grid-cols-2">
        <div className="absolute inset-0 flex items-center justify-center sm:hidden lg:flex">
          <div className="w-px h-full bg-slate-300 lg:w-full lg:h-px" />
        </div>
        <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
          <div className="flex items-center justify-between mb-2">
            <p className="text-lg font-bold leading-5">Get Started</p>
            <p className="flex items-center justify-center w-6 h-6 font-bold rounded text-deep-purple-accent-400 bg-indigo-200">
              1
            </p>
          </div>
          <p className="text-sm text-slate-900">
            To get started, click the <br />"
            <a href="/#" className="text-indigo-500 hover:text-indigo-400">
              Create a Call
            </a>
            " to be taken to the call dashboard.
          </p>
        </div>
        <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
          <div className="flex items-center justify-between mb-2">
            <p className="text-lg font-bold leading-5">Generate a Code</p>
            <p className="flex items-center justify-center w-6 h-6 font-bold rounded text-deep-purple-accent-400 bg-indigo-200">
              2
            </p>
          </div>
          <p className="text-sm text-slate-900">
            <span className="text-slate-900">When inside the dashboard</span>,
            click the "<span className="text-extrabold">Generate a Code</span>"
            button. To generate your code.
          </p>
        </div>
        <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
          <div className="flex items-center justify-between mb-2">
            <p className="text-lg font-bold leading-5">Make Your First Call!</p>
            <p className="flex items-center justify-center w-6 h-6 font-bold rounded text-deep-purple-accent-400 bg-indigo-200">
              3
            </p>
          </div>
          <p className="text-sm text-slate-900">
            If you already have your recipients code, you can input the code
            into the "make a call" form.
          </p>
        </div>
        <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
          <div className="flex items-center justify-between mb-2">
            <p className="text-lg font-bold leading-5">Recieving a Call</p>
            <p className="flex items-center justify-center w-6 h-6 font-bold rounded text-deep-purple-accent-400 bg-indigo-200">
              4
            </p>
          </div>
          <p className="text-sm text-slate-900">
            If you would like someone to call you, just have them input your
            code to call you.
          </p>
        </div>
      </div>
      <div className="text-center">
        <a
          href="/"
          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white bg-indigo-500 hover:bg-indigo-400 transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default Steps;
