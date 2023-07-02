import { Outlet } from "react-router-dom";
import AppProvider from "../AppProvider";

export default function Root() {
	return (
		<AppProvider>
			<Outlet />
		</AppProvider>
	);
}
