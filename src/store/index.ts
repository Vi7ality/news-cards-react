import { configureStore } from "@reduxjs/toolkit";
import { spaceApi } from "./apiSlice";

export const store = configureStore({
    reducer: {
        [spaceApi.reducerPath]: spaceApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(spaceApi.middleware),
});
