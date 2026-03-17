import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";

export default function CorreoScreen({ navigation }) {

    const [correo, setCorreo] = useState("");
    const [aceptado, setAceptado] = useState(false);

    const continuar = () => {
        if (!correo) {
            alert("Ingresa tu correo");
            return;
        }
        if (!aceptado) {
            alert("Debes aceptar los términos");
            return;
        }
        navigation.navigate("Codigo");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>
                Recuperación de contraseña
            </Text>
            {/* correo */}
            <Text style={styles.label}>correo</Text>
            <TextInput
                style={styles.input}
                placeholder="Ingresa tu correo electrónico"
                value={correo}
                onChangeText={setCorreo}
                keyboardType="email-address"
                autoCapitalize="none"
            />

            {/* aceotar terminos */}
            <View style={styles.checkContainer}>

                <TouchableOpacity
                    style={[
                        styles.checkbox,
                        aceptado && styles.checkboxChecked
                    ]}
                    onPress={() => setAceptado(!aceptado)}
                >
                    {aceptado && <Text style={styles.checkmark}>✓</Text>}
                </TouchableOpacity>

                <Text style={styles.textCheck}>
                    Acepto los{" "}
                    <Text style={styles.link}>Términos de Servicio</Text> y{" "}
                    <Text style={styles.link}>Políticas de Privacidad</Text>.
                </Text>
            </View>

            {/* boton */}
            <TouchableOpacity
                style={styles.boton}
                onPress={continuar}
            >
                <Text style={styles.textoBoton}>
                    Continuar
                </Text>
            </TouchableOpacity>

            {/* texto */}
            <Text style={styles.descripcion}>
                Ingresa tu{" "}
                <Text style={styles.link}>
                    correo electrónico registrado
                </Text>{" "}
                y te enviaremos un{" "}
                <Text style={styles.link}>
                    código de verificación
                </Text>{" "}
                para restablecer tu contraseña.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 30,
        justifyContent: "center"
    },
    titulo: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 40,
        color: "#333"
    },
    label: {
        fontSize: 14,
        color: "#2f6fed",
        marginBottom: 5
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
        marginBottom: 20,
        paddingVertical: 8,
        fontSize: 14
    },
    checkContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 30
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 2,
        borderColor: "#999",
        borderRadius: 4,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10
    },
    checkboxChecked: {
        backgroundColor: "#2f6fed",
        borderColor: "#2f6fed"
    },
    checkmark: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "bold"
    },
    textCheck: {
        flex: 1,
        fontSize: 13
    },
    link: {
        color: "#2f6fed",
        fontWeight: "bold"
    },
    boton: {
        backgroundColor: "#6bb64a",
        padding: 14,
        borderRadius: 8,
        alignItems: "center",
        marginBottom: 25,
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 3
    },
    textoBoton: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16
    },
    descripcion: {
        fontSize: 13,
        color: "#555",
        textAlign: "center",
        lineHeight: 18
    }
});
