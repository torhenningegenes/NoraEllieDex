import { useQuery } from "@tanstack/react-query";

const useGetPokemonById = (request: string, queryKey: string) => {
	return useQuery({
		queryKey: [queryKey],
		queryFn: async () => {
			const result = await fetch(request).then((res) => res.json());
			return result;
		},
		enabled: true,
	});
};

export default useGetPokemonById;
