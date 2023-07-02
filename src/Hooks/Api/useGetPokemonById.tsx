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

// import { GenericListSortParams, VehicleFilters } from '@ottomobility/client/dist/models';
// import { useQuery } from '@tanstack/react-query';
// import { useSnackbar } from 'notistack';
// import { useTranslation } from 'react-i18next';
// import OttoClient from 'src/providers/OttoProvider';
// import { displayErrorMessage } from 'src/util/error';

// type UseVehicleArgs = {
//   skip?: string;
//   take?: string;
//   filters?: VehicleFilters;
//   sort?: GenericListSortParams;
//   enabled?: boolean;
// };

// export const useVehicles = ({ filters, skip, sort, take, enabled = true }: UseVehicleArgs) => {
//   const { t } = useTranslation();
//   const { enqueueSnackbar } = useSnackbar();

//   return useQuery({
//     queryKey: ['vehicles', { filters, skip, sort, take }],
//     queryFn: () =>
//       OttoClient.getInstance()
//         .vehicles()
//         .getVehicles(undefined, skip, take, filters, undefined, sort)
//         .then((result) => result.data),
//     enabled,
//     onError: (error) => {
//       displayErrorMessage({ error, enqueueSnackbar, errorMessageFallback: t('messages.vehicle_get_error') });
//     },
//   });
// };
