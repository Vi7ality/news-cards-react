import { configureStore } from "@reduxjs/toolkit";
import { spaceApi } from "./spaceApi";

export const store = configureStore({
    reducer: {
        [spaceApi.reducerPath]: spaceApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(spaceApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
