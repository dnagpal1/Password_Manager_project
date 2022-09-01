import React, { Component } from "react";
import { connect } from "react-redux";
import TotalsDisplay from "../components/TotalsDisplay.jsx";
import PasswordsContainer from "../containers/PasswordsContainer";
const mapStateToProps = (state) => ({
  totalAccounts: state.accounts.totalAccounts,
  accountList: state.accounts.accountList,
});

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log("accountList", this.props.accountList);
    return (
      <div className="container">
        <div className="outerBox">
          <h1 id="header"></h1>
          <TotalsDisplay totalAccounts={this.props.totalAccounts} />
          <PasswordsContainer />
        </div>
      </div>
    );
  }
}
export default connect(mapStateToProps, null)(MainContainer);
