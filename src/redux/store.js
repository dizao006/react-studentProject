import stuSliceReducer from "./stuSlice";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: {
    stu: stuSliceReducer,
  },
});
