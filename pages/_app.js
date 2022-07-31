import '../styles/globals.css';
import { StyledEngineProvider } from '@mui/material/styles';
import Head from "next/head";

import Layout from "../components/layout/layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>
      <StyledEngineProvider injectFirst>
        <Component {...pageProps} />
      </StyledEngineProvider>
    </Layout>
  )
};

export default MyApp;