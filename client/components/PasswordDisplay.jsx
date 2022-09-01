import React from "react";
import Account from "./Account";
const PasswordDisplay = (props) => {
  const accounts = [];
  for (let i = 0; i < props.loadAccounts.length; i++) {
    accounts.push(
      <Account
        key={props.loadAccounts[i]._id}
        accountId={props.loadAccounts[i]._id}
        website={props.loadAccounts[i].website}
        username={props.loadAccounts[i].username}
        password={props.loadAccounts[i].password}
        deleteAccount={props.deleteAccount}
        newWebsite={props.newWebsite}
        newUsername={props.newUsername}
        newPassword={props.newPassword}
        updateAccount={props.updateAccount}
        newWeb={props.newWeb}
        newPwd={props.newPwd}
        newUsr={props.newUsr}
      />
    );
    // console.log(props.loadAccounts[i].website, "hi");
  }
  return (
    <div className="displayBox">
      <h4>Accounts</h4>
      {accounts}
    </div>
  );
};

export default PasswordDisplay;
