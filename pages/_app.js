import '../styles/globals.css';
import Head from "next/head";
import { StyledEngineProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import { SWRConfig } from 'swr';

import Layout from "../components/ui/layout";
import store from '../store';
import CustomizedSnackbar from '../components/ui/customized-snackbar';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </Head>
        
        <SWRConfig value={{ dedupingInterval: 10000 }}>
          <StyledEngineProvider injectFirst>
            <Component {...pageProps} />
          </StyledEngineProvider>
        </SWRConfig>
      </Layout>

      <CustomizedSnackbar />
    </Provider>
  )
};

export default MyApp;