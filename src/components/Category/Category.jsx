import React from "react";

const Category = ({ category }) => {
  const { id, icon, title, status } = category;

  return (
    <div className="bg-slate-300 rounded-xl border border-x-2 inline-flex flex-col items-center gap-2 m-6 p-6">
      <img className="w-[40px] h-[40px]  " src={icon} />

      <h1>
        <span className="font-bold">{title}</span>
      </h1>
      <h1>{status}</h1>
    </div>
  );
};

export default Category;
