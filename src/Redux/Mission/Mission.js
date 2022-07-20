import getData from './missiondata';
// Actions

const DISPLAY_MISSIONS = 'pair-space-travelers-hub/Mission/DISPLAY_MISSIONS';
const JOIN = 'pair-space-travelers-hub/Mission/JOIN';
const UNJOIN = 'pair-space-travelers-hub/Mission/UNJOIN';

const initialState = [];

// reducer

export function missionReducer(state = initialState, action) {
  switch (action.type) {
    case DISPLAY_MISSIONS: {
      return action.payload;
    }
    case JOIN: {
      const newState = state.map((mission) => {
        if (mission.mission_id !== action.payload) return mission;
        return { ...mission, reserved: true };
      });
      return newState;
    }
    case UNJOIN: {
      const newState = state.map((mission) => {
        if (mission.mission_id !== action.payload) return mission;
        return { ...mission, reserved: false };
      });
      return newState;
    }
    default:
      return state;
  }
}

// Action creators

export const displayMissions = () => async (dispatch) => {
  const missions = await getData();
  dispatch({
    type: DISPLAY_MISSIONS,
    payload: missions,
  });
};

export const joinMission = (id) => ({
  type: JOIN,
  payload: id,
});

export const unJoinMission = (id) => ({
  type: UNJOIN,
  payload: id,
});
