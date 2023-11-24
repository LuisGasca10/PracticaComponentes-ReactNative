import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/appTheme';
import { ThemeContext } from '../context/themeContext/ThemeContext';

interface Props {
    text: string;
}

const HeaderTitle = ({ text }: Props) => {
    const { theme: { colors } } = useContext(ThemeContext)
    const { top } = useSafeAreaInsets();

    return (
        <View style={{ marginTop: top + 20, marginBottom: 20 }}>
            <Text style={{ ...styles.title, color: colors.text }}>{text}</Text>
        </View>
    )
}

export default HeaderTitle

