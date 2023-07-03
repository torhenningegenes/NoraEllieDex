import { Meta, StoryObj } from "@storybook/react";
import PokemonOverviewCard from "./PokemonOverviewCard";

const meta = {
	title: "PokemonOverviewCard",
	component: PokemonOverviewCard,
	argTypes: {},
} satisfies Meta<typeof PokemonOverviewCard>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = { render: () => <PokemonOverviewCard /> };
