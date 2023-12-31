import { useContext } from "react";
import { View } from "react-native";
import { ThemeContext } from "../context/themeContext/ThemeContext";

export const ItemSeparator = () => {
    const { theme: { colors, dividerColor } } = useContext(ThemeContext);
    return (
        <View
            style={{ borderBottomWidth: 1, borderBottomColor: dividerColor, opacity: 0.4, marginVertical: 8 }}
        />
    );
}
