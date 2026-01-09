import NewsCard from "@/components/NewsCard";
import { Container, Box, Typography } from "@mui/material";
import { useGetArticlesQuery } from "../../store/spaceApi";
import type { Article } from "../../types/article";
import Searchbar from "@/components/Searchbar";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";

const HomePage = () => {
    const searchQuery = useSelector((state: RootState) => state.search.query);
    const {
        data: articles,
        isLoading,
        error,
    } = useGetArticlesQuery({
        limit: 10,
        offset: 0,
        search: searchQuery,
    });

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading articles</p>;
    console.log("articles", articles);
    return (
        <>
            <Searchbar />
            <Container maxWidth="lg" sx={{ py: 4 }}>
                <Typography variant="h6" sx={{ mb: 4, fontWeight: 700 }}>
                    Results: {articles?.count ? articles.count : 0}
                </Typography>
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: {
                            xs: "1fr",
                            sm: "repeat(2, 400px)",
                            md: "repeat(3, 400px)",
                        },
                        gap: 3,
                        justifyContent: "center",
                    }}
                >
                    {articles &&
                        articles.results.map((article: Article) => (
                            <NewsCard
                                id={article.id}
                                key={article.id}
                                image={article.image_url}
                                date={article.published_at}
                                title={article.title}
                                highlighted="2020"
                                description="Non sed molestie tortor massa vitae in mattis. Eget vel consequat hendrerit commodo libero aliquam. Urna arcu nunc tortor vitae pharetra..."
                            />
                        ))}
                </Box>
            </Container>
        </>
    );
};

export default HomePage;
