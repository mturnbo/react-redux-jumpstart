import {
  fetchTokenPending,
  fetchTokenSuccess,
  fetchTokenError
} from '../actions/coindeskApiActions';

function fetchToken() {
  return dispatch => {
    dispatch(fetchTokenPending());
    fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw (res.error);
        }
        dispatch(fetchTokenSuccess(res.bpi.USD));
        return res;
      })
      .catch(error => {
        dispatch(fetchTokenError(error));
      });
  };
}

export default fetchToken;
