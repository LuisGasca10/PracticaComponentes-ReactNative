import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import HeaderTitle from '../components/HeaderTitle'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { styles } from '../theme/appTheme';
import { ThemeContext } from '../context/themeContext/ThemeContext';

const ChangeScreeenTheme = () => {

    const { setDarkTheme, setLightTheme, theme: { colors } } = useContext(ThemeContext);
    return (
        <View style={styles.globalMargin}>
            <HeaderTitle text='Theme' />
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around'
                }}
            >

                <TouchableOpacity
                    onPress={setDarkTheme}
                    activeOpacity={0.9}
                    style={{
                        backgroundColor: colors.primary,
                        justifyContent: 'center',
                        width: 150,
                        height: 50,
                        borderRadius: 20,

                    }}>
                    <Text
                        style={{
                            color: '#fff',
                            textAlign: 'center',
                            fontSize: 22
                        }}
                    >Dark</Text>
                </TouchableOpacity>


                <TouchableOpacity
                    onPress={setLightTheme}
                    activeOpacity={0.9}
                    style={{
                        backgroundColor: colors.primary,
                        justifyContent: 'center',
                        width: 150,
                        height: 50,
                        borderRadius: 20,

                    }}>
                    <Text
                        style={{
                            color: '#fff',
                            textAlign: 'center',
                            fontSize: 22
                        }}
                    >Light</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default ChangeScreeenTheme