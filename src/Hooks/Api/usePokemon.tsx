import { useQuery } from "@tanstack/react-query";

const usePokemon = (enabled = true, limit: number) => {
	return useQuery({
		queryKey: ["pokemon by id"],
		queryFn: async () => {
			const result = await fetch(
				`https://pokeapi.co/api/v2/pokemon/?limit=${limit}`
			);
			return result.json();
		},
		enabled,
		staleTime: 1000 * 60 * 5,
	});
};

export default usePokemon;
