import { TaskListType } from './taskListType';
import { createSlice } from '@reduxjs/toolkit';

const initialState: TaskListType = {
  tasks: [],
};

const taskListSlice = createSlice({
  name: 'taskList',
  initialState: initialState,
  reducers: {},
});

export default taskListSlice.reducer;
