import React from "react";
import { NavLink, Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="text-xl font-bold text-gray-500 flex gap-2 items-center p-4">
        <NavLink to="/">
          <h2>Navi </h2>
        </NavLink>
        <h2> &gt;</h2>
        <h2> Calculators</h2>
      </div>
      <div className="content"></div>
      <div className="flex flex-row gap-2 flex-wrap m-4 justify-evenly max-w-fit border-2 border-blue-500">
        <div className="1st block max-w-xs p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <Link to={"/emi"} href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Personal Loan EMI
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Calculate your Personal Loan EMIs in seconds
            </p>
          </Link>
        </div>
        <div className="2nd block max-w-xs p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <Link to={"/sip"} href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              SIP Calculator
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Calculate your estimated SIP returns in seconds
            </p>
          </Link>
        </div>
        <div className="3rd">
          <Link
            to={"/sip"}
            href="#"
            className="block max-w-xs p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              SIP Calculator
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Calculate your estimated SIP returns in seconds
            </p>
          </Link>
        </div>
        <div className="4th">
          <Link
            to={"/sip"}
            href="#"
            className="block max-w-xs p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              SIP Calculator
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Calculate your estimated SIP returns in seconds
            </p>
          </Link>
        </div>
        <div className="5th block max-w-xs p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <Link to={"/sip"} href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Home Loan EMI
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Calculate your estimated SIP returns in seconds
            </p>
            <img
              src="https://public-assets.prod.navi-tech.in/navi-website-assests/images/calculators-landing-page/HL.svg"
              alt="img"
            />
          </Link>
        </div>
        <div className="6th">
          <Link
            to={"/sip"}
            href="#"
            className="block max-w-xs p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              SIP Calculator
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Calculate your estimated SIP returns in seconds
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
