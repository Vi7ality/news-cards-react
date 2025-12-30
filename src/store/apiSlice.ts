import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { articleType } from "../types/api/spaceApiResponseType";

export const spaceApi = createApi({
    reducerPath: "spaceApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://api.spaceflightnewsapi.net/v4/" }),
    endpoints: (builder) => ({
        getArticles: builder.query<articleType[], void>({ query: () => "articles" }),
        getSingleArticle: builder.query<articleType, string>({ query: (id) => `articles/${id}` }),
    }),
});

export const { useGetArticlesQuery, useGetSingleArticleQuery } = spaceApi;
