import { createContext, useContext, useEffect, useReducer } from "react";
import { Theme } from '@react-navigation/native';
import { ThemeReducer, ThemeState, darkTheme, lightTheme } from "./themeReducer";
import { useColorScheme } from "react-native";

interface ThemeContextProps {
    theme: ThemeState;
    setDarkTheme: () => void;
    setLightTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({ children }: any) => {
    const colorScheme = useColorScheme();
    const [theme, dispatch] = useReducer(ThemeReducer, (colorScheme === 'dark') ? darkTheme : lightTheme) //TODO: Leer el tema global

    useEffect(() => {

        (colorScheme === 'light')
            ? setLightTheme()
            : setDarkTheme();

    }, [colorScheme])


    const setDarkTheme = () => {
        dispatch({ type: "dark_theme" });
    }
    const setLightTheme = () => {
        +
            dispatch({ type: "ligth_theme" });
        console.log('light');
    }

    return (
        <ThemeContext.Provider
            value={{
                theme,
                setLightTheme,
                setDarkTheme
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}