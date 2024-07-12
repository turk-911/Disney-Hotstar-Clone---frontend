import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { userReducer } from "./slices/userSlice";
import { movieReducer } from "./slices/movieSlice";
export default configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
