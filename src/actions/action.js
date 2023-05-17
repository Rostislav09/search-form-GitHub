import axios from 'axios';

export const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

const fetchUsersRequest = () => ({
  type: FETCH_USERS_REQUEST,
});

const fetchUsersSuccess = users => ({
  type: FETCH_USERS_SUCCESS,
  payload: { users },
});

const fetchUsersFailure = error => ({
  type: FETCH_USERS_FAILURE,
  payload: { error },
});

export const fetchUsers = query => {
  return dispatch => {
    dispatch(fetchUsersRequest());
    axios
      .get(`https://api.github.com/search/users?q=${query}`)
      .then(response => dispatch(fetchUsersSuccess(response.data.items)))
      .catch(error => dispatch(fetchUsersFailure(error.message)));
  };
};