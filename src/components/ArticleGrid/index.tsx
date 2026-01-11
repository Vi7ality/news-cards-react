import { Box, Container, Typography } from "@mui/material";
import ArticleCard from "../ArticleCard";
import { formatDateWithOrdinal } from "@/utils/formatDate";
import type { Article, ArticlesResponse } from "@/types/article";
import { parseKeywords, sortArticlesByPriority, findKeywordMatches } from "@/utils/keywordUtils";
import { useSelector } from "react-redux";
import type { RootState } from "@/store";

type ArticleGridProps = {
    articles: ArticlesResponse;
};

const ArticleGrid = ({ articles }: ArticleGridProps) => {
    const searchQuery = useSelector((state: RootState) => state.search.query);
    const keywords = parseKeywords(searchQuery);

    let filteredArticles = articles?.results || [];
    if (keywords.length > 0) {
        filteredArticles = filteredArticles.filter((article: Article) => {
            const titleMatch = findKeywordMatches(article.title, keywords);
            const descriptionMatch = findKeywordMatches(article.summary || "", keywords);
            return titleMatch || descriptionMatch;
        });
    }

    const sortedArticles = sortArticlesByPriority(filteredArticles, keywords);

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Typography variant="h6" sx={{ mb: 4, fontWeight: 700 }}>
                Results: {sortedArticles.length}
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
                {sortedArticles.map((article: Article) => (
                    <ArticleCard
                        id={article.id}
                        key={article.id}
                        image={article.image_url}
                        date={formatDateWithOrdinal(article.published_at)}
                        title={article.title}
                        description={article.summary || "No description available."}
                        keywords={keywords}
                    />
                ))}
            </Box>
        </Container>
    );
};

export default ArticleGrid;
