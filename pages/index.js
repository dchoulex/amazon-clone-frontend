import Head from 'next/head'
import Image from 'next/image';
import * as React from "react";
import styles from '../styles/Home.module.css';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import Banner from "../components/ui/banner";
import ProductFeed from "../components/product-feed/product-feed";

function HomePage() {
  return (
    <React.Fragment>
      <Box className="w-screen bg-gradient-to-b from-sky-100 to-gray-100">
        <Banner />
        <div className="relative h-[200px] z-[-10]"></div>
        <ProductFeed />
      </Box>
    </React.Fragment>
  )
};

export default HomePage;