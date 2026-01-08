import NewsCard from "@/components/NewsCard";
import { Container, Box } from "@mui/material";
import { useGetArticlesQuery } from "../../store/spaceApi";
import type { Article } from "../../types/article";
import Searchbar from "@/components/Searchbar";

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
        <>
            <Searchbar />
            <Container maxWidth="lg" sx={{ py: 4 }}>
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
