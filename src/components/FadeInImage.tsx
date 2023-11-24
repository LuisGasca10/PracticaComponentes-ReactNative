import { View, Text, Animated, ActivityIndicator, StyleProp, ImageStyle } from 'react-native';
import React, { useState } from 'react'
import useAnimation from '../hooks/useAnimation';

interface Props {
    uri: string;
    style?: StyleProp<ImageStyle>;
}


const FadeInImage = ({ uri, style }: Props) => {
    const { opacity, fadeIn } = useAnimation();
    const [isloading, setIsloading] = useState(true);

    const finishLoading = () => {
        setIsloading(!isloading);
        fadeIn(400)
    }
    return (

        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            {isloading && <ActivityIndicator style={{ position: 'absolute' }} />}

            <Animated.Image
                source={{ uri }}
                onLoadEnd={finishLoading}
                style={{
                    ...style as any,
                    opacity
                }}
            />
        </View>
    )
}

export default FadeInImage