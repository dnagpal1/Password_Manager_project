import * as types from "../constants/actionTypes";

const initialState = {
  totalAccounts: 0,
  accountList: [],
  newWebsite: "",
  newUsername: "",
  newPassword: "",
};

const passwordReducer = (state = initialState, action) => {
  let [accountList, totalAccounts, newWebsite, newUsername, newPassword] = [
    [],
    0,
    "",
  ];

  switch (action.type) {
    case types.LOAD_ACCOUNT:
      accountList = [...state.accountList].concat(action.payload);
      totalAccounts = action.payload.length;
      return {
        ...state,
        accountList,
        totalAccounts,
      };
    case types.NEW_WEBSITE:
      newWebsite = action.payload;
      console.log(newWebsite);
      return {
        ...state,
        newWebsite,
      };
    case types.ADD_ACCOUNT:
      console.log(action);

      return {
        ...state,
      };
    default: {
      return state;
    }
  }
};

export default passwordReducer;
