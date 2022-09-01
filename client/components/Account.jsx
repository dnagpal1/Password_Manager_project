import React from "react";

const Account = ({
  accountId,
  website,
  username,
  password,
  deleteAccount,
  newWebsite,
  newUsername,
  newPassword,
  updateAccount,
  newWeb,
  newPwd,
  newUsr,
}) => {
  console.log(accountId);
  const handleDelete = () => {
    deleteAccount(website, username, password);
  };
  const handleChange = () => {
    updateAccount(newWeb, newPwd, newUsr, accountId);
  };
  return (
    <div className="marketBox">
      <p>
        <label htmlFor="marketId">Website: </label>
        {/* <span id="marketId">{props.website}</span> */}
        <input
          type="text"
          defaultValue={website}
          onChange={(e) => newWebsite(e.target.value)}
        />
      </p>
      <p>
        <label htmlFor="marketId">Username: </label>
        {/* <span id="marketId">{props.username}</span> */}
        <input
          type="text"
          defaultValue={username}
          onChange={(e) => newUsername(e.target.value)}
        />
      </p>
      <p>
        <label htmlFor="Cards">Password: </label>
        {/* <span id="cards">{props.password}</span> */}
        <input
          type="text"
          defaultValue={password}
          onChange={(e) => newPassword(e.target.value)}
        />
      </p>
      <div>
        <button onClick={handleChange}>Change</button>
        <button onClick={handleDelete}>Delete Account</button>
      </div>
    </div>
  );
};

export default Account;
