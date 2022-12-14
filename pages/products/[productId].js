import { Fragment, useState } from "react";
import axios from "axios";
import useSWR from "swr";

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';

import getAPI from "../../utils/getAPI";
import ProductDetailImages from "../../components/product-detail/product-detail-images";
import ProductDetailInfo from "../../components/product-detail/product-detail-info/product-detail-info";
import BuyProductCard from "../../components/product-detail/buy-product-card";
import CustomizedSnackbar from "../../components/ui/customized-snackbar";
import PageSpinner from "../../components/ui/pageSpinner";
import ErrorInfo from "../../components/ui/dogs-info/error-info";

//use context for active image
function ProductDetailPage(props) { 
    const { productId } = props;

    const [ snackbarState, setSnackbarState ] = useState({
        open: false,
        type: null,
        message: null
    });

    const theme = useTheme();
    const isMediumScreenDown = useMediaQuery(theme.breakpoints.down("md"));

    const fetcher = url => axios.get(url).then(res => res.data);

    const GET_PRODUCT_DETAILS_API = getAPI(process.env.NEXT_PUBLIC_GET_PRODUCT_DETAILS_API, { id: productId });
    const GET_ALL_REVIEWS_API = getAPI(process.env.NEXT_PUBLIC_GET_ALL_REVIEWS_API, { id: productId });

    const { data: productRes, error: productError } = useSWR(GET_PRODUCT_DETAILS_API, fetcher);
    const { data: reviewsRes, error: reviewsError } = useSWR(GET_ALL_REVIEWS_API, fetcher, { refreshInterval: 1000 });

    if (!productRes || !reviewsRes) return <PageSpinner />
    if (productError || reviewsError) return <ErrorInfo />
    
    const product = productRes.data;
    const reviews = reviewsRes.data;

    return (
        <Fragment>
            <Box className="flex">
                <ProductDetailImages 
                    slug={product.slug}
                    productImages={product.images}
                />

                <ProductDetailInfo 
                    slug={product.slug}
                    images={product.images} 
                    description={product.description} 
                    title={product.name} 
                    isMediumScreenDown={isMediumScreenDown}
                    stock={product.stock}
                    price={product.price}
                    ratingsAverage={product.ratingsAverage}
                    ratingsQuantity={product.ratingsQuantity}
                    reviews={reviews}
                    productId={product._id}
                    setSnackbarState={setSnackbarState}
                />

                {!isMediumScreenDown &&
                    <BuyProductCard 
                        stock={product.stock}
                        price={product.price}
                        productId={product._id}
                        setSnackbarState={setSnackbarState}
                    />
                }
            </Box>

            <CustomizedSnackbar
                snackbarState={snackbarState}
                setSnackbarState={setSnackbarState}
            />
        </Fragment>
    )
};

export default ProductDetailPage;

export async function getServerSideProps(context) {
    const { params } = context;

    return {
        props: {
            productId: params.productId
        }
    }
};