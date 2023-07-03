import { Card } from "../../Components/Card";
import { PrimaryButton } from "../../Components/Buttons";
import { Box } from "@mui/material";
export default function PokemonOverviewCard() {
	return (
		<Card raised sx={{ height: "21.875rem", width: "21.875rem" }}>
			<Box
				sx={{
					height: "100%",
					width: "100%",
					background:
						"rgb(84,238,247) linear-gradient(0deg, rgba(84,238,247,0.563484768907563) 0%, rgba(242,84,247,0.7119441526610644) 100%)",
				}}
			>
				Title
				<PrimaryButton>Se mer</PrimaryButton>
			</Box>
		</Card>
	);
}
