import { Fragment } from "react";
import Image from "next/image";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Divider from '@mui/material/Divider';

function ProductDetailImages(props) {
    const { productImages } = props;

    return (
        <Box 
            sx={{ borderRight: 1 }}
            className="border-zinc-300 w-[100px] px-2"
        >
            <List>
                {productImages.map((image, index) => (
                    <Fragment key={image}>
                        <ListItemButton
                            className="border-2 border-black border-solid w-[70px] h-[70px] mx-auto my-5"
                        >
                            <Image 
                                src="/images/amazon-logo.png"
                                alt="picture"
                                layout="fill"
                            />
                        </ListItemButton>
                        {index === productImages.length - 1 ? 
                            null :
                            <Divider 
                                className="border-blue-400 border-dashed"
                                variant="fullWidth"
                            />
                        }
                    </Fragment>
                ))}
            </List>
        </Box>
    )
};

export default ProductDetailImages;