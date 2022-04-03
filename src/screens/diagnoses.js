import { StyleSheet, View, Text, Image} from "react-native";
import Screen from "../components/screen";
import Btn from "../components/btn";

const Diagnoses = () => {
    return <Screen>
        <View style={styles.container}>
        <View style={{backgroundColor: "#29B59B", borderRadius: 20, alignItems: "center", justifyContent: "center", height: 150, width: 350}}>
            <Text style={styles.header}>Possible Diagnosis</Text>
            <Text style={{fontSize: 20, padding: 20, fontWeight: "bold"}}>Covid 19</Text>
        </View>
        <Image style={{ height: 220, width: 220, marginTop: 20}} source={require("../assets/covid19.png")} />
        <View style={{flexDirection: "row", marginTop: 30, justifyContent: "space-between"}}>
            <View style={{flex: 1, justifyContent: "flex-start", alignItems: "center", backgroundColor: "#76CEFF", padding: 10}}>
                <Text style={{fontSize: 20, fontWeight: "bold"}}>Symptoms</Text>
                <Btn text="Coughing" icon={<Image style={{ height: 50, width: 50}} source={require("../assets/coughing.png")}/>}/>
                <Btn text="Sore Throat" icon={<Image style={{ height: 50, width: 50}} source={require("../assets/sorethroat.png")}/>}/>
            </View>
            <View style={{flex: 1, justifyContent: "flex-start", alignItems: "center", backgroundColor: "#6E73F1", padding: 10}}>
                <Text style={{fontSize: 20, fontWeight: "bold"}}>Treatment</Text>
                <Text>
                    1. Stay home except to get medical care.
                    2. Monitor your symptoms carefully. 
                    3. If your symptoms get worse, call your healthcare provider immediately.
Get rest and stay hydrated. 
                </Text>
                <Text>
                    4. If you have a medical appointment, notify your healthcare provider ahead of time that you have or may have COVID-19.</Text>
            </View>

        </View>
        </View>

    </Screen>;
};

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
    },
    header: {
        fontSize: 36,
        fontWeight: "600",
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: {
            width: 0,
            height: 4,
        }
    },
})
export default Diagnoses;