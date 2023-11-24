import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import Animation101Screen from "../screens/Animation101Screen";
import Animation102Screen from "../screens/Animation102Screen";
import SwitchScreen from "../screens/SwitchScreen";
import AlertScreen from "../screens/AlertScreen";
import TextInputScreen from "../screens/TextInputScreen";
import PullToRefresh from "../screens/PullToRefresh";
import SectionListScreen from "../screens/SectionList";
import ModalScreen from "../screens/ModalScreen";
import InfinteScrollScreen from "../screens/InfinteScrollScreen";
import SlidesScreen from "../screens/SlidesScreen";
import ChangeScreeenTheme from "../screens/ChangeScreeenTheme";
import { NavigationContainer } from "@react-navigation/native";
import { useContext } from "react";
import { ThemeContext } from "../context/themeContext/ThemeContext";


export type ParamsStackList = {
    Home: undefined;
    Animation101: undefined;
    Animation102: undefined;
    Switch: undefined;
    Alert: undefined;
    TextInput: undefined;
    Pull: undefined;
    List: undefined;
    Modal: undefined;
    Scroll: undefined;
    Slide: undefined;
    Theme: undefined;
}

const Stack = createStackNavigator<ParamsStackList>();

export const StackNav = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <NavigationContainer
            theme={theme}
        >
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    cardStyle: {
                        // backgroundColor: 'white'
                    }
                }}
            >
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Animation101" component={Animation101Screen} />
                <Stack.Screen name="Animation102" component={Animation102Screen} />
                <Stack.Screen name="Switch" component={SwitchScreen} />
                <Stack.Screen name="Alert" component={AlertScreen} />
                <Stack.Screen name="TextInput" component={TextInputScreen} />
                <Stack.Screen name="Pull" component={PullToRefresh} />
                <Stack.Screen name="List" component={SectionListScreen} />
                <Stack.Screen name="Modal" component={ModalScreen} />
                <Stack.Screen name="Scroll" component={InfinteScrollScreen} />
                <Stack.Screen name="Slide" component={SlidesScreen} />
                <Stack.Screen name="Theme" component={ChangeScreeenTheme} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}