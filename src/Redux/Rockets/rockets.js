/* eslint-disable import/no-cycle */
/* eslint-disable import/no-named-as-default */
import getRocketsFromAPI from './rocketsAPI';

const GET_ROCKETS = 'rocketStore/rockets/GET_ROCKETS';

const initialState = [];

export const getRockets = () => async (dispatch) => {
  const rockets = await getRocketsFromAPI();
  dispatch({
    type: GET_ROCKETS,
    payload: rockets,
  });
};

const reducerRockets = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return [...action.payload];
    default:
      return state;
  }
};

export default reducerRockets;
