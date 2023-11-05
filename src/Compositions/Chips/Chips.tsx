import { Chip as MuiChip } from "@mui/material";

export enum ChipLabel {
	normal = "Normal",
	fire = "Fire",
	water = "Water",
	grass = "Grass",
	poison = "Poison",
}

const Chip = () => {
	return <MuiChip color='primary' label='hei' />;
};

export default Chip;
