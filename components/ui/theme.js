import { createTheme } from "@mui/material/styles";
import { AMAZON_BLUE_LIGHT, AMAZON_BLUE_DARK } from "../../appConfig";

const theme = createTheme({
    palette: {
        amazon_blue: {
            dark: AMAZON_BLUE_DARK,
            light: AMAZON_BLUE_LIGHT
        }
    }
});

export default theme;