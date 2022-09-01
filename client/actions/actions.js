// import actionType constants
import * as types from "../constants/actionTypes";

export const loadAccountsActionCreator = (currentAccounts) => ({
  type: types.LOAD_ACCOUNT,
  payload: currentAccounts,
});

export const createAccountActionCreator = (newAccount) => ({
  type: types.ADD_ACCOUNT,
  payload: newAccount,
});

export const newWebsiteActionCreator = (newWebsite) => ({
  type: types.NEW_WEBSITE,
  payload: newWebsite,
});

export const newUsernameActionCreator = (newUsername) => ({
  type: types.NEW_USERNAME,
  payload: newUsername,
});

export const newPasswordActionCreator = (newPassword) => ({
  type: types.NEW_PASSWORD,
  payload: newPassword,
});

// export const deleteCardActionCreator = (marketId) => ({
//   type: types.DELETE_CARD,
//   payload: marketId,
// });
