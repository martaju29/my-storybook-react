import { FC } from 'react'
import './MyLabel.css'
import { AllCaps } from '../stories/MyLabel.stories';

interface Props {
    /**
     * Text to display
     */
    label: string

    /**
     * Label size
     */
    size?: 'normal' | 'h1' | 'h2' | 'h3',

    /**
     * Capitalizr all letters
     */
    allCaps?: boolean

    /**
     * Label color
     */
    color?: 'text-primary' | 'text-secondary' | 'text-tertiary'

    /**
     * Font color
     */
    fontColor?: string
}

export const MyLabel: FC<Props> = ({ 
        label, 
        size = 'normal', 
        allCaps = false, 
        color, 
        fontColor = ''
    }) => {
  return (
    <span className={`${size} ${color} label`} style={ { color: fontColor } }>{ allCaps ? label.toUpperCase() : label }</span>
  )
}
