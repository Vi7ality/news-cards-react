import { Card, CardContent, CardMedia, Typography, Box, Stack, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import placeholderImage from "@/assets/placeholder.svg";
import calendarIcon from "@/assets/icon_calendar.svg";
import { useState } from "react";

interface ArticleCardProps {
    image: string;
    date: string;
    title: string;
    highlighted?: string;
    description: string;
    id: number;
}

const ArticleCard = ({ image, date, title, highlighted, description, id }: ArticleCardProps) => {
    const [imageError, setImageError] = useState(false);

    const renderTitle = () => {
        if (!highlighted) return title;

        return title.split(highlighted).map((part, index, arr) => (
            <span key={index}>
                {part}
                {index < arr.length - 1 && (
                    <Box
                        component="span"
                        sx={{
                            backgroundColor: "#FFF176",
                            px: 0.5,
                        }}
                    >
                        {highlighted}
                    </Box>
                )}
            </span>
        ));
    };

    return (
        <Card
            sx={{
                borderRadius: 3,
                boxShadow: "0px 8px 30px rgba(0,0,0,0.08)",
                overflow: "hidden",
                height: "100%",
                width: "400px",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <CardMedia
                component="img"
                height="220"
                image={imageError ? placeholderImage : image}
                alt={title}
                onError={() => setImageError(true)}
                sx={{
                    backgroundColor: "#f0f0f0",
                }}
            />

            <CardContent
                sx={{
                    p: 3,
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                }}
            >
                <Stack direction="row" alignItems="center" spacing={1} mb={2}>
                    <Box
                        component="img"
                        src={calendarIcon}
                        alt="Calendar"
                        sx={{
                            width: 16,
                            height: 16,
                            opacity: 0.6,
                        }}
                    />
                    <Typography variant="body2" color="text.secondary">
                        {date}
                    </Typography>
                </Stack>

                <Typography
                    variant="h5"
                    component="h3"
                    sx={{
                        fontWeight: 500,
                        lineHeight: 1.3,
                        mb: 2,
                    }}
                >
                    {renderTitle()}
                </Typography>

                <Typography variant="body1" color="text.secondary" sx={{ mb: 3, flex: 1 }}>
                    {description}
                </Typography>

                <Link
                    component={RouterLink}
                    to={`/news/${id}`}
                    underline="none"
                    sx={{
                        fontWeight: 600,
                        color: "text.primary",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 1,
                        mt: "auto",
                    }}
                >
                    Read more →
                </Link>
            </CardContent>
        </Card>
    );
};

export default ArticleCard;
