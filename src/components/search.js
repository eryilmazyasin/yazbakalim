import React from "react";
import "../App.css";

const search = (props) => {
  return (
    <div className="col col-md-6 mt-2">
      <h5>{props.title}</h5>
      <form onSubmit={props.formSubmit}>
        <input
          type="text"
          className="form-control custom-input shadow"
          onChange={props.inputHandle}
          value={
            props.time > props.fullTime
              ? "Yeteneksiz, süren doldu."
              : props.value
          }
          disabled={props.time > props.fullTime ? true : false}
        />
      </form>
    </div>
  );
};

export default search;
