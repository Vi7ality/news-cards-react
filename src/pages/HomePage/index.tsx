import NewsCard from "@/components/NewsCard";
import { Grid } from "@mui/material";

const HomePage = () => {
    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <NewsCard
                    image="https://picsum.photos/600/400"
                    date="June 29th, 2021"
                    title="The 2020 World's Most Valuable Brands"
                    highlighted="2020"
                    description="Non sed molestie tortor massa vitae in mattis. Eget vel consequat hendrerit commodo libero aliquam. Urna arcu nunc tortor vitae pharetra..."
                />
                <NewsCard
                    image="https://picsum.photos/600/400"
                    date="June 29th, 2021"
                    title="The 2020 World's Most Valuable Brands"
                    highlighted="2020"
                    description="Non sed molestie tortor massa vitae in mattis. Eget vel consequat hendrerit commodo libero aliquam. Urna arcu nunc tortor vitae pharetra..."
                />
                <NewsCard
                    image="https://picsum.photos/600/400"
                    date="June 29th, 2021"
                    title="The 2020 World's Most Valuable Brands"
                    highlighted="2020"
                    description="Non sed molestie tortor massa vitae in mattis. Eget vel consequat hendrerit commodo libero aliquam. Urna arcu nunc tortor vitae pharetra..."
                />
                <NewsCard
                    image="https://picsum.photos/600/400"
                    date="June 29th, 2021"
                    title="The 2020 World's Most Valuable Brands"
                    highlighted="2020"
                    description="Non sed molestie tortor massa vitae in mattis. Eget vel consequat hendrerit commodo libero aliquam. Urna arcu nunc tortor vitae pharetra..."
                />
            </Grid>
        </>
    );
};

export default HomePage;
