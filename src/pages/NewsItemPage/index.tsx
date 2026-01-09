import { useParams, Link } from "react-router-dom";
import { Container, Typography, Box } from "@mui/material";
import { useGetArticleByIdQuery } from "../../store/spaceApi";

const NewsItemPage = () => {
    const { id } = useParams<{ id: string }>();
    const { data: article, isLoading, error } = useGetArticleByIdQuery(Number(id));

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading article</div>;
    if (!article) return <div>Article not found</div>;

    console.log("article", article);

    return (
        <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
            <Box
                sx={{
                    position: "relative",
                    width: "100%",
                    height: "245px",
                    overflow: "hidden",
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
            </Box>

            <Box>
                <Container>
                    <Box
                        sx={{
                            position: "relative",
                            mt: "-95px",
                            bgcolor: "background.paper",
                            borderRadius: "5px",
                            px: "75px",
                            paddingTop: "35px",
                            paddingBottom: "50px",
                            mb: 4,
                            boxShadow: "0 8px 24px 0 rgba(0, 0, 0, 0.05)",
                        }}
                    >
                        <Typography
                            variant="body1"
                            sx={{
                                fontWeight: 400,
                                fontSize: "18px",
                                textAlign: "center",
                                mb: "50px",
                                color: "text.primary",
                            }}
                        >
                            {article.title}
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                fontSize: "18px",
                                fontWeight: 400,
                                color: "text.primary",
                                mb: 4,
                                whiteSpace: "pre-wrap",
                            }}
                        >
                            {article.summary || "No content available."}
                        </Typography>
                    </Box>
                    <Link
                        to="/"
                        style={{
                            textDecoration: "none",
                            color: "inherit",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "8px",
                            fontSize: "0.95rem",
                            marginLeft: "75px",
                            fontWeight: 700,
                        }}
                    >
                        ← Back to homepage
                    </Link>
                </Container>
            </Box>
        </Box>
    );
};

export default NewsItemPage;
