import { Theme } from "@react-navigation/native"

type ThemeAction =
    | { type: 'ligth_theme' }
    | { type: 'dark_theme' }


export interface ThemeState extends Theme {
    currentTheme: 'ligth_theme' | 'dark_theme',
    dividerColor: string;
}

export const lightTheme: ThemeState = {
    currentTheme: "ligth_theme",
    dark: false,
    colors: {
        primary: '#084F6A',
        background: 'white',
        card: 'blue',
        text: 'black',
        border: 'orange',
        notification: 'teal',
    },
    dividerColor: 'rgba(0,0,0,0.7)'
}


export const darkTheme: ThemeState = {
    currentTheme: "dark_theme",
    dark: true,
    colors: {
        primary: '#75CEDB',
        background: 'black',
        card: 'blue',
        text: 'white',
        border: 'orange',
        notification: 'teal',
    },
    dividerColor: 'rgba(255,255,255,0.8)'
}

export const ThemeReducer = (state: ThemeState, action: ThemeAction): ThemeState => {
    switch (action.type) {
        case "ligth_theme":
            return {
                ...lightTheme
            };
        case "dark_theme":
            return {
                ...darkTheme
            };

        default:
            return state;
    }

}