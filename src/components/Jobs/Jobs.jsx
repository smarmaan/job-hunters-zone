import React, { createContext } from "react";
import { Link } from "react-router-dom";
import JobDetails from "../Job Details/JobDetails";

const Jobs = ({ job }) => {
  const { id, icon, title, CompanyName, type,time, location, salary } = job;

  return (
    <div className="">
      <div className="card w-96 bg-slate-300 shadow-xl  mx-auto">
        <figure>
          <img src={icon} alt="Shoes" />
        </figure>
        <div className="card-body items-center">
          <h2 className="card-title font-bold text-2xl ">{title}</h2>
          <h1 className="text-xl font-medium">{CompanyName}</h1>
          <div className="card-actions justify-center gap-5 my-3">
            <div className="badge badge-outline font-bold">{type}</div>
            <div className="badge badge-outline font-bold">{time}</div>
          </div>

          <div className="flex-row">
            <span className="flex justify-center my-2  font-bold">
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

              {location}
            </span>{" "}
            <span className="flex justify-center my-2 font-bold">
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
              <span className="ml-2">Salary : {salary}</span>
            </span>
          </div>

          <Link to={`/job-details/${id}`}>
            <button className="btn">View Details</button>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default Jobs;
