import { Meta, StoryObj } from "@storybook/react";
import { MyLabel } from "../components/MyLabel";

const meta = {
    title: 'UI/labels/MyLabel',
    component: MyLabel,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        size: { control: 'inline-radio' },
        fontColor: { control: 'color' }, //If the prop is a color, use the color control automatically, use it for other types as well
    },
} satisfies Meta<typeof MyLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        label: 'Basic label',
    }
};

export const AllCaps: Story = {
    args: {
        label: 'All Caps label',
        allCaps: true,
    }
};

export const Seconday: Story = {
    args: {
        label: 'Secondary label',
        color: 'text-secondary'
    }
};

export const CustomColor: Story = {
    args: {
        label: 'Custom color label',
        fontColor: '#ff0000'
    }
};

export const CustomBackgroundColor: Story = {
    args: {
        label: 'Custom color label',
        fontColor: '#ffffff',
        backgroundColor: '#5517ac'
    }
};