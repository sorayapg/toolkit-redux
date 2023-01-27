import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    counter: 10
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes

      /* Redux Toolkit nos permite escribir lógica "mutante" en reductores. En
       en realidad no muta el estado porque usa la librería Immer,
       que detecta los cambios en un "estado borrador" y produce un nuevo
       estado inmutable basado en esos cambios */
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
    incrementBy: (state, action) => {
      state.counter += action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementBy } = counterSlice.actions

// export default counterSlice.reducer