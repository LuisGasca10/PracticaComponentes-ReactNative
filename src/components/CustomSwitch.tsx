import { View, Text, Switch, Platform } from 'react-native'
import React, { useContext, useState } from 'react'
import { ThemeContext } from '../context/themeContext/ThemeContext';

interface Prosp {
    isOn: boolean;
    onChange: (value: boolean) => void;
}

const CustomSwitch = ({ isOn, onChange }: Prosp) => {

    const [isEnabled, setIsEnabled] = useState(isOn);
    const { theme: { colors } } = useContext(ThemeContext);
    const toggleSwitch = () => {
        setIsEnabled(!isEnabled);
        onChange(!isEnabled)
    };

    return (

        <View>

            <Switch
                trackColor={{ false: '#D9D9DB', true: colors.primary }}
                thumbColor={(Platform.OS = 'android') ? colors.primary : ''}
                // ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />

        </View>
    )
}

export default CustomSwitch