import { Grid } from "@mui/material";
import { PrimaryButton } from "../../Components/Buttons/Buttons";
import Screen from "../../Compositions/Screen";
import { Pokemon } from "pokenode-ts";
import usePokemon from "../../Hooks/Api/usePokemon";
import { pokemonNames } from "../../Constants/PokemonNames";
import PokemonOverviewCard from "../../Compositions/PokemonOverviewCard/PokemonOverviewCard";

const Start = () => {
	const { data, isLoading } = usePokemon(true, 300);
	if (!data) return null;

	const pokemons = data.results.filter((pokemon: Pokemon) =>
		pokemonNames.includes(pokemon.name)
	);

	console.log(pokemons);

	return (
		<Screen>
			{isLoading && <h1>Loading...</h1>}
			<Grid container columns={24} spacing={3}>
				{pokemons.map((pokemon: Pokemon, index: number) => (
					<Grid item xs={12} md={6} key={index}>
						{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
					</Grid>
				))}
				<Grid item xs={12} md={6}>
					<PrimaryButton variant='contained'>Se mer</PrimaryButton>
				</Grid>
				<Grid item xs={12} md={6}>
					<PrimaryButton variant='contained'>Se mer</PrimaryButton>
				</Grid>
			</Grid>
			<PokemonOverviewCard />
		</Screen>
	);
};

export default Start;

// TODO we only get the url to fetch the pokemon, we pass this to the pokemon details page.
