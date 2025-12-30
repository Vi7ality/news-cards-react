export interface Author {
    name: string;
    socials: string | null;
}

export interface Article {
    id: number;
    title: string;
    authors: Author[];
    url: string;
    image_url: string;
    news_site: string;
    summary: string;
    published_at: string;
    updated_at: string;
    featured: boolean;
}

export interface ArticlesResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: Article[];
}
