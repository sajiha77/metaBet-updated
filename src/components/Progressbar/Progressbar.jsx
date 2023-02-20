import React, { useState } from "react";
import ProgressNavigation from "./ProgressNavigation";
import "./Progress.css";
function Progressbar() {
  const labelArray = [
    "Step 0",
    "Step 1",
    "Step 2",
    "Step 3",
    "Step 4",
    "Step 5",
    "Step 6",
    "Step 7",
    "Step 8",
    "Step 9",
  ];

  const [currentStep, updateCurrentStep] = useState(1);
  function updateStep(step) {
    updateCurrentStep(step);
  }
  const [currentStep1, updateCurrentStep1] = useState(1);
  function updateStep1(step) {
    updateCurrentStep1(step);
  }
  const [progress, setProgress] = useState(0);

  // const handleChange = (event) => {
  //   setProgress(event.target.value);
  // };
  // const handleMouseDown = (event) => {
  //   document.addEventListener("mousemove", handleMouseMove);
  // };
  // const handleMouseUp = (event) => {
  //   document.removeEventListener("mousemove", handleMouseMove);
  // };
  // const handleMouseMove = (event) => {
  //   setProgress(event.clientX);
  // };

  return (
    // <>
    //   {" "}
    //   <div className="progress-bar" style={{ width: `${progress}%` }} />
    //   <div
    //     className="handle"
    //     style={{ left: `${progress}%` }}
    //     onMouseDown={handleMouseDown}
    //     onMouseUp={handleMouseUp}
    //   />
    // </>

    <div className="progress">
      <ProgressNavigation
        labelArray={labelArray}
        currentStep={currentStep}
        currentStep1={currentStep1}
        updateStep={updateStep}
        updateStep1={updateStep1}
      ></ProgressNavigation>
      {/* <span style={{ color: "#6E8799", paddingLeft: "35px" }}>
        {currentStep}/20
      </span> */}

      {/* <p> </p> */}

      {/* <button
        className="primaryButton"
        disabled={currentStep === 1}
        onClick={() => updateStep(currentStep - 1)}
      >
        Previous Step
      </button>
      <button
        className="primaryButton"
        disabled={currentStep === labelArray.length}
        onClick={() => updateStep(currentStep + 1)}
      >
        Next Step
      </button> */}
    </div>
  );
}

export default Progressbar;
