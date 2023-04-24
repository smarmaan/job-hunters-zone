import React from "react";
import { Link } from "react-router-dom";

const AppliedJobsSection = ({ job }) => {
  const { id, icon, title, CompanyName, type, time, location, salary } = job;
  return (
    <div className="md:w-[1220px] md:h-[300px] bg-slate-300 rounded-2xl my-16 px-4 flex">
      <img
        src={icon}
        alt=""
        className="md:w-[240px] bg-white p-7 rounded-2xl my-auto"
      />

      <div className="text-left mx-auto my-auto flex flex-grow justify-between items-center">
        <div className="ml-20">
          <h1 className="font-bold text-2xl">{title}</h1>
          <h1 className="font-bold text-xl">{CompanyName}</h1>
          <div className="flex gap-4 my-3">
            <h1 className="badge">{type}</h1>
            <h1 className="badge">{time}</h1>
          </div>
          <div className="flex gap-5 my-3">
            <h1 className="flex font-bold items-center justify-center">
              {" "}
              <span className="mr-2">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </span>{" "}
              {location}{" "}
            </h1>
            <h1 className="flex font-bold items-center justify-center">
              {" "}
              <span className="mr-2">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>{" "}
              {salary}{" "}
            </h1>
          </div>
        </div>

        <div className="md:mx-20">
          <Link to={`/job-details/${id}`}>
            <button className="btn ">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppliedJobsSection;
