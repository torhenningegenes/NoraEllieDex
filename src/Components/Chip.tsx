// import { Chip as MuiChip, styled, ChipProps } from "@mui/material";

// export enum ChipColor {
// 	normal = "gray",
// 	fire = "#FF8E3D",
// 	water = "blue",
// 	psycic = "purple",
// }

// interface StyleChipProps extends ChipProps {
// 	typeBackgroundColor: ChipColor;
// }

// // This chip will get the color of the pokemon type from props and set the color of the chip accordingly
// export const Chip = styled(MuiChip)(
// 	({ typeBackgroundColor }: StyleChipProps) => ({
// 		color: "white",
// 		backgroundColor: (typeBackgroundColor: ChipColor) => ChipColor.`${typeBackgroundColor}`,
// 	})
// );

import { Chip as MuiChip, styled, ChipProps } from "@mui/material";

export enum ChipColor {
	normal = "gray",
	fire = "#FF8E3D",
	water = "blue",
	psychic = "purple", // Corrected the spelling of "psychic"
	grass = "green",
	electric = "yellow",
	flying = "lightblue",
	dragon = "#9c5107",
	steele = "#a8a8a8",
	ghost = "#b456fc",
	poison = "#aefc56",
}

interface StyleChipProps extends ChipProps {
	typeBackgroundColor: keyof typeof ChipColor;
}

// This chip will get the color of the pokemon type from props and set the color of the chip accordingly
export const Chip = styled(MuiChip)(
	({ typeBackgroundColor }: StyleChipProps) => ({
		color: "white",
		backgroundColor: ChipColor[typeBackgroundColor], // Removed unnecessary syntax around typeBackgroundColor
		width: "5rem",
		boxShadow: "10px",
	})
);
