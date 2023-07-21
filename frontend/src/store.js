import { configureStore } from "@reduxjs/toolkit"
import gameReducer from './components/App/reducer'

export default configureStore({
    reducer: {
        game: gameReducer,
    }
});