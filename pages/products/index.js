import { useState, Fragment } from "react";
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import StarRateIcon from '@mui/icons-material/StarRate';

import ProductInfo from "../../components/product/product-info";
import PaginationButtons from "../../components/ui/pagination-buttons";
import ProductPageTitle from "../../components/product/product-page-title";

const products = [
    {
        title:"Digimon Story Cyber Sleuth Complete Edition(輸入版:北米)- Switch", 
        ratingsAverage: 5,
        price: 500
    }, {
        title:"2", 
        description: "Teststs",
        ratingsAverage: 4,
        price: 4500
    }, {
        title:"3",
        ratingsAverage: 0.5,
        price: 5000
    }, {
        title:"4",
        ratingsAverage: 2,
        price: 500000000
    }
]

function ProductPage() {
    const title = "Search Product";
    const numberOfResults = 20;

    const [sortBy, setSortBy] = useState("none");
    const [chipSortBy, setChipSortBy] = useState("None");
    const [chipIcon, setChipIcon] = useState(null);

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
                numberOfResults={numberOfResults}
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

            <ProductInfo products={products}/>

            <PaginationButtons numberOfPages={3}/>
        </Fragment>
    )
};

export default ProductPage;