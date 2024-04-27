import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getStuListApi, deleteStuByIdApi } from "../Api/stuApi";
import { addStu, editStuByIdApi } from "../Api/stuApi";
export const getStuListAsync = createAsyncThunk(
  "stu/getStuList",
  async (_, thunkApi) => {
    const response = await getStuListApi();
    thunkApi.dispatch(init(response.data));
  }
);
export const removeStuListAsync = createAsyncThunk(
  "stu/removeStuList",
  (id, thunkApi) => {
    deleteStuByIdApi(id); //删除服务器中的数据
    thunkApi.dispatch(removes(id)); //删除本地的数据
  }
);
export const addStuListAsync = createAsyncThunk(
  "stu/addStuList",
  async (data, thunkApi) => {
    const res = await addStu(data); //新增服务器中的数据
    thunkApi.dispatch(add(res.data)); //新增本地的数据
  }
);
export const editStuListAsync = createAsyncThunk(
  "stu/editStuList",
  async (data, thunkApi) => {
    await editStuByIdApi(data.id, data.stu); //修改数据
    const response = await getStuListApi();
    thunkApi.dispatch(init(response.data));
  }
);

export const stuSlice = createSlice({
  name: "stuList",
  initialState: {
    stuList: [],
  },
  reducers: {
    init: (state, { payload }) => {
      state.stuList = payload;
    },
    add: (state, { payload }) => {
      state.stuList.push(payload);
    },
    removes: (state, { payload }) => {
      state.stuList = state.stuList.filter((e) => {
        return e.id != payload;
      });
    },
  },
});
export const { init, removes, add } = stuSlice.actions;
export default stuSlice.reducer;
