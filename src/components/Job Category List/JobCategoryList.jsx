import React, { useEffect, useState } from "react";
import Category from "../Category/Category";

const JobCategoryList = () => {
  const [jobCategories, setJobCategories] = useState([]);

  useEffect(() => {
    fetch(`Json/CategoryList.json`)
      .then((res) => res.json())
      .then((data) => setJobCategories(data));
  }, []);



  // console.log(jobCategories);
  return (
    <div>
      <h1 className="text-2xl md:text-4xl font-bold mb-10 bg-slate-300 py-3 rounded-xl mx-auto">
        Job Category List
      </h1>
      <p className="mb-8">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>

      {jobCategories.map((category) => (
        <Category key={category.id} category={category} />
      ))}

    </div>
  );
};

export default JobCategoryList;
