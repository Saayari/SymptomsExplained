import {
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  View,
  Text,
} from "react-native";

const Btn = ({ marginTop, text, icon, onPress, back}) => {
  return (
    <TouchableOpacity onPress={onPress} style={{
      marginTop: Dimensions.get("window").height / 35,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: 25,
      height: Dimensions.get("window").height / 10,
      width: Dimensions.get("window").width / 2.6,
      backgroundColor: back,
      borderRadius: 20,
      shadowColor: "black",
      shadowOpacity: 0.25,
      shadowOffset: {
        width: 0,
        height: 2,
      },
    }}>
      <View style={{alignItems: "center", justifyContent: "center"}}>
        <Text style={{ fontSize: 18 }}>
          {text}
        </Text>
        {icon}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Dimensions.get("window").height / 35,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 25,
    height: Dimensions.get("window").height / 10,
    width: Dimensions.get("window").width / 2.6,
    backgroundColor: "#CDEDFD",
    borderRadius: 20,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
});

export default Btn;
