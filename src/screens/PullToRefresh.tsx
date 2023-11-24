import { View, Text, ScrollView, RefreshControl } from 'react-native'
import React, { useContext, useState } from 'react'
import HeaderTitle from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'
import { ThemeContext } from '../context/themeContext/ThemeContext'


const PullToRefresh = () => {

    const [refreshing, setRefreshing] = useState(false);

    const [data, setData] = useState<string>()
    const { theme: { colors, dark } } = useContext(ThemeContext);
    const onRefresh = () => {
        setRefreshing(true);

        setTimeout(function () {
            console.log('TERMINO');
            setRefreshing(false);
            setData('Hola Mundo');
        }, 2000);
    }

    return (

        <ScrollView
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    colors={[colors.primary]}
                    progressBackgroundColor={colors.text}
                    tintColor={(dark) ? 'white' : 'black'}
                />
            }
        >

            <View style={styles.globalMargin}>
                <HeaderTitle text='Pull to Refresh' />

                {
                    data && <HeaderTitle text={data} />
                }
            </View>

        </ScrollView>

    )
}

export default PullToRefresh