import React from "react";

const Stats = () => {
  return (
    <section className="bg-white">
      <div className="max-w-screen-xl px-4 py-12 mx-auto md:py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Trusted by Individuals and Companies
          </h2>

          <p className="mt-4 text-slate-500 sm:text-xl">
            We are a completely free, open-source, and easy-to-use platform for
            individuals and companies.
          </p>
        </div>

        <div className="mt-8 sm:mt-12">
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="flex flex-col px-4 py-8 text-center border border-slate-100 rounded-lg">
              <dt className="order-last text-lg font-medium text-slate-500">
                Total Users
              </dt>

              <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl text-indigo-500">
                4.8m
              </dd>
            </div>

            <div className="flex flex-col px-4 py-8 text-center border border-slate-100 rounded-lg">
              <dt className="order-last text-lg font-medium text-slate-500">
                Contributors
              </dt>

              <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl text-indigo-500">
                24
              </dd>
            </div>

            <div className="flex flex-col px-4 py-8 text-center border border-slate-100 rounded-lg">
              <dt className="order-last text-lg font-medium text-slate-500">
                Best Upcoming Company in the U.S
              </dt>

              <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl text-indigo-500">
                #3
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Stats;
