import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import AppliedJobsSection from "../Applied Jobs Section/AppliedJobsSection";

const AppliedJobs = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [showRemoteJobs, setShowRemoteJobs] = useState(false);
  const [showOnsiteJobs, setShowOnsiteJobs] = useState(false);

  const storedJobsString = localStorage.getItem("applied-jobs");

  const storedJobs = JSON.parse(storedJobsString);

  const jobs = useLoaderData();

  useEffect(() => {
    const commonJobs = storedJobs
      ? jobs.filter((job) => job.id && storedJobs.includes(job.id))
      : [];

    if (commonJobs.length > 0) {
      setAppliedJobs(commonJobs);
    }
  }, []);

  const RemoteJobs = () => {
    let Remote = appliedJobs.filter((job) => job.type == "Remote");
    return Remote;
  };

  const OnsiteJobs = () => {
    let Onsite = appliedJobs.filter((job) => job.type == "Onsite");
    return Onsite;
  };

  const getRemoteJobs = RemoteJobs();
  // console.log(getRemoteJobs);

  const getOnsiteJobs = OnsiteJobs();
  // console.log(getOnsiteJobs);

  const handleRemoteJobsClick = () => {
    setShowRemoteJobs(true);
    setShowOnsiteJobs(false);
  };

  const handleOnsiteJobsClick = () => {
    setShowOnsiteJobs(true);
    setShowRemoteJobs(false);
  };

  return (
    <div>
        <div className="flex-col">
          <div className="block">
            <img src="All Images/banner-applied-jobs.png" alt="" />
          </div>
        </div>

      <div className="mt-10 md:mt-20">
        <div className="dropdown dropdown-left dropdown-end">
          <label tabIndex={0} className="btn m-1">
            Filter By
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a onClick={handleRemoteJobsClick}>Remote Jobs</a>
            </li>
            <li>
              <a onClick={handleOnsiteJobsClick}>On-site Jobs</a>
            </li>
          </ul>
        </div>
      </div>

      <div className={showRemoteJobs || showOnsiteJobs ? "hidden" : ""}>
        {appliedJobs.map((job) => (
          <AppliedJobsSection key={job.id} job={job}></AppliedJobsSection>
        ))}
      </div>

      <div className={showRemoteJobs ? "" : "hidden"}>
        {getRemoteJobs.map((job) => (
          <AppliedJobsSection key={job.id} job={job}></AppliedJobsSection>
        ))}
      </div>

      <div className={showOnsiteJobs ? "" : "hidden"}>
        {getOnsiteJobs.map((job) => (
          <AppliedJobsSection key={job.id} job={job}></AppliedJobsSection>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
