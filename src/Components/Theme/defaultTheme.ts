// import { createTheme } from "@mui/material";
// import { typography } from "./typography";
// import Bangers from "./fonts/Bangers/Bangers-Regular.ttf";

// const bangersFontFace = {
// 	fontFamily: "Bangers",
// 	fontStyle: "normal",
// 	fontDisplay: "swap",
// 	fontWeight: 400,
// 	src: `
//       local('Bangers'),
//       url(${Bangers}) format('truetype')
//     `,
// };
// export const theme = createTheme({
// 	typography,
// 	overrides: {
// 		MuiCssBaseline: {
// 			"@global": {
// 				"@font-face": [bangersFontFace],
// 			},
// 		},
// 	},
// });

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
