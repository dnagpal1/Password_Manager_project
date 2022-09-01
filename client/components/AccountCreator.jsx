import React from "react";

const AccountCreator = ({
  newWeb,
  newPwd,
  newUsr,
  postAccount,
  newWebsite,
  newUsername,
  newPassword,
  fetchAccounts,
}) => {
  const handleSubmit = (e) => {
    // console.log(fetchAccount);
    e.preventDefault();
    postAccount({
      website: newWeb,
      username: newUsr,
      password: newPwd,
    });
  };
  return (
    <div className="createBox">
      <h4>Create New Account</h4>
      <div className="createMarket">
        <form className="input-form" onSubmit={handleSubmit}>
          <input
            id="website-input"
            type="text"
            placeholder="Website"
            onChange={(e) => newWebsite(e.target.value)}
          />
          <input
            id="username-input"
            type="text"
            placeholder="Username"
            onChange={(e) => newUsername(e.target.value)}
          />
          <input
            id="pwd-input"
            type="text"
            placeholder="Password"
            onChange={(e) => newPassword(e.target.value)}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default AccountCreator;
