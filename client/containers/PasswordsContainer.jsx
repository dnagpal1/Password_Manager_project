import React, { Component } from "react";
import { connect } from "react-redux";
// import actions from action creators file
import * as actions from "../actions/actions";
// import child components...
import PasswordDisplay from "../components/PasswordDisplay";
import AccountCreator from "../components/AccountCreator";
const axios = require("axios");
const mapStateToProps = (state) => ({
  accountList: state.accounts.accountList,
  newWeb: state.accounts.newWeb,
  newPwd: state.accounts.newPwd,
  newUsr: state.accounts.newUsr,
});

const mapDispatchToProps = (dispatch) => ({
  loadAccounts: (currentAccounts) => {
    dispatch(actions.loadAccountsActionCreator(currentAccounts));
  },
  createAccount: (newAccount) => {
    dispatch(actions.createAccountActionCreator(newAccount));
  },
  newWebsite: (newWebsite) => {
    dispatch(actions.newWebsiteActionCreator(newWebsite));
  },
  newUsername: (newUsername) => {
    dispatch(actions.newUsernameActionCreator(newUsername));
  },
  newPassword: (newPassword) => {
    dispatch(actions.newPasswordActionCreator(newPassword));
  },
});

class PasswordContainer extends Component {
  constructor(props) {
    super(props);
    this.fetchAccounts = this.fetchAccounts.bind(this);
    this.postAccount = this.postAccount.bind(this);
    this.deleteAccount = this.deleteAccount.bind(this);
  }

  handleclick = (value) => () => {
    console.log(value);
  };
  fetchAccounts() {
    fetch("/pwd/")
      .then((res) => res.json())
      .then((accounts) => {
        // console.log("fetching accounts");
        this.props.loadAccounts(accounts);
      });
  }
  postAccount(newAccount) {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newAccount),
    };
    fetch("/pwd/post", requestOptions)
      .then((response) => response.json())
      .then(this.fetchAccounts);
  }
  deleteAccount(website, username, password) {
    fetch(
      `/pwd/?website=${website}&username=${username}&password=${password}`,
      {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          console.log("HTTP request successful");
        } else {
          console.log("HTTP request unsuccessful");
        }
        return res;
      })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .then(this.fetchAccounts)
      .catch((error) => console.log(error));
  }
  componentDidMount() {
    this.fetchAccounts();
  }

  render() {
    // console.log(this.props);
    return (
      <div className="innerbox">
        <AccountCreator
          postAccount={this.postAccount}
          fetchAccounts={this.fetchAccounts}
          {...this.props}
        />
        <PasswordDisplay
          loadAccounts={this.props.accountList}
          deleteAccount={this.deleteAccount}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PasswordContainer);
