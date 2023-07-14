import { Meta } from "@storybook/react";
import Chip from "./Chips";
import { ChipLabel } from "./Chips";
const meta = {
	title: "Chips",
	component: Chip,
	argTypes: {},
} satisfies Meta<typeof Chip>;

export default meta;

export const Primary = {
	render: () => <Chip />,
};
