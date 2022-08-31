import React from "react";
//displays
const TotalsDisplay = (props) => (
  <div className="innerbox" id="totals">
    <label htmlFor="totalAccounts">Total Accounts: </label>
    <span id="totalAccounts">{props.totalAccounts}</span>
  </div>
);
export default TotalsDisplay;
