import { Grid } from "@mui/material";
import {
	PrimaryButton,
	SecondaryButton,
} from "../../Components/Buttons/Buttons";
import Screen from "../../Compositions/Screen";
import { Pokemon } from "pokenode-ts";
import usePokemon from "../../Hooks/Api/usePokemon";
const Start = () => {
	// const { data, isLoading } = useGetPokemon(true, 6);

	// console.log(data?.sprites.other?.["official-artwork"].front_default);

	const { data, isLoading } = usePokemon(true, 300);
	if (!data) return null;

	const bulbasaur: Pokemon = data.results[0];
	console.log(data.results);

	return (
		<Screen>
			{isLoading && <h1>Loading...</h1>}
			<Grid container columns={24} spacing={3}>
				<Grid item xs={12} md={6}>
					<SecondaryButton>Se mer</SecondaryButton>
				</Grid>
				<Grid item xs={12} md={6}>
					<PrimaryButton variant='contained'>Se mer</PrimaryButton>
				</Grid>
				<Grid item xs={12} md={6}>
					<PrimaryButton variant='contained'>Se mer</PrimaryButton>
				</Grid>
			</Grid>
		</Screen>
	);
};

export default Start;

// TODO we only get the url to fetch the pokemon, we pass this to the pokemon details page.
