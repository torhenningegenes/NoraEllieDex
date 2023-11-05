import {
	createRoutesFromElements,
	createBrowserRouter,
	Route,
} from "react-router-dom";
import ErrorPage from "./error-page";
import Start from "../Screens/Start/Start";
import { POKEMON } from "../Constants/Routes";
import PokemonDetails from "../Screens/PokemonDetails";
import TestScreen from "../Screens/TestScreen/TestScreen";
import Root from "./Root";

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<Root />} errorElement={<ErrorPage />}>
			<Route errorElement={<ErrorPage />}>
				<Route index element={<Start />} />
				<Route path={POKEMON} element={<TestScreen />} />
				<Route path={`${POKEMON}/:id`} element={<PokemonDetails />} />
			</Route>
		</Route>
	)
);
