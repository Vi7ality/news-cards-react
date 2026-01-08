import { configureStore } from "@reduxjs/toolkit";
import { spaceApi } from "./spaceApi";
import searchReducer from "./searchSlice";

export const store = configureStore({
    reducer: {
        [spaceApi.reducerPath]: spaceApi.reducer,
        search: searchReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(spaceApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
