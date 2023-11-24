import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { styles } from '../theme/appTheme';;
import FlatListMenuItem from '../components/FlatListMenuItem';
import { menuItems } from '../data/data';
import HeaderTitle from '../components/HeaderTitle';
import { ItemSeparator } from '../components/ItemSeparator';


const HomeScreen = () => {

    return (
        <View style={{ flex: 1, ...styles.globalMargin }}>



            <FlatList
                data={menuItems}
                renderItem={({ item }) => <FlatListMenuItem menuItem={item} />}
                keyExtractor={(item) => item.name}
                ListHeaderComponent={() => <HeaderTitle text='Opciones de menu' />}
                ItemSeparatorComponent={ItemSeparator}
            />
        </View>
    )
}

export default HomeScreen

