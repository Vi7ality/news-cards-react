import { useParams, Link } from "react-router-dom";
import { Container, Typography, Box } from "@mui/material";
import { useGetArticleByIdQuery } from "../../store/spaceApi";

const NewsItemPage = () => {
    const { id } = useParams<{ id: string }>();
    const { data: article, isLoading, error } = useGetArticleByIdQuery(Number(id));

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading article</div>;
    if (!article) return <div>Article not found</div>;

    return (
        <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
            <Box
                sx={{
                    position: "relative",
                    width: "100%",
                    height: "400px",
                    overflow: "hidden",
                    mb: 4,
                }}
            >
                <Box
                    component="img"
                    src={article.image_url}
                    alt={article.title}
                    sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        filter: "blur(4px) brightness(0.4)",
                        transform: "scale(1.1)",
                    }}
                />
                <Box
                    sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        px: 3,
                    }}
                >
                    <Typography
                        variant="h3"
                        component="h1"
                        sx={{
                            color: "white",
                            fontWeight: 700,
                            textAlign: "center",
                            textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                            maxWidth: "1200px",
                        }}
                    >
                        {article.title}
                    </Typography>
                </Box>
            </Box>

            <Container maxWidth="md" sx={{ py: 4 }}>
                <Typography
                    variant="body1"
                    sx={{
                        fontSize: "1.1rem",
                        lineHeight: 1.8,
                        color: "text.primary",
                        mb: 4,
                        whiteSpace: "pre-wrap",
                    }}
                >
                    {article.summary || "No content available."}
                </Typography>

                <Link
                    to="/"
                    style={{
                        textDecoration: "none",
                        color: "inherit",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        fontSize: "0.95rem",
                    }}
                >
                    ← Back to homepage
                </Link>
            </Container>
        </Box>
    );
};

export default NewsItemPage;
