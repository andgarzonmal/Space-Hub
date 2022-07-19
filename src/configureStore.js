import { configureStore } from '@reduxjs/toolkit';
import { missionReducer } from './Redux/Mission/Mission';
import reducerRockets from './Redux/Rockets/rockets';

const store = configureStore({
  reducer: {
    missions: missionReducer,
    rockets: reducerRockets,
  },
});

export default store;
