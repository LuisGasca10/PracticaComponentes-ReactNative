import { SectionList, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import HeaderTitle from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'
import { casas } from '../data/data'
import { ItemSeparator } from '../components/ItemSeparator'
import { ThemeContext } from '../context/themeContext/ThemeContext'

const SectionListScreen = () => {

    const { theme: { colors } } = useContext(ThemeContext)

    return (
        <View style={{ ...styles.globalMargin, flex: 1 }}>
            <SectionList
                sections={casas}
                ListHeaderComponent={() => <HeaderTitle text='Custom List' />}
                ListFooterComponent={() => <HeaderTitle text={`Total de Casas ${casas.length}`} />}
                renderItem={({ item }) => <Text style={{ color: colors.text }}>{item}</Text>}
                keyExtractor={(item, index) => item + index}
                stickySectionHeadersEnabled
                renderSectionHeader={({ section }) => (
                    <View style={{ backgroundColor: colors.background }}>

                        <HeaderTitle text={section.casa} />
                    </View>
                )}

                renderSectionFooter={({ section }) => (
                    <HeaderTitle text={'Total: ' + section.data.length} />
                )}
                SectionSeparatorComponent={() => (<ItemSeparator />)}
                ItemSeparatorComponent={() => (<ItemSeparator />)}
            />
        </View>
    )
}

export default SectionListScreen

