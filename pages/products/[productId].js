import { Fragment } from "react";
import axios from "axios";
import useSWR from "swr";

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';

import getAPI from "../../utils/getAPI";
import ProductDetailImages from "../../components/product-detail/product-detail-images";
import ProductDetailInfo from "../../components/product-detail/product-detail-info/product-detail-info";
import BuyProductCard from "../../components/product-detail/buy-product-card";

const product = {
    images: ["img1", "img2"],
    title: "Digimon sth sthteeitietheithe ",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec sagittis metus. Phasellus a felis odio. Cras rutrum rutrum orci, quis ultrices ipsum laoreet nec. Aenean consectetur sapien eu sapien sodales accumsan. Aenean eros felis, vehicula a massa a, molestie facilisis orci. Vestibulum suscipit vel nunc sit amet efficitur. Donec consequat, nisl sit amet feugiat convallis, urna orci lacinia urna, a sodales quam lectus sit amet eros. Vivamus neque sapien, dignissim in odio a, laoreet aliquam magna. Suspendisse ullamcorper euismod leo et sodales. Nullam odio neque, pretium elementum sollicitudin nec, dictum sit amet nunc.

    Vivamus tempor ex at lacinia ultrices. Cras ac consequat eros. Nulla et posuere felis. Nulla at sem lacus. Praesent eget velit et sem iaculis dictum ac in nulla. Nam vehicula lectus vel risus ornare, ac euismod ipsum cursus. Etiam libero elit, gravida vel tempus non, commodo id ante. Cras nibh dui, feugiat laoreet iaculis in, cursus nec massa. Integer bibendum tortor erat, sed dignissim tellus mattis et. Vestibulum eu lacinia quam, quis pharetra felis.
    
    Praesent sed arcu lorem. Cras aliquet urna vel sollicitudin interdum. In tempus consequat ante sit amet mollis. Cras gravida justo nibh, nec ultrices turpis tempor non. Mauris ac ultricies nibh. Donec commodo interdum augue, vel placerat mauris porta eget. Sed porta sit amet ligula a porta. Quisque tincidunt vel tellus in tincidunt. Fusce at leo ac diam sagittis consequat eget in leo. Proin feugiat efficitur mi, at cursus purus gravida mollis. Ut in porttitor quam. Aliquam accumsan leo libero, id ornare eros ullamcorper sit amet. Quisque mauris lacus, ullamcorper sit amet sem in, laoreet imperdiet ligula. Nulla sagittis ligula eget libero eleifend laoreet. Sed ultricies nisi a neque finibus, et aliquet tellus varius. Quisque congue sit amet neque commodo interdum.
    
    Sed laoreet turpis ut bibendum bibendum. Nunc mauris turpis, consequat ac ultricies non, suscipit sit amet diam. Suspendisse potenti. Vivamus euismod suscipit felis dapibus sodales. In hac habitasse platea dictumst. Suspendisse tempus sapien nec eleifend varius. Sed elementum erat eget tortor gravida vestibulum. Nullam est lacus, commodo ut justo a, viverra luctus orci. Etiam eros quam, aliquet non orci id, tempus efficitur eros. Fusce tincidunt ultrices ipsum id auctor. Nunc nec pretium augue, ut hendrerit leo. Morbi ultrices tempor est, a pulvinar elit interdum vel.`,
    price: 59999,
    stock: 10
}
//use context for active image
function ProductDetailPage(props) { 
    const { productId } = props;

    const theme = useTheme();
    const isMediumScreenDown = useMediaQuery(theme.breakpoints.down("md"));

    const fetcher = url => axios.get(url).then(res => res.data);

    const GET_PRODUCT_DETAILS_API = getAPI(process.env.NEXT_PUBLIC_GET_PRODUCT_DETAILS_API, { id: productId })

    const { data, error } = useSWR(GET_PRODUCT_DETAILS_API, fetcher);

    if (!data) return <p>Loading</p>
    if (error) return <p>error</p>
    
    const product = data.data;

    return (
        <Fragment>
            <Box className="flex">
                <ProductDetailImages productImages={product.images}/>

                <ProductDetailInfo 
                    activeImage={"activeImage"} 
                    description={product.description} 
                    title={product.name} 
                    isMediumScreenDown={isMediumScreenDown}
                    stock={product.stock}
                    price={product.price}
                />

                {!isMediumScreenDown &&
                    <BuyProductCard 
                        stock={product.stock}
                        price={product.price}
                        productId={product._id}
                    />
                }
            </Box>
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