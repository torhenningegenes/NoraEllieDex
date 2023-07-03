import { useQuery } from "@tanstack/react-query";
import { PokemonClient } from "pokenode-ts";

const useGetPokemonById = (enabled = true, id: number) => {
	const pokemonClient = new PokemonClient();

	return useQuery({
		queryKey: ["pokemon by id"],
		queryFn: async () => {
			const result = await pokemonClient.getPokemonById(id);
			return result;
		},
		enabled,
		staleTime: 1000 * 60 * 5,
	});
};

export default useGetPokemonById;
