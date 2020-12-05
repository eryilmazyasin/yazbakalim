import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

const ProgressBarComponent = (props) => {
  return (
    <div className="time col-md-6">
      <div className="d-flex justify-content-between">
        <small>Geçen süre:  {props.time} sn</small>
        <small>Maksimum süre: {props.fullTime} sn</small>
      </div>
      {props.randomArray > 0 ? (
        <ProgressBar animated now={props.time} max={props.fullTime} />
      ) : (
        ""
      )}
    </div>
  );
};

export default ProgressBarComponent;
