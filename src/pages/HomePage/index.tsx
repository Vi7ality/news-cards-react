import { useGetArticlesQuery } from "../../store/spaceApi";
import Searchbar from "@/components/Searchbar";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import ArticleGrid from "@/components/ArticleGrid";
import { Box } from "@mui/material";
import { GridLoader } from "@/components/Loader";

const HomePage = () => {
    const searchQuery = useSelector((state: RootState) => state.search.query);
    const {
        data: articles,
        isLoading,
        isFetching,
        error,
    } = useGetArticlesQuery({
        limit: 10,
        offset: 0,
        search: searchQuery,
    });

    if (isLoading || isFetching) {
        return (
            <>
                <Searchbar />
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        minHeight: "400px",
                    }}
                >
                    <GridLoader />
                </Box>
            </>
        );
    }
    if (error) return <p>Error loading articles</p>;
    return (
        <>
            <Searchbar />
            <ArticleGrid articles={articles!} />
        </>
    );
};

export default HomePage;
