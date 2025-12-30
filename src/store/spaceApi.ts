import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { ArticlesResponse } from "@/types/article";

export const spaceApi = createApi({
    reducerPath: "spaceApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.spaceflightnewsapi.net/v4/",
    }),
    endpoints: (builder) => ({
        getArticles: builder.query<ArticlesResponse, { limit?: number; offset?: number }>({
            query: ({ limit = 10, offset = 0 }) => `articles/?limit=${limit}&offset=${offset}`,
        }),
    }),
});

export const { useGetArticlesQuery } = spaceApi;
