import { useQuery } from "@tanstack/react-query";
import { PokemonClient } from "pokenode-ts";

const usePokemon = (enabled = true, limit: number) => {
	const api = new PokemonClient();
	return useQuery({
		queryKey: ["pokemon by id"],
		queryFn: async () => {
			const result = await api.listPokemons();
			// `https://pokeapi.co/api/v2/pokemon/?limit=${limit}`

			return result;
		},
		enabled,
		staleTime: 1000 * 60 * 5,
	});
};

export default usePokemon;
