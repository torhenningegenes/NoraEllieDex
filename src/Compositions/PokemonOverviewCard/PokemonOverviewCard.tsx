import { ThemeProvider } from "@emotion/react";
import { Card } from "../../Components/Card";
import { Box, Stack, Typography, CardMedia, CardContent } from "@mui/material";
import theme from "../../Components/Theme/defaultTheme";
import { PrimaryButton } from "../../Components/Buttons";
import useSinglePokemon from "../../Hooks/Api/useSinglePokemon";

interface PokemonOverviewCardProps {
	name: string;
	url: string;
	id?: number;
	queryKey: string;
}

const PokemonOverviewCard = ({
	name,
	url,
	queryKey,
}: PokemonOverviewCardProps): JSX.Element => {
	console.log(url);
	const { data: pokemon, isLoading } = useSinglePokemon(url, queryKey);
	return (
		<ThemeProvider theme={theme}>
			{name && !isLoading && (
				<Card raised sx={{ height: "21.875rem", width: "21.875rem" }}>
					<CardContent
						sx={{
							height: "70%",
							width: "100%",
							background:
								"rgb(255, 255, 255) linear-gradient(0deg, rgba(84,238,247,0.563484768907563) 0%, rgba(242, 84, 247, 0.175) 100%)",
						}}
					>
						<Box sx={{ display: "flex", p: 2 }}>
							<Box sx={{ flex: "0 0 auto", marginRight: "auto" }}>
								<Stack direction='column' spacing={2}>
									<CardMedia
										component='img'
										height={170}
										src={
											pokemon.sprites.other["official-artwork"].front_default
										}
										alt='image of a pokemon'
									/>
								</Stack>
							</Box>
							<Box sx={{ flex: "0 0 auto" }}>
								<Stack direction='column' spacing={2}>
									<Box sx={{ bgcolor: "yellow" }}>Chip1</Box>
									<Box sx={{ bgcolor: "yellow" }}>Chip1</Box>
								</Stack>
							</Box>
						</Box>
					</CardContent>
					<CardContent
						sx={{
							pt: "3rem",
							p: 3,
							display: "flex",
							alignItems: "center",
							alignContent: "center",
							justifyContent: "space-between",
						}}
					>
						<Box>
							<Typography variant='subtitle1'>{name.toUpperCase()}</Typography>
						</Box>
						<PrimaryButton>Se mer</PrimaryButton>
					</CardContent>
				</Card>
			)}
		</ThemeProvider>
	);
};

export default PokemonOverviewCard;
