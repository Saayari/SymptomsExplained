import { createStackNavigator } from "@react-navigation/stack";
import { ScreenStackHeaderBackButtonImage } from "react-native-screens";

import Home from "../screens/home";
import Diagnoses from "../screens/diagnoses";

const Stack = createStackNavigator();

const Stacks = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false}}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Diagnoses" component={Diagnoses} />
        </Stack.Navigator>
    )
}

export default Stacks;