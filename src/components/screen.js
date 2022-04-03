import { StyleSheet, Dimensions, View } from "react-native";
import Constants from "expo-constants";

const Screen = ({ children }) => {
    return <View style=
    {{paddingTop: Constants.statusBarHeight + Dimensions.get("window").height / 15, marginHorizontal: Dimensions.get("window").width / 12.5}}>
        {children}
    </View>
}

export default Screen;