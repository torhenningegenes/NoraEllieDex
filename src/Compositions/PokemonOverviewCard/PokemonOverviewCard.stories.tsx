import { Meta, StoryObj } from "@storybook/react";
import PokemonOverviewCard from "./PokemonOverviewCard";
import theme from "../../Components/Theme/defaultTheme";
import { ThemeProvider } from "@emotion/react";

const meta = {
	title: "PokemonOverviewCard",
	component: PokemonOverviewCard,
	argTypes: {},
} satisfies Meta<typeof PokemonOverviewCard>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
	render: () => (
		<ThemeProvider theme={theme}>
			<PokemonOverviewCard />
		</ThemeProvider>
	),
};
