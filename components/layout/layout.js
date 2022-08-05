import * as React from "react";
import Header from "./header/header";
import Footer from "./footer/footer";
import theme from "../ui/theme";

import { ThemeProvider } from "@mui/styles";

function Layout(props) {
    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                <Header />
                <main>{props.children}</main>
                <Footer />
            </ThemeProvider>
        </React.Fragment>
    );
};

export default Layout;