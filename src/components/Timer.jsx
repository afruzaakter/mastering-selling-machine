// import { useState } from "react";

const Timer = () => {
  return (
    <div>
      <div className="grid grid-flow-col gap-2 text-center auto-cols-max mb-6 mt-6  ">
        <div className="flex flex-col p-2 pr-4 pl-4 bg-blue-800  rounded-box text-neutral-content">
          <span className="countdown font-mono text-3xl">
            <span style={{ "--value": 0 }}></span>
          </span>
          days
        </div>
        <div className="flex flex-col p-2 pr-4 pl-3 bg-blue-800  rounded-box text-neutral-content">
          <span className="countdown font-mono text-3xl">
            <span style={{ "--value": 0 }}></span>
          </span>
          hours
        </div>
        <div className="flex flex-col p-2 pr-4 pl-4  bg-blue-800  rounded-box text-neutral-content">
          <span className="countdown font-mono text-3xl">
            <span style={{ "--value": 4 }}></span>
          </span>
          min
        </div>
        <div className="flex flex-col p-2 pr-4 pl-4 bg-blue-800 rounded-box text-neutral-content">
          <span className="countdown font-mono text-3xl">
            <span style={{ "--value": 2 }}></span>
          </span>
          sec
        </div>
      </div>
    </div>
  );
};

export default Timer;
