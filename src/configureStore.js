import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { missionReducer } from './Redux/Mission/Mission';
import reducerRockets from './Redux/Rockets/RocketsSlice';

const store = configureStore({
  reducer: {
    missions: missionReducer,
    rockets: reducerRockets,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
