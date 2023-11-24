import { View, Text, SafeAreaView, ImageSourcePropType, Dimensions, Image, StyleSheet, TouchableOpacity, Animated } from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import React, { useContext, useRef, useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { StackNavigationProp } from '@react-navigation/stack'
import { ParamsStackList } from '../routes/StackNav'
import { useNavigation } from '@react-navigation/native'
import useAnimation from '../hooks/useAnimation'
import { ThemeContext } from '../context/themeContext/ThemeContext'

type NavProp = StackNavigationProp<ParamsStackList>

interface Slide {
    title: string;
    desc: string;
    img: ImageSourcePropType
}

const { height: screenHeight, width: screenWidth } = Dimensions.get('window')

const items: Slide[] = [
    {
        title: 'Titulo 1',
        desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
        img: require('../assets/slide-1.png')
    },
    {
        title: 'Titulo 2',
        desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
        img: require('../assets/slide-2.png')
    },
    {
        title: 'Titulo 3',
        desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
        img: require('../assets/slide-3.png')
    },
]

const SlidesScreen = () => {

    const nav = useNavigation<NavProp>();
    const { fadeIn, opacity } = useAnimation();
    const [activeIndex, setActiveIndex] = useState(0);
    const isVisible = useRef(false);

    const { theme: { colors } } = useContext(ThemeContext);


    const renderItem = (item: Slide) => {
        return (
            <View style={{
                flex: 1,
                backgroundColor: colors.background,
                borderRadius: 5,
                padding: 40,
                justifyContent: 'center'
            }}>

                <Image
                    source={item.img}
                    style={{
                        width: 350,
                        height: 400,
                        resizeMode: 'center'
                    }}
                />

                <Text style={{ ...styles.title, color: colors.primary }}>{item.title}</Text>
                <Text style={{ ...styles.subtitle, color: colors.text }}>{item.desc}</Text>
            </View>
        );
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>

            <Carousel
                // ref={(c) => { this._carousel = c; }}
                data={items}
                renderItem={({ item }) => renderItem(item)}
                sliderWidth={screenWidth}
                itemWidth={screenWidth}
                layout='default'
                onSnapToItem={(item) => {
                    setActiveIndex(item)

                    if (item === 2) {
                        isVisible.current = true;
                        fadeIn()
                    }
                }}
            />

            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginHorizontal: 25
            }}>

                <Pagination
                    dotsLength={items.length}
                    activeDotIndex={activeIndex}
                    dotStyle={{
                        height: 10,
                        width: 10,
                        borderRadius: 10,
                        backgroundColor: colors.primary
                    }}
                />




                <Animated.View
                    style={{ opacity }}
                >

                    <TouchableOpacity
                        style={{
                            backgroundColor: colors.primary,
                            flexDirection: 'row',
                            padding: 9,
                            width: 140,
                            borderRadius: 8,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                        activeOpacity={0.8}
                        touchSoundDisabled={true}
                        onPress={() => {
                            if (isVisible.current) {
                                nav.navigate('Home');
                            }

                        }}
                    >
                        <Text
                            style={{
                                color: 'white',
                                fontSize: 20

                            }}
                        >Home</Text>
                        <Icon
                            name='chevron-forward-outline'
                            color={'white'}
                            size={30}
                        />

                    </TouchableOpacity>

                </Animated.View>

            </View>

        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#5856d6'
    },
    subtitle: {
        fontSize: 16
    }
});

export default SlidesScreen