import { createSlice } from "@reduxjs/toolkit";

/*export const loadRecipes = createAsyncThunk(
  "recipeDetails/loadRecipes",
  async ({ category, searchTerm }) => {
    let query = "";
    const querySelection = () => {
      if (category === "Ingredient") {
        query = `ingredients=${searchTerm}`;
      } else if (category === "Cuisine") {
        query = `cuisine=${searchTerm}`;
      } else {
        query = `query=${searchTerm}`;
      }
      return query;
    };
    const searchQuery =
      category === "Ingredient" ? "findByIngredients" : "complexSearch";

    const apiKey = "6931ba0df2c64da0b3aaf7dac038aa9c";
    const requestURL = `https://api.spoonacular.com/recipes/${searchQuery}?${querySelection()}&number=12&apiKey=${apiKey}`;

    const response = await fetch(requestURL);
    const json = await response.json();
    return json;
  }
);*/

export const gameSlice = createSlice({
  name: "game",
  initialState: {
    history: [Array(9).fill(null)],
    currentMove: 0,
    scoreX: 0,
    scoreO: 0,
    scoreDraws: 0,
  },
  reducers: {
    handlePlay: (state, action) => {
      state.history.push(action.payload)
      state.currentMove = state.history.length -1
    },
    jumpTo: (state, action) => {
      state.currentMove = action.payload;
    },
    handleReset: (state) => {
      state.history = [Array(9).fill(null)];
      state.currentMove = 0;
    },
    increment: (state, action) => {
      switch (action.type) {
        case "X":
          state.scoreX += 1;
          break;
        case "O":
          state.scoreO += 1;
          break;
        case "Draw":
          state.scoreDraws += 1;
          break;
        default:
          break;
      }
    },
  },
});

export const { handlePlay, handleReset, jumpTo, increment } = gameSlice.actions;

export const selectGame = (state) => state.game;

export default gameSlice.reducer;
