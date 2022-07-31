import Head from 'next/head'
import Image from 'next/image';
import * as React from "react";
import styles from '../styles/Home.module.css';
import Button from "@mui/material/Button";

function HomePage() {
  return (
    <React.Fragment>
      <h1 className="text-3xl font-bold underline">
        This is home page
      </h1>
      <Button variant="contained" className="bg-amazon_blue-dark">
        Hello
      </Button>
    </React.Fragment>
  )
};

export default HomePage;