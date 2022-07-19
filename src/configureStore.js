import { configureStore } from '@reduxjs/toolkit';
import { missionReducer } from './Redux/Mission/Mission';

const store = configureStore({
  reducer: {
    missions: missionReducer,
  },
});

export default store;
