import { Typography } from "@mui/material";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
const PokemonDetails = () => {
	const { id } = useParams();
	console.log(id);

	return (
		<>
			<h1>hello pokemon details</h1>
			<Link to={"/"}>
				<Typography variant='h2'>home</Typography>
			</Link>
		</>
	);
};

export default PokemonDetails;
