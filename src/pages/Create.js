import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import Loading from "../components/Atom/Loading";
import moment from "moment-timezone";
import CrudFunction from "../database/crudFuction";
import "react-native-get-random-values";
import { nanoid } from "nanoid";

const Create = ({ navigation: { goBack } }) => {

    //! useState
    const [name, setName] = React.useState("");
    const [number, setNumber] = React.useState("");
    const [loading, setLoading] = React.useState(false);

    //! ADD Data
    const add = async () => {
        setLoading(true)

        await CrudFunction.addData("contact", {
            uid: nanoid(24),
            nama: name,
            nomor: number,
            createdAt: moment().tz("Asia/Jakarta").format("DD/MM/YY.HH:mm:ss")
        })

        setLoading(false)
        goBack()
    }


    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.isicard}>
                    <Text style={styles.teks}>Nomor:</Text>
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
                <Button title="Create" color="green" onPress={() => add()} />
            </View>
            <Loading visible={loading} />
        </View>
    );
};

export default Create;

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
