import { configureStore,  } from "@reduxjs/toolkit";
import mainSlice from "./mainSlice"


export const store = configureStore({
    reducer: {
      todosData: mainSlice
    },
    devTools: process.env.NODE_ENV !== 'production',
  })

export type RootState = ReturnType<typeof store.getState>;