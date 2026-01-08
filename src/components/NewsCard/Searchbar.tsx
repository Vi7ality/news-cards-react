import { Box, TextField, InputAdornment, Typography, Container } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Searchbar = () => {
    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Box sx={{ maxWidth: 720 }}>
                <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 500 }}>
                    Filter by keywords
                </Typography>

                <TextField
                    fullWidth
                    placeholder="The most successful IT companies in 2020"
                    variant="outlined"
                    slotProps={{
                        input: {
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon color="action" />
                                </InputAdornment>
                            ),
                        },
                    }}
                    sx={{
                        backgroundColor: "#fff",
                        borderRadius: 2,
                        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.06)",
                        "& .MuiOutlinedInput-root": {
                            borderRadius: 2,
                        },
                    }}
                />
            </Box>
        </Container>
    );
};

export default Searchbar;
