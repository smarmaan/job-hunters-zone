import React from "react";
import Header from "../Header/Header";
import JobCategoryList from "../Job Category List/JobCategoryList";
import FeaturedJobs from "../Featured Job List/FeaturedJobs";
import Footer from "../Footer/Footer";

const Homepage = () => {
  return (
    <div className="">
      <Header />
      <JobCategoryList />
      <FeaturedJobs />
    </div>
  );
};

export default Homepage;
