import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function PerfilScreen({ navigation }) {
    return (
        <View style={styles.container}>
            {/* HEADER */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <MaterialCommunityIcons
                        name="arrow-left"
                        size={26}
                        color="#1E4FA1"
                    />
                </TouchableOpacity>
                <Text style={styles.title}>
                    Administracion de perfil
                </Text>
            <View style={{ width: 26 }} />

        </View>

        {/* CONTENIDO */}
        <View style={styles.content}>
            <Text style={styles.welcome}>
                ¡Hola, Aprendiz!
            </Text>
            <View style={styles.line} />
                {/* CONTRASEÑA */}
                <Text style={styles.label}>
                    Contraseña
                </Text>
                <TextInput
                    placeholder="Ingresa tu contraseña"
                    placeholderTextColor="#B5B5B5"
                    secureTextEntry
                    style={styles.input}
                />
            </View>

            {/* BARRA INFERIOR */}
            <View style={styles.bottomBar}>
                <MaterialCommunityIcons
                    name="home-outline"
                    size={26}
                    color="#7A7A7A"
                />
                <TouchableOpacity
                    style={styles.botonCentral}
                    onPress={() => navigation.navigate("Subir")}
                >
                    <MaterialCommunityIcons name="plus" size={30} color="#fff" />
                </TouchableOpacity>
        
                <TouchableOpacity
                    onPress={() => navigation.navigate("Perfil")}
                >
                    <MaterialCommunityIcons
                        name="account-outline"
                        size={26}
                        color="#7A7A7A"
                    />
                </TouchableOpacity>
            </View>
        </View>
    );    
}   

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F2F2F2"
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 20
    },
    title: {
        fontSize: 18,
        fontWeight: "500"
    },
    content: {
        paddingHorizontal: 25,
        marginTop: 10
    },
    welcome: {
        fontSize: 16,
        marginBottom: 10
    },
    line: {
        height: 1,
        backgroundColor: "#D0D0D0",
        marginBottom: 20
    },
    label: {
        color: "#1E4FA1",
        marginBottom: 5,
        fontWeight: "500"
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: "#CFCFCF",
        paddingVertical: 8,
        fontSize: 14
    },
    bottomBar: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: 70,
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
        botonCentral:{
        width:60,
        height:60,
        borderRadius:30,
        backgroundColor:"#1e4ea1",
        justifyContent:"center",
        alignItems:"center",
        marginTop:-25
    },
});
