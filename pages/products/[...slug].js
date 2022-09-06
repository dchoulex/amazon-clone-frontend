import Head from 'next/head';
import { useState, Fragment } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import useSWR from 'swr';

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
import getSortedItems from "../../utils/getSortedItems";
import getAPI from '../../utils/getAPI';

function getPageTitle(slug) {
    let pageTitle;
    const titleComponents = [];

    switch(true) {
        case slug.includes("best"):
            pageTitle = "Best Sellers";

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

function ProductCategoryPage(props) {
    const { slug } = props
    const title = getPageTitle(slug);

    const [ page, setPage ] = useState(1);
    const [ sortBy, setSortBy ] = useState("none");
    const [ chipSortBy, setChipSortBy ] = useState("None");
    const [ chipIcon, setChipIcon ] = useState(null);

    let API;

    if (slug.includes("best")) {
        API = process.env.NEXT_PUBLIC_GET_BEST_SELLER_PRODUCTS_API;
    } else {
        const query = getQuery(slug);

        API = getAPI(process.env.NEXT_PUBLIC_GET_CATEGORY_PRODUCTS_API, { query });
    };

    const fetcher = url => axios.get(url).then(res => res.data);

    const { data, error } = useSWR(API, fetcher);

    if (!data) return <p>Loading</p>
    if (error) return <p>Error</p>
    
    const products = data.data;

    const sortedProducts = getSortedItems(products, sortBy);

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

            <ProductInfo products={getPaginatedItems(sortedProducts, page)} />

            <PaginationButtons 
                numOfResults={sortedProducts.length}
                page={page}
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
