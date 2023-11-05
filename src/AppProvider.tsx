import { Theme } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
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
			<QueryClientProvider client={queryClient}>
				{children}
				<ReactQueryDevtools initialIsOpen={false} />
			</QueryClientProvider>
		</>
	);
};

export default AppProvider;
