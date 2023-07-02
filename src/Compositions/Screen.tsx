import { Container } from "@mui/material";
import { ReactNode } from "react";

const Screen = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<Container
				maxWidth={false}
				sx={{
					margin: 0,
					padding: 0,
					boxSizing: "border-box",
					bgcolor: "#edf2ff",
					height: "100vh",
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-around",
					alignItems: "flex-start",
				}}
			>
				{children}
			</Container>
		</>
	);
};

export default Screen;
