import Head from 'next/head';
import { useState, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import useSWR from 'swr';

import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import StarRateIcon from '@mui/icons-material/StarRate';

import { PAGINATION_LIMIT } from '../../appConfig';
import getPaginatedItems from "../../utils/getPaginatedItems";
import ProductInfo from "../../components/product/product-info";
import PaginationButtons from "../../components/ui/pagination-buttons";
import ProductPageTitle from "../../components/product/product-page-title";
import getSortedItems from "../../utils/getSortedItems";
import getAPI from '../../utils/getAPI';
import { productActions } from '../../store/product-slice';
import PageSpinner from '../../components/ui/pageSpinner';
import ErrorInfo from '../../components/ui/dogs-info/error-info';

function getPageTitle(slug) {
    let pageTitle;
    const titleComponents = [];
    const slugPageTitle = slug.join("-");

    switch(true) {
        case slugPageTitle === "all-products":
            pageTitle = "All Products";
            
            break;

        case slugPageTitle === "best-sellers":
            pageTitle = "Best Sellers";
            
            break;
        case slugPageTitle === "best-review":
            pageTitle = "Best Reviews";
            
            break;
        case slugPageTitle === "recommended-for-you":
            pageTitle = "Recommended For You";
            
            break;
        case slugPageTitle === "buy-again":
            pageTitle = "Buy Again";
            
            break;

        case slug.length === 2:
            for (const word of slug) {
                titleComponents.push(word[0].toUpperCase() + word.slice(1))
            };

            pageTitle = titleComponents.join(" & ");

            break;

        case slug.length === 3:
            const commaComponents = [];

            for (let idx = 0; idx < slug.length; idx++) {
                const word = slug[idx];
                const title = word[0].toUpperCase() + word.slice(1);

                if (idx === slug.length - 1) {
                    titleComponents.push(title)
                } else {
                    commaComponents.push(title)
                };
            };

            titleComponents.unshift(commaComponents.join(", "));

            pageTitle = titleComponents.join(" & ");

            break;
        default:
            break;
    };

    return pageTitle;
};

function getQuery(slug) {
    let querySlug = slug.slice();

    switch(true) {
        case querySlug.includes("clothing"):
            querySlug.push("bag")
            break;

        case querySlug.includes("computers"):
            querySlug.push("peripherals")
            break;
        
        default:
            break;
    };

    return `category=${querySlug.join(",")}`;
};

function getPageAPI(slug) {
    const pageSlug = slug.join("-");
    let API;

    switch(pageSlug) {
        case "best-sellers":
            API = process.env.NEXT_PUBLIC_GET_BEST_SELLER_PRODUCTS_API;
            break;

        case "all-products":
            API = process.env.NEXT_PUBLIC_GET_ALL_PRODUCTS_API;
            break;

        case "best-review":
            API = process.env.NEXT_PUBLIC_GET_BEST_REVIEW_PRODUCTS_API;
            break;

        case "recommended-for-you":
            API = process.env.NEXT_PUBLIC_GET_RECOMMENDATION_PRODUCTS_API;
            break;

        case "buy-again":
            API = process.env.NEXT_PUBLIC_GET_BUY_AGAIN_PRODUCTS_API;
            break;

        default:
            const query = getQuery(slug);

            API = getAPI(process.env.NEXT_PUBLIC_GET_CATEGORY_PRODUCTS_API, { query });

            break;
    }

    return API;
};

function ProductCategoryPage(props) {
    const { slug } = props;
    const dispatch = useDispatch();

    const title = getPageTitle(slug);

    const productCategoryPage = useSelector(state => state.product.productCategoryPage);

    const [ sortBy, setSortBy ] = useState("none");
    const [ chipSortBy, setChipSortBy ] = useState("None");
    const [ chipIcon, setChipIcon ] = useState(null);

    const API = getPageAPI(slug);

    const fetcher = url => axios.get(url).then(res => res.data);

    const { data, error } = useSWR(API, fetcher);

    if (!data) return <PageSpinner />
    if (error) return <ErrorInfo />
    
    const products = data.data;

    const sortedProducts = getSortedItems(products, sortBy);
    const numOfPages =  Math.ceil(sortedProducts.length / PAGINATION_LIMIT);

    if (productCategoryPage > numOfPages) {
        dispatch(productActions.setProductCategoryPage({ page: 1 }))
    };

    const handleChangePage = (_, value) => {
        dispatch(productActions.setProductCategoryPage({ page: value }))
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
                break;

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
        <Fragment>
            <Head>
                <title>{title}</title>
            </Head>

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

            <ProductInfo products={getPaginatedItems(sortedProducts, productCategoryPage)} />

            <PaginationButtons 
                numOfResults={sortedProducts.length}
                page={productCategoryPage}
                onChange={handleChangePage}
            />
        </Fragment>
    );
}

export function getServerSideProps(context) {
    const slug = context.params.slug;

    return {
        props: {
            slug
        }
    };
}

export default ProductCategoryPage;
