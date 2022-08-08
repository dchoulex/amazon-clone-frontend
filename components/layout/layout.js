import * as React from "react";
import { useRouter } from "next/router";
import Header from "./header/header";
import Footer from "./footer/footer";
import theme from "../ui/theme";

import { ThemeProvider } from "@mui/styles";

function Layout(props) {
    const router = useRouter();

    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                {router.pathname === "/auth/login" ? 
                <main>{props.children}</main> :
                <React.Fragment>
                    <Header />
                    <main>{props.children}</main>
                    <Footer />
                </React.Fragment>}
            </ThemeProvider>
        </React.Fragment>
    );
};

export default Layout;