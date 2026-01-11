import { Grid } from "react-loader-spinner";

export function GridLoader() {
    return (
        <Grid
            visible={true}
            height="80"
            width="80"
            color="grey"
            ariaLabel="grid-loading"
            radius="12.5"
            wrapperStyle={{}}
            wrapperClass="grid-wrapper"
        />
    );
}
