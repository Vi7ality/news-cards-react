import NewsCard from "@/components/NewsCard";
import { Container, Grid } from "@mui/material";
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
    console.log("articles", articles);
    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Grid container spacing={3}>
                {articles &&
                    articles.results.map((article: Article) => (
                        <Grid item key={article.id} xs={12} sm={6} md={4}>
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
        </Container>
    );
};

export default HomePage;
