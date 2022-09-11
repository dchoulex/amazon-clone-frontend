import { useState, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import StarRateIcon from '@mui/icons-material/StarRate';

import { productActions } from "../../store/product-slice";
import getPaginatedItems from "../../utils/getPaginatedItems";
import ProductInfo from "../../components/product/product-info";
import PaginationButtons from "../../components/ui/pagination-buttons";
import ProductPageTitle from "../../components/product/product-page-title";
import getSortedItems from "../../utils/getSortedItems";
import NoSearchItemInfo from "../../components/ui/no-search-item-info";

function ProductPage() {
    const title = "Search Product";
    const dispatch = useDispatch();

    const searchProductPage = useSelector(state => state.product.searchProductPage);
    const products = useSelector(state => state.product.products).slice();

    const [ sortBy, setSortBy ] = useState("none");
    const [ chipSortBy, setChipSortBy ] = useState("None");
    const [ chipIcon, setChipIcon ] = useState(null);
    
    const sortedProducts = getSortedItems(products, sortBy);

    const handleChangePage = (_, value) => {
        dispatch(productActions.setSearchProductPage({ page: value }))
    };

    const handleChangeSortBy = event => {
        const sortBy = event.target.value;

        setSortBy(sortBy);

        switch (sortBy) {
            case "priceAsc":
                setChipIcon(<ArrowUpwardIcon />);
                setChipSortBy("Price");
                break;
            case "priceDesc":
                setChipIcon(<ArrowDownwardIcon />);
                setChipSortBy("Price");
                break;
            case "bestSellers":
                setChipIcon(<TrendingUpIcon />);
                setChipSortBy("Best Sellers");
                break
            case "bestReview":
                setChipIcon(<StarRateIcon />);
                setChipSortBy("Best Review");
                break;
            default:
                setChipIcon(null);
                setChipSortBy("None");   
                break;
        };
    };

    return (
        products.length === 0 ?
            <Box>
                <ProductPageTitle 
                    title={title}
                    numberOfResults={sortedProducts.length}
                />

                <Divider />

                <NoSearchItemInfo />
            </Box> :

            <Box>
                <ProductPageTitle 
                    title={title}
                    numberOfResults={sortedProducts.length}
                    onChange={handleChangeSortBy}
                    sortBy={sortBy}
                />
    
                <Divider>
                    <Chip 
                        variant="outlined"
                        color="primary" 
                        icon={chipIcon} 
                        label={chipSortBy}
                    />
                </Divider>
    
                <ProductInfo products={getPaginatedItems(sortedProducts, searchProductPage)} />
    
                <PaginationButtons 
                    numOfResults={sortedProducts.length}
                    page={searchProductPage}
                    onChange={handleChangePage}
                />
            </Box>
    )
};

export default ProductPage;