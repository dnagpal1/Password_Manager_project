import React from "react";

const Account = ({ accountId, website, username, password, deleteAccount }) => {
  const handleDelete = () => {
    deleteAccount(website, username, password);
  };
  return (
    <div className="marketBox">
      <p>
        <label htmlFor="marketId">Website: </label>
        {/* <span id="marketId">{props.website}</span> */}
        <input type="text" defaultValue={website} />
      </p>
      <p>
        <label htmlFor="marketId">Username: </label>
        {/* <span id="marketId">{props.username}</span> */}
        <input type="text" defaultValue={username} />
      </p>
      <p>
        <label htmlFor="Cards">Password: </label>
        {/* <span id="cards">{props.password}</span> */}
        <input type="text" defaultValue={password} />
      </p>
      <div>
        <button
        //   onClick={() => {
        //     props.addCard(props.marketID);
        //   }}
        >
          Change
        </button>
        <button onClick={handleDelete}>Delete Account</button>
      </div>
    </div>
  );
};

export default Account;
