import { Card as MuiCard, PaperProps, styled } from "@mui/material";

export const Card = styled(MuiCard)<PaperProps>(() => ({
	borderRadius: "25px",
	p: 2,
	height: "21.875rem",
	width: "21.875rem",
}));
