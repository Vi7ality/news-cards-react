import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Article, ArticlesResponse } from "@/types/article";

export const spaceApi = createApi({
    reducerPath: "spaceApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.spaceflightnewsapi.net/v4/",
    }),
    endpoints: (builder) => ({
        getArticles: builder.query<ArticlesResponse, { limit?: number; offset?: number; search?: string }>({
            query: ({ limit = 10, offset = 0, search = "" }) => {
                const params = new URLSearchParams({
                    limit: limit.toString(),
                    offset: offset.toString(),
                });
                if (search) {
                    params.append("search", search);
                }
                return `articles/?${params.toString()}`;
            },
        }),
        getArticleById: builder.query<Article, number>({
            query: (id) => `articles/${id}/`,
        }),
    }),
});

export const { useGetArticlesQuery } = spaceApi;
