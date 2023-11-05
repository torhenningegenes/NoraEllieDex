import { Box, Container, Typography } from "@mui/material";
import { ReactNode } from "react";
import { TertiaryButton } from "../Components/Buttons";

const NavBar = () => {
	return (
		<Box
			sx={{
				display: "flex",
				p: 2,
				justifyContent: "space-between",
				alignContent: "center",
				alignItems: "center",
			}}
		>
			<Typography>NoraEllieDex</Typography>
			<TertiaryButton>Login</TertiaryButton>
		</Box>
	);
};

const Screen = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<NavBar />
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
