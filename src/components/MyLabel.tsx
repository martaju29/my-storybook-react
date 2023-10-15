import { FC } from 'react'
import './MyLabel.css'

export interface Props {
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

    /**
     * Background color
     */
    backgroundColor?: string
}

export const MyLabel: FC<Props> = ({ 
        label, 
        size = 'normal', 
        allCaps = false, 
        color, 
        fontColor = '',
        backgroundColor = 'transparent'
    }) => {
  return (
    <span className={`${size} ${color} label`} style={ { color: fontColor, backgroundColor, padding: '20px' } }>{ allCaps ? label.toUpperCase() : label }</span>
  )
}
