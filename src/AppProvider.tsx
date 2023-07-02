import { Theme } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

interface AppProviderProps {
	children: ReactNode;
	// TODO locale?: Locale;
	theme?: Theme;
}

const queryClient = new QueryClient();
const AppProvider = ({ children }: AppProviderProps) => {
	return (
		<>
			<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
		</>
	);
};

export default AppProvider;
