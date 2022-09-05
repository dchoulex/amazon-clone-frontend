import { useState, Fragment } from "react";
import useSWR from "swr";
import axios from "axios";

import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import StarRateIcon from '@mui/icons-material/StarRate';

import getPaginatedItems from "../../utils/getPaginatedItems";
import ProductInfo from "../../components/product/product-info";
import PaginationButtons from "../../components/ui/pagination-buttons";
import ProductPageTitle from "../../components/product/product-page-title";

function ProductPage(props) {
    const { numOfResults, products } = props;
    const title = "Search Product";

    const [ page, setPage ] = useState(1);
    const [ sortBy, setSortBy ] = useState("none");
    const [ chipSortBy, setChipSortBy ] = useState("None");
    const [ chipIcon, setChipIcon ] = useState(null);

    const handleChangePage = (_, value) => {
        setPage(value)
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
        }
    };

    return (
        <Fragment>
            <ProductPageTitle 
                title={title}
                numberOfResults={numOfResults}
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

            <ProductInfo products={getPaginatedItems(products, page)} />

            <PaginationButtons 
                numOfResults={numOfResults}
                page={page}
                onChange={handleChangePage}
            />
        </Fragment>
    )
};

export default ProductPage;

export async function getStaticProps() {
    const res = await axios.get(process.env.DEV_URL + process.env.NEXT_PUBLIC_GET_ALL_PRODUCTS_API);
    
    return {
        props: {
            status: res.data.status,
            numOfResults: res.data.numOfResults,
            products: res.data.data
        },
        revalidate: 10
    }
};