import { combineReducers, configureStore } from '@reduxjs/toolkit';
import taskListSlice from './slice/taskList/taskListSlice';

const rootReducer = combineReducers({
  taskList: taskListSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

export default store;
