import { Fragment } from "react";
import Image from "next/image";
import Carousel from 'react-material-ui-carousel';
import Box from "@mui/material/Box";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const bannerImages = ["bannerOne.jpg", "bannerTwo.jpg", "bannerThree.jpg"];

function Banner() {
    return (
        <Fragment>
            <Box className="absolute w-screen h-[300px]">                  
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
                    {bannerImages.map(image => (
                        <Box 
                            key={`img-${image}`}
                            sx={{ height: "600px"}}
                        >
                            <img
                                src="/images/banners/bannerOne.jpg"
                                alt="Banner1"
                                className="h-[300px] w-screen"        
                            />
                            <Box 
                                sx={{ height: "200px" }} className="relative top-[-200px] bg-gradient-to-b from-transparent to-sky-100"
                            >
                            </Box>
                        </Box>
                    ))}
                </Carousel>  
            </Box>
        </Fragment>
    )
};

export default Banner;