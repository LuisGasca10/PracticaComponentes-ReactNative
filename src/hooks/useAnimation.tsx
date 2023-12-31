import { useRef } from 'react';
import { View, Text, Animated, Easing } from 'react-native'


const useAnimation = () => {

    const opacity = useRef(new Animated.Value(0)).current;
    const position = useRef(new Animated.Value(0)).current;


    const fadeIn = (duration: number = 300) => {
        Animated.timing(opacity, {
            toValue: 1,
            duration,
            useNativeDriver: true
        }).start(({ finished }) => {
            console.log('finalizada');
        });
    }

    const fadeOut = () => {
        Animated.timing(opacity, {
            toValue: 0,
            duration: 700,
            useNativeDriver: true
        }).start();
    }

    const startMovingPosition = (initPosition: number, duration: number = 300) => {
        position.setValue(initPosition);
        Animated.timing(position, {
            toValue: 0,
            duration,
            useNativeDriver: true,
            // easing: Easing.bounce
        }).start()
    }

    return {
        opacity,
        position,
        fadeIn,
        fadeOut,
        startMovingPosition
    }
}

export default useAnimation