import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
  const JobDetailsLoad = useLoaderData();
  // console.log(JobDetailsLoad);

  const { id } = useParams();
  //   console.log(id);

  const findID = JobDetailsLoad.find((job) => job.id == id);
  // console.log(findID);

  const {
    description,
    responsibility,
    requirements,
    experiences,
    salary,
    title,
    phone,
    Email,
    Address,
  } = findID;

  const addJobToDB = (id) => {
    let appliedJobs = [];

    const storedJobs = localStorage.getItem("applied-jobs");
    if (storedJobs) {
      appliedJobs = JSON.parse(storedJobs);

      if (!appliedJobs.includes(id)) {
        appliedJobs.push(id);
      }
    } else {
      appliedJobs.push(id);
    }

    localStorage.setItem("applied-jobs", JSON.stringify(appliedJobs));
  };

  return (
    <div>
      <div className="flex-col">
        <div className="block">
          <img src="/All Images/banner-job-details.png" alt="" />
        </div>
      </div>

      <div className="mt-10 md:mt-20 mb-20 grid grid-cols-1 md:grid-cols-2 gap-11 items-center justify-end">
        <div>
          <h1 className="text-lg text-start mb-10">
            <span className="font-bold">Job Description : </span> <br />{" "}
            {description}{" "}
          </h1>
          <h1 className="text-lg text-start mb-10">
            <span className="font-bold">Job Responsibility : </span>
            <br /> {responsibility}{" "}
          </h1>
          <h1 className="text-lg text-start mb-10">
            <span className="font-bold">Educational Requirements : </span>{" "}
            <br /> {requirements}{" "}
          </h1>
          <h1 className="text-lg text-start mb-10">
            <span className="font-bold">Experiences : </span> <br />{" "}
            {experiences}{" "}
          </h1>
        </div>

        <div>
          <div className="card w-96 bg-slate-300 shadow-xl mx-auto text-left">
            <div className="card-body flex flex-col">
              <h1 className="text-xl font-bold"> Job Details</h1>
              <hr />
              <h1 className="text-lg font-medium flex gap-3 justify-center items-center">
                {" "}
                <span>
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
                Salary : {salary}{" "}
              </h1>
              <h1 className="text-lg font-medium flex gap-3 justify-center items-center">
                {" "}
                <span>
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
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                    />
                  </svg>
                </span>{" "}
                Job Title : {title}{" "}
              </h1>

              <h1 className="text-xl font-bold">Contact Information </h1>
              <hr />

              <h1 className="text-lg font-medium flex gap-3 justify-center items-center">
                {" "}
                <span>
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
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </span>{" "}
                Phone : {phone}{" "}
              </h1>
              <h1 className="text-lg font-medium flex gap-3 justify-center items-center">
                <span>
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
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </span>{" "}
                Email : {Email}{" "}
              </h1>
              <h1 className="text-lg font-medium flex gap-3 justify-center items-center">
                {" "}
                <span>
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
                Address : {Address}{" "}
              </h1>

              <div className="card-actions items-center justify-center">
                <button onClick={() => addJobToDB(id)} className="btn mt-9">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
