import { Button, ButtonProps } from "@mui/material";
import { styled } from "@mui/material/styles";

export const PrimaryButton = styled(Button)<ButtonProps>(() => ({
	borderRadius: "25px",
	boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
	minWidth: "11rem",
	minHeight: "3rem",
	backgroundColor: "#5E00F4",
	color: "#fff",
	"&:hover": {
		backgroundColor: "#af80fa",
		color: "#fff",
	},
}));

export const SecondaryButton = styled(Button)<ButtonProps>(() => ({
	borderRadius: "25px",
	boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
	minWidth: "11rem",
	minHeight: "3rem",
	backgroundColor: "#0095F4",
	color: "#fff",
	"&:hover": { backgroundColor: "#99d5fb", color: "#fff" },
}));
