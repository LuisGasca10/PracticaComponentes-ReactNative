import { View, Text, StyleSheet, Animated, Button, Easing } from 'react-native'
import React, { useContext, useRef } from 'react'
import useAnimation from '../hooks/useAnimation'
import { ThemeContext } from '../context/themeContext/ThemeContext';

const Animation101Screen = () => {

    const { fadeIn, fadeOut, opacity, position, startMovingPosition } = useAnimation();
    const { theme: { colors } } = useContext(ThemeContext);
    return (
        <View style={styles.conatiner}>
            <Animated.View style={{
                ...styles.purpleBox,
                backgroundColor: colors.primary,
                opacity,
                transform: [{ translateY: position }]
            }} />

            <Button title='Fade In'
                onPress={() => {
                    fadeIn()
                    startMovingPosition(-100);
                }}
                color={colors.primary}
            />

            <Button title='Fade out'
                onPress={
                    fadeOut}
                color={colors.primary}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    purpleBox: {
        height: 150,
        width: 150
    }
});

export default Animation101Screen