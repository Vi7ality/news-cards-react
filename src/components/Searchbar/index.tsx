import { Box, TextField, InputAdornment, Typography, Container } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/store";

const Searchbar = () => {
    const [localQuery, setLocalQuery] = useState<string>("");
    const dispatch = useDispatch<AppDispatch>();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setLocalQuery(value);
        dispatch(setSearchQuery(value));
    };
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
