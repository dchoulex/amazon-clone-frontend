import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import ReviewCard from "./review-card";

function ReviewPanelList(props) {
    const { items, setDataIsChanging, setIsRequesting, isRequesting } = props;

    return (
        <Box px={5} my={2}>
            <Grid container spacing={3}>
                {items.map((item, index) => (
                    <Grid 
                        key={`review-card-${index}`} 
                        item 
                        xs={12} 
                        className="flex justify-center items-center"
                    >
                        <ReviewCard 
                            review={item} 
                            setDataIsChanging={setDataIsChanging}
                            setIsRequesting={setIsRequesting}
                            isRequesting={isRequesting}
                        />
                    </Grid>
                ))}   
            </Grid>
        </Box>
    )
};

export default ReviewPanelList;