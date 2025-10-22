import React from "react";
import childeducation from "../assets/childeducation.jpg";
import { ImCheckboxChecked } from "react-icons/im";

const ChildEducation = () => {
  return (
    <div className="flex flex-col items-center gap-5 lg:gap-10 md:flex-row bg-base-200 p-4 md:p-6 lg:p-10">
      <div className="flex-1">
        <img src={childeducation} alt="" className="rounded-2xl md:h-[560px] lg:h-auto" />
      </div>
      <div className="flex-1">
        <h2 className="text-3xl capitalize font-semibold mb-5 lg:text-4xl">Children Education reimagined</h2>
        <div className="flex gap-2 mb-5">
          <ImCheckboxChecked size={30} className="text-orangeColor" />
          <p>
            Children Education is depends on the children home and outdore activities. Children brain comes from
            imagination.
          </p>
        </div>
        <div className="flex gap-2 mb-5">
          <ImCheckboxChecked size={30} className="text-orangeColor" />
          <p>
            Children Education is depends on the children home and outdore activities. Children brain comes from
            imagination.
          </p>
        </div>
        <div className="flex gap-2 mb-5">
          <ImCheckboxChecked size={30} className="text-orangeColor" />
          <p>
            Children Education is depends on the children home and outdore activities. Children brain comes from
            imagination.
          </p>
        </div>
        <div className="flex gap-2 mb-5">
          <ImCheckboxChecked size={30} className="text-orangeColor" />
          <p>
            Children Education is depends on the children home and outdore activities. Children brain comes from
            imagination.
          </p>
        </div>
        <div className="flex gap-2 mb-5">
          <ImCheckboxChecked size={30} className="text-orangeColor" />
          <p>
            Children Education is depends on the children home and outdore activities. Children brain comes from
            imagination.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChildEducation;
