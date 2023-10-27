import { MantineProvider, NumberInput, createTheme } from '@mantine/core';
import { FC } from 'react';

interface Props {
    /**
     * Text to display
     */
    label?: string
}

const theme = createTheme({
    /** Put your mantine theme override here */
    primaryColor: 'blue',
    defaultRadius: 'md',
});

export const MyNumberInput : FC<Props> = () => {
  return (
    <MantineProvider theme={theme}>
        <NumberInput
            label="Input label"
            description="Input description"
            placeholder="Input placeholder"
            thousandSeparator=","
        />
    </MantineProvider>
  );
}