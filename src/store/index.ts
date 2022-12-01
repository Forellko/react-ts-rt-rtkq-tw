import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { githubApi } from "./github/github.api";

export const store = configureStore({
  reducer: {
    [githubApi.reducerPath]: githubApi.reducer
  },
  middleware: (mw) => {
    return mw().concat(githubApi.middleware)}
})
