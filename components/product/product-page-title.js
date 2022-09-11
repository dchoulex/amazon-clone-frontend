import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

import getDisplayedNumOfResults from '../../utils/getDisplayedNumOfResults';

function ProductPageTitle(props) {
    const { title, numberOfResults, onChange, sortBy } = props;

    const displayedNumOfResults = getDisplayedNumOfResults(numberOfResults);

    return (
        <Box className="pl-5 pt-5 pb-2 flex">
            <Typography 
                variant="h4" 
                className="inline mt-auto"
            >
                {title}
            </Typography>

            {numberOfResults !== undefined &&
                <Typography 
                    variant="overline" 
                    className="text-base font-light pl-5 inline mt-auto mb-1"
                >
                    {displayedNumOfResults}
                </Typography>
            }

            {numberOfResults !== 0 &&
                <div className="flex ml-auto pr-5 items-center">
                    <label 
                        variant="outlined" 
                        htmlFor="sort-by"
                        className="justify-center items-center pr-3 text-base"
                    >
                        <em>Sort by</em>
                    </label>
                    
                    <TextField
                        id="sort-by"
                        variant="outlined"
                        select
                        size="small"
                        defaultValue="None"
                        value={sortBy}
                        onChange={onChange}
                    >
                        <MenuItem value="none"><em>None</em>
                        </MenuItem>

                        <MenuItem value="priceAsc">Price: Low to High</MenuItem>

                        <MenuItem value="priceDesc">Price: High to Low</MenuItem>

                        <MenuItem value="bestSellers">Best Sellers</MenuItem>

                        <MenuItem value="bestReview">Best Review</MenuItem>
                    </TextField>
                </div>
            }
        </Box>
    )
};

export default ProductPageTitle;