import { Fragment } from "react";
import Box from "@mui/material/Box";

import Banner from "../components/home/banner";
import MainProductInfo from "../components/home/main-product-info";

function HomePage() {
  return (
    <Fragment>
      <Box className="bg-gradient-to-b from-sky-100 to-gray-100">
        <Banner />

        <div className="relative h-[200px] z-[-10]"></div>

        <MainProductInfo />
      </Box>
    </Fragment>
  )
};

export default HomePage;