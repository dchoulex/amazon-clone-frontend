import { Fragment } from "react";
import Image from "next/image";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';

function ProductDetailImages(props) {
    const { productImages, slug } = props;

    return (
        <Box 
            sx={{ borderRight: 1 }}
            className="border-zinc-300 w-[100px] px-2"
        >
            <List>
                {productImages.map((image, index) => (
                    <Box key={`image-${index}`}>
                        <ListItemButton
                            className="border-2 border-gray-300 border-solid w-[70px] h-[70px] mx-auto my-5"
                        >
                            <Image 
                                src={`/images/products/${slug}/${image}`}
                                alt="picture"
                                layout="fill"
                            />
                        </ListItemButton>
                    </Box>
                ))}
            </List>
        </Box>
    )
};

export default ProductDetailImages;