import { Fragment } from "react";
import Image from "next/image";
import Carousel from 'react-material-ui-carousel';
import Box from "@mui/material/Box";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const bannerImages = ["banner-1.jpeg", "banner-2.jpeg", "banner-3.jpg"];

function Banner() {
    return (
        <Fragment>
            <Box className="w-full absolute h-[300px]">                  
                <Carousel
                    interval={5000}
                    animation="slide"
                    navButtonsAlwaysVisible
                    indicators={false}
                    navButtonsWrapperProps={{ 
                        className:"h-56"
                    }}
                    navButtonsProps={{ 
                        className:"bg-transparent"
                    }}
                    PrevIcon={<ArrowBackIosIcon />}
                    NextIcon={<ArrowForwardIosIcon />}
                >
                    {bannerImages.map((image, index) => (
                        <div key={`img-${index}`} >
                            <Box 
                                sx={{ height: "300px"}}
                            >
                                <Image
                                    src={`/images/banners/${image}`}
                                    alt="Banner1"
                                    layout="fill"      
                                />
                            </Box>
                            <Box 
                                sx={{ height: "100px" }} className="relative bg-gradient-to-b from-transparent to-sky-100"
                            >
                            </Box>
                        </div>
                    ))}
                </Carousel>  
            </Box>
        </Fragment>
    )
};

export default Banner;