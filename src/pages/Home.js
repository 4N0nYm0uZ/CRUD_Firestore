import React from "react";
import { StyleSheet, View, FlatList, Alert, Text, Button } from "react-native";
import { UserContact, CreateUser, InsertContact, Loading, ErrorMassage } from "../components";
import { collection, query, limit, where } from "firebase/firestore";
import app from "../database/firebase";


const Home = ({ navigation }) => {
    //! useState
    const [data, setData] = React.useState({});
    const [loading, setLoading] = React.useState(false);
    const [errorMassage, setErrorMassage] = React.useState(false);
    const [findParams, setFindParams] = React.useState("");

    //! GET Data
    const getData = () => { };

    //! Insert Data
    const onFind = () => { };

    //! Delete Data
    const onDelete = (id) => { };

    // React.useEffect(() => {
    //     getData();
    // }, []);


    return (
        <View style={styles.container}>
            <View style={styles.search}>
                <InsertContact
                // onPress={onFind}
                // find={findParams}
                // onFind={setFindParams}
                />
            </View>

            <UserContact
                nomor={"088253695"}
                nama={"slamet sulistyo"}
                // onDelete={() => onDelete(item.id)}
                onPress={() =>
                    navigation.navigate("Update", {
                        name: "slamet sulistyo",
                        number: "088253695",
                        id: 1,
                    })
                }
            />

            <CreateUser onPress={() => navigation.navigate("Create")} />
            {loading && <Loading />}
            {errorMassage && <ErrorMassage />}
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    search: {
        borderBottomWidth: 1,
        height: 70,
        borderColor: "#B5B5B5",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
});
