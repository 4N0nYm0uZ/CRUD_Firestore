import React from "react";
import { StyleSheet, Text, View, Button, Alert, TextInput } from "react-native";
import { collection, query, limit, where } from "firebase/firestore";
import app from "../database/firebase";
import Loading from "../components/Atom/Loading";


const Update = ({ navigation: { goBack }, route: { params } }) => {

    //! useState
    const [name, setName] = React.useState(params?.name);
    const [number, setNumber] = React.useState(params?.number);
    const [loading, setLoading] = React.useState(false);

    //! Update Data
    const onUpdate = () => { };

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.isicard}>
                    <Text style={styles.teks}>Nomor: </Text>
                    <Text style={styles.teks}>Nama : </Text>
                </View>
                <View style={styles.input}>
                    <TextInput
                        placeholder="masukan nomor"
                        value={number}
                        onChangeText={setNumber}
                        keyboardType="numeric"
                    />
                    <TextInput
                        placeholder="masukan nama"
                        value={name}
                        onChangeText={setName}
                    />
                </View>
            </View>
            <View style={styles.btn}>
                <Button title="Update" onPress={() => onUpdate()} />
            </View>
            <Loading visible={loading} />
        </View>
    );
};

export default Update;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    card: {
        borderWidth: 1,
        marginTop: 50,
        marginBottom: 100,
        marginHorizontal: 20,
        height: 100,
        borderRadius: 10,
        flexDirection: "row",
    },
    isicard: {
        marginLeft: 20,
        marginTop: 20,
    },
    btn: {
        marginHorizontal: 50,
    },
    teks: {
        fontSize: 20,
    },
    input: {
        marginTop: 21,
    },
});
