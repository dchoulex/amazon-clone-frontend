import { Fragment } from "react";
import Head from 'next/head'
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import Banner from "../components/main-product/banner";
import MainProductInfo from "../components/main-product/main-product-info";

function HomePage() {
  return (
    <Fragment>
      <Box className="w-screen bg-gradient-to-b from-sky-100 to-gray-100">
        <Banner />

        <div className="relative h-[200px] z-[-10]"></div>

        <MainProductInfo />
      </Box>
    </Fragment>
  )
};

export default HomePage;