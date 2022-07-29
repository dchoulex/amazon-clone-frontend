import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Button from "@mui/material/Button";

function HomePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">
        This is home page
      </h1>
      <Button variant="contained" className="bg-black">
        Hello
      </Button>
    </div>
  )
};

export default HomePage;