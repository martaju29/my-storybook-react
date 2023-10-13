/// <reference types="react" />
import { StoryObj } from "@storybook/react";
export declare const meta: {
    title: string;
    component: import("react").FC<import("../components/MyLabel").Props>;
    tags: string[];
    parameters: {
        layout: string;
    };
    argTypes: {
        size: {
            control: string;
        };
        fontColor: {
            control: string;
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Basic: Story;
export declare const AllCaps: Story;
export declare const Seconday: Story;
export declare const CustomColor: Story;
export declare const CustomBackgroundColor: Story;
