import { Fragment } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import LoopIcon from '@mui/icons-material/Loop';
import RateReviewIcon from '@mui/icons-material/RateReview';

function OrderItemList(props) {
    const { products, status } = props;

    return (
        <Box px={2}>
            {products.map((product, index) => (
                <Fragment key={product.name}>
                    <Box className="flex" py={3}>
                        <Image 
                            src="/images/amazon-logo.png"
                            alt="Product picture"
                            width={120}
                            height={120}
                        />

                        <div className="ml-8 flex flex-col">
                            <Typography variant="h6">
                                {product.name}
                            </Typography>

                            <Stack 
                                direction="row" 
                                variant="h6" 
                                spacing={2}
                                className="mt-auto"
                            >
                                <Button variant="outlined">
                                    View item
                                </Button>

                                <Button 
                                    variant="contained"
                                    className="bg-orange-400"
                                    startIcon={<LoopIcon />}
                                >
                                    Buy again
                                </Button>

                                {status === "delivered" && 
                                <Button 
                                    variant="contained"
                                    startIcon={<RateReviewIcon />}
                                    className="bg-violet-500"
                                >
                                        Review
                                    </Button>
                                }
                            </Stack>
                        </div>
                    </Box>

                    {index === products.length - 1 || 
                        <Divider />
                    }
                </Fragment>
            ))}
        </Box>
    )
};

export default OrderItemList;