import * as React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import theme from "../ui/theme";

import { ThemeProvider } from "@mui/styles";

function Layout(props) {
    return (
        <React.Fragment>
            <ThemeProvider theme={theme}>
                <Navbar />
                <p>This is layout</p>
                <main>{props.children}</main>
                <Footer />
            </ThemeProvider>
        </React.Fragment>
    );
};

export default Layout;