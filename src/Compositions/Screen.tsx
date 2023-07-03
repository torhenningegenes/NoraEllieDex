import { Box, Container } from "@mui/material";
import { ReactNode } from "react";

const Screen = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<Box
				display='flex'
				alignItems='center'
				justifyContent='center'
				width='100vw'
			>
				<Container
					maxWidth={false}
					sx={{
						margin: 0,
						padding: 4,
						boxSizing: "border-box",
						bgcolor: "#edf2ff",
						height: "100%",
					}}
				>
					{children}
				</Container>
			</Box>
		</>
	);
};

export default Screen;
