import { Box, Container, Typography } from "@mui/material";
import ArticleCard from "../ArticleCard";
import { formatDateWithOrdinal } from "@/utils/formatDate";
import type { Article, ArticlesResponse } from "@/types/article";

type ArticleGridProps = {
    articles: ArticlesResponse;
};

const ArticleGrid = ({ articles }: ArticleGridProps) => {
    return (
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
                        <ArticleCard
                            id={article.id}
                            key={article.id}
                            image={article.image_url}
                            date={formatDateWithOrdinal(article.published_at)}
                            title={article.title}
                            highlighted="2020"
                            description="Non sed molestie tortor massa vitae in mattis. Eget vel consequat hendrerit commodo libero aliquam. Urna arcu nunc tortor vitae pharetra..."
                        />
                    ))}
            </Box>
        </Container>
    );
};

export default ArticleGrid;
