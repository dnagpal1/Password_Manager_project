import React from "react";

const AccountCreator = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.postAccount();
    // // props.createAccount({
    // //   website: document.querySelector("#website-input").value,
    // //   username: document.querySelector("#username-input").value,
    // //   password: document.querySelector("#pwd-input").value,
    // // });
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
            onChange={(e) => props.newWebsite(e.target.value)}
          />
          <input id="username-input" type="text" placeholder="Username" />
          <input id="pwd-input" type="text" placeholder="Password" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default AccountCreator;
