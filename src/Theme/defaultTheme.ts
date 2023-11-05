import { createTheme, responsiveFontSizes } from "@mui/material";
import { typography } from "./typography";

const baseTheme = createTheme({
	typography,
});

const theme = responsiveFontSizes(
	createTheme({
		...baseTheme,
	})
);

export default theme;
