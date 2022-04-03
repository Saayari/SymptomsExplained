import { ActivityIndicator } from "react-native";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Stacks from "./components/stacks";

const App = () => {

    return (
        <NavigationContainer>
            <StatusBar style="dark" />
            <Stacks />
        </NavigationContainer>
    );
};

export default App;