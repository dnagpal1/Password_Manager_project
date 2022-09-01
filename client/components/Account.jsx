import React from "react";

const Account = (props) => {
  return (
    <div className="marketBox">
      <p>
        <label htmlFor="marketId">Website: </label>
        {/* <span id="marketId">{props.website}</span> */}
        <input type="text" defaultValue={props.website} />
      </p>
      <p>
        <label htmlFor="marketId">Username: </label>
        {/* <span id="marketId">{props.username}</span> */}
        <input type="text" defaultValue={props.username} />
      </p>
      <p>
        <label htmlFor="Cards">Password: </label>
        {/* <span id="cards">{props.password}</span> */}
        <input type="text" defaultValue={props.password} />
      </p>
      <div>
        <button
        //   onClick={() => {
        //     props.addCard(props.marketID);
        //   }}
        >
          Change
        </button>
        <button
          onClick={() => {
            console.log("delete");
          }}
        >
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default Account;
