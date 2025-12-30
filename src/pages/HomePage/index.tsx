import NewsCard from "@/components/NewsCard";
import { Grid } from "@mui/material";
import { useGetArticlesQuery } from "../../store/spaceApi";
import type { Article } from "../../types/article";

const HomePage = () => {
    const {
        data: articles,
        isLoading,
        error,
    } = useGetArticlesQuery({
        limit: 10,
        offset: 0,
    });

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading articles</p>;
    return (
        <>
            <Grid container spacing={3} sx={{ padding: 3 }}>
                {articles &&
                    articles.map((article: Article) => (
                        <Grid item xs={12} sm={6} md={4} key={article.id}>
                            <NewsCard
                                image={article.image_url}
                                date={article.published_at}
                                title={article.title}
                                highlighted="2020"
                                description="Non sed molestie tortor massa vitae in mattis. Eget vel consequat hendrerit commodo libero aliquam. Urna arcu nunc tortor vitae pharetra..."
                            />
                        </Grid>
                    ))}
            </Grid>
        </>
    );
};

export default HomePage;
