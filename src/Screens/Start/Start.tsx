import { Grid, Stack, Typography } from "@mui/material";
import Screen from "../../Compositions/Screen";
import { Pokemon } from "pokenode-ts";
import usePokemon from "../../Hooks/Api/usePokemon";
import { pokemonNames } from "../../Constants/PokemonNames";
import PokemonOverviewCard from "../../Compositions/PokemonOverviewCard/PokemonOverviewCard";

interface PokemonResponse {
	name: string;
	url: string;
}

const Start = () => {
	const { data, isLoading } = usePokemon(true, 1200);
	if (!data) return null;

	const pokemons = data.results.filter((pokemon: Pokemon) =>
		pokemonNames.includes(pokemon.name)
	);

	console.log(pokemons);

	return (
		<Screen>
			{isLoading && <h1>Loading...</h1>}
			<Stack direction='column' spacing={2} display='flex' alignItems='center'>
				<Typography variant='h1'>NoraEllieDex</Typography>
				<Grid
					container
					columns={24}
					m={0}
					alignContent='center'
					justifyContent='center'
				>
					{pokemons.map((pokemon: PokemonResponse, index: number) => (
						<Grid
							item
							xs={24}
							md={12}
							key={index}
							mt={3}
							display='flex'
							justifyContent='center'
							alignContent={"center"}
							alignItems={"center"}
						>
							<PokemonOverviewCard
								name={pokemon.name}
								url={pokemon.url}
								queryKey={pokemon.name}
							/>
						</Grid>
					))}
				</Grid>
			</Stack>
		</Screen>
	);
};

export default Start;

// TODO we only get the url to fetch the pokemon, we pass this to the pokemon details page.
