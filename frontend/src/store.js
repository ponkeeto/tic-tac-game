import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./components/Game/reducer";

export default configureStore({
  reducer: {
    game: gameReducer,
  },
});
