import React, { useEffect, useState } from "react";
import Jobs from "../Jobs/Jobs";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);

  const [showAll, setShowAll] = useState(false);

  const handleShowAll = () => {
    setShowAll(true);
  };
  const hideShowAll = () => {
    setShowAll(false);
  };

  useEffect(() => {
    const loadJobs = async () => {
      const res = await fetch(`Json/FeaturedJobs.json`);

      const data = await res.json();

      setJobs(data);
    };
    loadJobs();
  }, []);






  // console.log(jobs);
  return (
    <div className="mt-20">
      <h1 className="text-2xl md:text-4xl font-bold mb-10 bg-slate-300 py-3 rounded-xl mx-auto">
        Featured Jobs
      </h1>
      <p className="mb-8">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>{" "}
      <div className="m-20 grid md:grid-cols-2 justify-center gap-20">
        {" "}
        {jobs.slice(0, showAll ? jobs.length : 4).map((job) => (
          <Jobs key={job.id} job={job}></Jobs>
        ))}
      </div>
      {/* 

      <button onClick={handleShowAll} className="btn mb-10">
        See All Jobs
      </button>

*/}
      {/* 



 */}
      <div className="flex justify-center gap-4">
        {!showAll && (
          <span style={{ display: "inline-block" }} onClick={handleShowAll}>
            <button className="btn mb-10">Show All Jobs</button>
          </span>
        )}

        {showAll && (
          <span style={{ display: "inline-block" }} onClick={hideShowAll}>
            <button className="btn mb-10">Show less Jobs</button>
          </span>
        )}
      </div>
    </div>
  );
};

export default FeaturedJobs;
