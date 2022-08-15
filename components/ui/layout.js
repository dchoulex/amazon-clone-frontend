import { Fragment } from "react";
import { useRouter } from "next/router";
import Header from "../header/header";
import Footer from "../footer/footer";
import theme from "./theme";

import { ThemeProvider } from "@mui/styles";

function Layout(props) {
    const router = useRouter();

    return (
        <Fragment>
            <ThemeProvider theme={theme}>
                {router.pathname.includes("/auth") || router.pathname.includes("/checkout") ? 
                    <main>{props.children}</main> :

                    <Fragment>
                        <Header />

                        <main>{props.children}</main>

                        <Footer />
                    </Fragment>
                }
            </ThemeProvider>
        </Fragment>
    );
};

export default Layout;