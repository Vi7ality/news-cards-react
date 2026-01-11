import { useGetArticlesQuery } from "../../store/spaceApi";
import Searchbar from "@/components/Searchbar";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import ArticleGrid from "@/components/ArticleGrid";

const HomePage = () => {
    const searchQuery = useSelector((state: RootState) => state.search.query);
    const {
        data: articles,
        isLoading,
        error,
    } = useGetArticlesQuery({
        limit: 10,
        offset: 0,
        search: searchQuery,
    });

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading articles</p>;
    return (
        <>
            <Searchbar />
            <ArticleGrid articles={articles!} />
        </>
    );
};

export default HomePage;
