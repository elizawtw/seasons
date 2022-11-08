import React from "react";

const Loader = (props) => {
  return (
    <div className="ui active dimmer">
      <div className="ui text loader">
      {props.message}
      </div>
    </div>
  );
};

Loader.defaultProps = {
message: "Loading..."
} //we can set a default message in case we forget to set a message in the App() of index.js

export default Loader;