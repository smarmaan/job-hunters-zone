import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import Statistics from "./components/Statistics/Statistics";
import AppliedJobs from "./components/AppliedJobs/AppliedJobs";
import Blog from "./components/Blog/Blog";
import Homepage from "./components/Home Page/Homepage";
import JobDetails from "./components/Job Details/JobDetails";
import ErrorPage from "./components/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Homepage /> },

      {
        path: "statistics",
        element: <Statistics />,
      },
      {
        path: "applied-jobs",
        element: <AppliedJobs />,
        loader: () => fetch(`/Json/FeaturedJobs.json`),
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "job-details/:id",
        element: <JobDetails></JobDetails>,
        loader: () => fetch(`/Json/FeaturedJobDetails.json`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}></RouterProvider>
);
