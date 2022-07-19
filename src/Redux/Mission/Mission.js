import getData from './missiondata';
// Actions

const DISPLAY_MISSIONS = 'pair-space-travelers-hub/Mission/DISPLAY_MISSIONS';

const initialState = [];

export function missionReducer(state = initialState, action) {
  switch (action.type) {
    case DISPLAY_MISSIONS: {
      return action.payload;
    }
    default:
      return state;
  }
}

export const displayMissions = () => async (dispatch) => {
  const missions = await getData();
  dispatch({
    type: DISPLAY_MISSIONS,
    payload: missions,
  });
};
