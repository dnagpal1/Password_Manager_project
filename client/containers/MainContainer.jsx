import React, { Component } from "react";
import { connect } from "react-redux";
import TotalsDisplay from "../components/TotalsDisplay.jsx";
// import MarketContainer from '../containers/MarketsContainer.jsx';
const mapStateToProps = (state) => ({
  totalAccounts: state.accounts.totalAccounts,
  accountList: state.accounts.accountList,
  xyz: console.log(state),
});

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    fetch("/pwd/")
      .then((res) => res.json())
      .then((accounts) => {
        accounts.forEach((el) => {
          this.props.accountList.push(el);
        });
      });
  }
  render() {
    console.log("accountList", this.props.accountList);
    return (
      <div className="container">
        <div className="outerBox">
          <h1 id="header"></h1>
          <div>{this.props.accountList}</div>
          <TotalsDisplay totalAccounts={this.props.totalAccounts} />
          {/* <MarketContainer /> */}
        </div>
      </div>
    );
  }
}
export default connect(mapStateToProps, null)(MainContainer);
