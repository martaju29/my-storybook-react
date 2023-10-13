import { FC } from 'react';
import './MyLabel.css';
export interface Props {
    /**
     * Text to display
     */
    label: string;
    /**
     * Label size
     */
    size?: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Capitalizr all letters
     */
    allCaps?: boolean;
    /**
     * Label color
     */
    color?: 'text-primary' | 'text-secondary' | 'text-tertiary';
    /**
     * Font color
     */
    fontColor?: string;
    /**
     * Background color
     */
    backgroundColor?: string;
}
export declare const MyLabel: FC<Props>;
