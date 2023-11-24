import { Platform, StyleSheet, Switch, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import HeaderTitle from '../components/HeaderTitle';
import CustomSwitch from '../components/CustomSwitch';
import { ThemeContext } from '../context/themeContext/ThemeContext';

const SwitchScreen = () => {
    const [state, setState] = useState({
        isActive: false,
        isHungry: true,
        isHappy: true,
    })

    const { isActive, isHappy, isHungry } = state
    const { theme: { colors } } = useContext(ThemeContext);
    const onChange = (value: boolean, field: string) => {
        setState({
            ...state,
            [field]: value
        })
    }

    return (
        <View style={{ flex: 1, marginHorizontal: 20 }}>
            <HeaderTitle text='Switch' />


            <View>
                <View style={styles.switchRow} >

                    <Text style={{ ...styles.switchText, color: colors.text }}>isActive</Text>
                    <CustomSwitch isOn={isActive} onChange={(value) => onChange(value, 'isActive')} />

                </View>
                <View style={styles.switchRow} >

                    <Text style={{ ...styles.switchText, color: colors.text }}>isHungry</Text>
                    <CustomSwitch isOn={isHungry} onChange={(value) => onChange(value, 'isHungry')} />

                </View>
                <View style={styles.switchRow} >

                    <Text style={{ ...styles.switchText, color: colors.text }}>isHappy</Text>
                    <CustomSwitch isOn={isHappy} onChange={(value) => onChange(value, 'isHappy')} />

                </View>

            </View>






            <Text style={{ ...styles.switchText, color: colors.text }}>
                {JSON.stringify(state, null, 5)}
            </Text>

        </View>
    );
};


const styles = StyleSheet.create({
    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10
    },

    switchText: {
        fontSize: 25,
        color: 'black'
    }
});

export default SwitchScreen

