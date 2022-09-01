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
  newWebsite: state.accounts.newWebsite,
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
});

class PasswordContainer extends Component {
  constructor(props) {
    super(props);
  }
  handleclick = (value) => () => {
    console.log(value);
  };
  fetchAccounts() {
    fetch("/pwd/")
      .then((res) => res.json())
      .then((accounts) => {
        this.props.loadAccounts(accounts);
      });
  }
  postAccount(newAccount) {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        website: "www.nba.com",
        username: "Lebron James",
        password: "basketball",
      }),
    };
    fetch("/pwd/post", requestOptions)
      .then((response) => response.json())
      .then((account) => console.log(account));
  }
  componentDidMount() {
    this.fetchAccounts();
  }
  // componentDidUpdate() {
  //   this.fetchAccounts();
  // }
  render() {
    // console.log(this.props);
    return (
      <div className="innerbox">
        <AccountCreator
          // createAccount={this.props.createAccount}
          postAccount={this.postAccount}
          newWebsite={this.props.newWebsite}
          newUsername={this.props.newUsername}
          newPassword={this.props.newPassword}
        />
        <PasswordDisplay loadAccounts={this.props.accountList} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PasswordContainer);
