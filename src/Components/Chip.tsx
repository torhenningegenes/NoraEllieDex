import { Chip as MuiChip, styled, ChipProps } from "@mui/material";

export enum ChipColor {
	normal = "gray",
	fire = "#FF8E3D",
	water = "blue",
	psychic = "purple",
	grass = "#0a6721",
	dragon = "#3db8ff",
	flying = "rgb(2,0,36), linear-gradient(0deg, rgba(187,34,195,0.14086332775297616) 0%, rgba(45,252,253,0.6618717311143207) 100%)",
	ghost = "#a970ff",
	poison = "#70ff94",
	electric = "#ffe03d",
	steel = "#656565",
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
		boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.175)",
	})
);
