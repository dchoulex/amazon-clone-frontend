import { Fragment } from "react";
import { useRouter } from "next/router";

import { ThemeProvider } from "@mui/styles";
import Box from '@mui/material/Box';

import Header from "../header/header";
import Footer from "../footer/footer";
import theme from "./theme";

function Layout(props) {
    const router = useRouter();

    return (
        <Box className="flex flex-col h-screen">
            <ThemeProvider theme={theme}>
                {router.pathname.includes("/auth") || router.pathname.includes("/checkout") ? 
                    <main>{props.children}</main> :
                    
                    <Fragment>
                        <Box className="flex flex-col flex-1">
                            <Header />
    
                            <main>{props.children}</main>

                            <Box className="bg-gray-200 flex flex-col flex-1"></Box>
                        </Box>
    
                        <Footer />
                    </Fragment>
                }
            </ThemeProvider>
        </Box>
    );
};

export default Layout;