import React from "react";

import "./Spinner.css";
export default () => (
  <div className="lds-css ng-scope">
    <div style={{ width: "100%", height: "100%" }} className="lds-ripple">
      <div />
      <div />
    </div>
  </div>
);
