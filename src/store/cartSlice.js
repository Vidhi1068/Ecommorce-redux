import { createSlice } from "@reduxjs/toolkit";

const cartslice = createSlice({
  name: "cart",

  initialState: [],

  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { add, remove } = cartslice.actions; //its action
export default cartslice.reducer; //its reducer

/*in old version of redux we have to make action and reducer we have to mentioned it
...also we cant change the state in it ...but now we can mutet the original state directly
...this redux autometically make action and reducer we just have to make pure functions
...pure function means its not chnage anythin which is outside the function
...last we export actions and reducer*/
