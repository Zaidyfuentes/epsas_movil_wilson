import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function EditarPerfilScreen({ navigation }) {

    const [nombre, setNombre] = useState("Aprendiz SENA");
    const [usuario, setUsuario] = useState("aprendiz_sena");
    const [genero, setGenero] = useState("Masculino");
    const [telefono, setTelefono] = useState("+57 3000000000");
    const [correo, setCorreo] = useState("correo@email.com");

    return (
        <View style={styles.container}>

            {/* HEADER */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <MaterialCommunityIcons name="arrow-left" size={26} color="#fff" />
                </TouchableOpacity>

                <Text style={styles.title}>Editar perfil</Text>

                <View style={{ width: 26 }} />
            </View>

            {/* FORMULARIO */}
            <View style={styles.form}>

                <Text style={styles.label}>Nombre</Text>
                <TextInput
                    style={styles.input}
                    value={nombre}
                    onChangeText={setNombre}
                />

                <Text style={styles.label}>Usuario</Text>
                <TextInput
                    style={styles.input}
                    value={usuario}
                    onChangeText={setUsuario}
                />

                <Text style={styles.label}>Género</Text>
                <TouchableOpacity style={styles.input}>
                    <Text style={{ color: "#333" }}>{genero}</Text>
                    <MaterialCommunityIcons name="chevron-down" size={20} color="#555" />
                </TouchableOpacity>

                <Text style={styles.label}>Número de teléfono</Text>
                <TextInput
                    style={styles.input}
                    value={telefono}
                    onChangeText={setTelefono}
                    keyboardType="phone-pad"
                />

                <Text style={styles.label}>Correo electrónico</Text>
                <TextInput
                    style={styles.input}
                    value={correo}
                    onChangeText={setCorreo}
                    keyboardType="email-address"
                />

            </View>

            {/* BOTÓN GUARDAR */}
            <TouchableOpacity style={styles.botonGuardar}>
                <Text style={styles.textoGuardar}>Guardar</Text>
            </TouchableOpacity>

            {/* footer de bitacoras*/}
            <View style={styles.navbar}>
                <MaterialCommunityIcons name="home-outline" size={26}   color="#888"/>
                
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
        backgroundColor: "#1E4FA1",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 20,
        paddingTop: 40,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },

    title: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "600"
    },

    form: {
        padding: 20,
        marginTop: 10
    },

    label: {
        marginBottom: 5,
        marginTop: 15,
        fontWeight: "500",
        color: "#1E4FA1"
    },

    input: {
        backgroundColor: "#EDEDED",
        borderRadius: 10,
        padding: 12,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },

    botonGuardar: {
        backgroundColor: "#1E4FA1",
        margin: 20,
        padding: 15,
        borderRadius: 12,
        alignItems: "center"
    },

    textoGuardar: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600"
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
    navbar:{
        position:"absolute",
        bottom:0,
        left:0,
        right:0,
        height:80,
        backgroundColor:"#f5f5f5",
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        borderTopWidth:1,
        borderColor:"#eee"
    },
});