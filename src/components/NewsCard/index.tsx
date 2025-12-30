import { Card, CardContent, CardMedia, Typography, Box, Stack, Link } from "@mui/material";

interface NewsCardProps {
    image: string;
    date: string;
    title: string;
    highlighted?: string;
    description: string;
}

const NewsCard = ({ image, date, title, highlighted, description }: NewsCardProps) => {
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
            }}
        >
            <CardMedia component="img" height="220" image={image} alt={title} />

            <CardContent sx={{ p: 3 }}>
                <Stack direction="row" alignItems="center" spacing={1} mb={2}>
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

                <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                    {description}
                </Typography>

                <Link
                    href="#"
                    underline="none"
                    sx={{
                        fontWeight: 600,
                        color: "text.primary",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 1,
                    }}
                >
                    Read more →
                </Link>
            </CardContent>
        </Card>
    );
};

export default NewsCard;
