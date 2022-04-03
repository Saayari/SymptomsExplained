import { StyleSheet, View, Text, TouchableOpacity, Image, FlatList, SafeAreaView} from "react-native";
import { useState } from "react";
import Screen from "../components/screen";
import Btn from "../components/btn";
import { NavigationContainer } from "@react-navigation/native";

const DATA = [
    {
        title1: 'Back Pain',
        title2: 'Chest Pain',
        image1: <Image style={{ height: 50, width: 50}} source={require("../assets/backpain.png")}/>,
        image2: <Image style={{ height: 50, width: 50}} source={require("../assets/chestpain.png")}/>,
        isSelected: false
    },
    {
        title1: 'Congestion',
        title2: 'Coughing',
        image1: <Image style={{ height: 50, width: 50}} source={require("../assets/congestion.png")}/>,
        image2: <Image style={{ height: 50, width: 50}} source={require("../assets/coughing.png")}/>,
        isSelected: false
    },
    {
        title1: 'Diarrhea',
        title2: 'Earache',
        image1: <Image style={{ height: 50, width: 50}} source={require("../assets/diarrhea.png")}/>,
        image2: <Image style={{ height: 50, width: 50}} source={require("../assets/ear.png")}/>,
        isSelected: false
    },
    {
        title1: 'Eye Issues',
        title2: 'Fever',
        image1: <Image style={{ height: 50, width: 50}} source={require("../assets/eyeissues.png")}/>,
        image2: <Image style={{ height: 50, width: 50}} source={require("../assets/fever.png")}/>,
        isSelected: false
    },
    {
        title1: 'Headache',
        title2: 'Muscle Pain',
        image1: <Image style={{ height: 50, width: 50}} source={require("../assets/headache.png")}/>,
        image2: <Image style={{ height: 50, width: 50}} source={require("../assets/muscleache.png")}/>,
        isSelected: false
    },
    {
        title1: 'Nausea',
        title2: 'Rash',
        image1: <Image style={{ height: 50, width: 50}} source={require("../assets/nausea.png")}/>,
        image2: <Image style={{ height: 50, width: 50}} source={require("../assets/rash.png")}/>,
        isSelected: false
    },
    {
        title1: 'Runny Nose',
        title2: 'Sore Throat',
        image1: <Image style={{ height: 50, width: 50}} source={require("../assets/runnynose.png")}/>,
        image2: <Image style={{ height: 50, width: 50}} source={require("../assets/sorethroat.png")}/>,
        isSelected: false
    },
    {
        title1: 'Sneezing',
        title2: 'Vomiting',
        image1: <Image style={{ height: 50, width: 50}} source={require("../assets/sneezing.png")}/>,
        image2: <Image style={{ height: 50, width: 50}} source={require("../assets/vomiting.png")}/>,
        isSelected: false
    },
];

const Item = ({ title1, title2, image1, image2, onPress, backgroundColor, isSelected}) => (
    <View style={styles.symptoms}>
        <Btn onPress={onPress} text={title1} icon={image1} back={backgroundColor}/>
        <Btn onPress={onPress} text={title2} icon={image2} back={backgroundColor}/>
    </View>
);

const Home = ({ navigation }) => {
    const [data, setdata] = useState(DATA);
    const [selectedId, setSelectedId] = useState(false)

    const pressHandler = () => {
        navigation.navigate('Diagnoses');
    }

    const onPressItem = (item) => {
        setSelectedId(!selectedId)
    }

    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ?  "grey" : "#76CEFF";
        return (
            <Item title1={item.title1} title2={item.title2} image1={item.image1} image2={item.image2} onPress={() => onPressItem(item)} backgroundColor={( backgroundColor )}/>
        );
    };
        

    return(
        <Screen>
            <View style={styles.container}>
                <View>
                    <Text style={styles.header}>Symptoms</Text>
                </View>
                <SafeAreaView style={{justifyContent: "center", height: "80%", padding: 10, marginTop: 15}}>
                    <FlatList 
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        extraData={selectedId}
                    />
                    
                </SafeAreaView>
                <TouchableOpacity style={{backgroundColor: "#F5E7E7", padding: 20, marginTop: 20, borderRadius: 10, width: "80%", justifyContent: "center", alignItems: "center"}} onPress={pressHandler}>
                    <Text>Search</Text>
                </TouchableOpacity>

            </View>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center"
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
    symptoms: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        width: "100%",
    },
    list: {
        justifyContent: "flex-start",
        alignItems: "center",
    }
})
export default Home;