import { View, Text, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { MenuItem } from '../interfaces/interfaces';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StackNavigationProp } from '@react-navigation/stack';
import { ParamsStackList } from '../routes/StackNav';
import { useNavigation, useTheme } from '@react-navigation/native';
import { ThemeContext } from '../context/themeContext/ThemeContext';
interface Props {
  menuItem: MenuItem;
}
type NavigationProps = StackNavigationProp<ParamsStackList>;


const FlatListMenuItem = ({ menuItem }: Props) => {
  const { theme: { colors } } = useContext(ThemeContext);
  const navigation = useNavigation<NavigationProps>();
  // const { colors } = useTheme();
  return (
    <TouchableOpacity
      activeOpacity={0.7}

      onPress={() => navigation.navigate(menuItem.component as any)}
    >

      <View style={styles.container}>

        <View style={{ flexDirection: 'row' }}>
          <Icon
            name={menuItem.icon}
            size={23}
            color={colors.primary}
          />
          <Text
            style={{ ...styles.itemText, color: colors.text }}
          >{menuItem.name}</Text>


        </View>
        <View>
          <Icon
            name={'chevron-forward-outline'}
            size={23}
            color={colors.primary}
          />

        </View>
      </View>

    </TouchableOpacity>




  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  itemText: {
    marginLeft: 10,
    fontSize: 19,
    color: 'black'
  }
});

export default FlatListMenuItem