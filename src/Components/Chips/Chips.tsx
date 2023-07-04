import { Chip as MuiChip } from "@mui/material";

export enum ChipLabel {
	normal = "Normal",
	fire = "Fire",
	water = "Water",
}

export enum ChipColor {
	normal = "gray",
	fire = "red",
	water = "blue",
}

const Chip = () => {
	return <MuiChip color='primary' label='hei' />;
};

export default Chip;
