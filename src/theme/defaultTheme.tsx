import { ThemeOptions, createTheme } from '@mui/material';

export const defaultTheme: ThemeOptions = createTheme({
    components: {
        MuiTextField: {
            defaultProps: {
                InputLabelProps: {
                    shrink: true,
                }
            }
        }
    }
});
