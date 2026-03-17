import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";

export default function CodigoScreen({navigation}) {

    const [codigo, setCodigo] = useState(["", "", "", ""]);
    const [aceptado, setAceptado] = useState(false);

    const cambiarCodigo = (text, index) => {
        let nuevo = [...codigo];
        nuevo[index] = text;
        setCodigo(nuevo);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Ingresa tu código</Text>
            {/* inputs */}
            <View style={styles.codigoContainer}>
                {codigo.map((valor, index) => (
                    <TextInput
                        key={index}
                        style={styles.input}
                        maxLength={1}
                        keyboardType="numeric"
                        value={valor}
                        onChangeText={(text) => cambiarCodigo(text, index)}
                    />
                ))}
            </View>

            {/* aceptar */}
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
                <Text style={styles.textoCheck}>
                    Acepto los <Text style={styles.link}>Términos de Servicio</Text> y{" "}
                    <Text style={styles.link}>Políticas de Privacidad</Text>.
                </Text>
            </View>

            {/* boton */}
            <TouchableOpacity style={styles.boton}
                onPress={()=> navigation.navigate("Actualizar")}>
                <Text style={styles.textoBoton}>Continuar</Text>
            </TouchableOpacity>

            {/* texto */}
            <Text style={styles.descripcion}>
                Hemos enviado un <Text style={styles.link}>código de verificación a tu correo electrónico.{"\n"}
            </Text> 
                Ingresa el código para continuar con el proceso de recuperación de tu contraseña.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff",
        alignItems:"center",
        padding:30
    },
    titulo:{
        fontSize:22,
        fontWeight:"bold",
        marginBottom:20
    },
    codigoContainer:{
        flexDirection:"row",
        gap:10,
        marginBottom:25
    },
    input:{
        width:50,
        height:50,
        borderWidth:1,
        borderColor:"#ccc",
        borderRadius:8,
        textAlign:"center",
        fontSize:20
    },
    checkContainer:{
    checkbox:{
        width:20,
        height:20,
        borderWidth:2,
        borderColor:"#999",
        borderRadius:4,
        justifyContent:"center",
        alignItems:"center",
        marginRight:10
    }},
    checkboxChecked:{
        backgroundColor:"#502fd3",
        borderColor:"#502fd3"
    },
    checkmark:{
        color:"#fff",
        fontSize:14,
        fontWeight:"bold"
    },
    textoCheck:{
        flex:1,
        marginLeft: 40,
        width: "80%"
    },
    textoCheck:{
        flex:1,
        marginLeft:10,
        fontSize:13
    },
    link:{
        color:"#502fd3",
        fontWeight: 'bold',
        textAlign: 'right',
    },
    boton:{
        backgroundColor:"#39A900",
        padding:15,
        borderRadius:8,
        width:"80%",
        alignItems:"center",
        marginBottom:20
    },
    textoBoton:{
        color:"#fff",
        fontWeight:"bold"
    },
    descripcion:{
        fontSize:12,
        textAlign:"center",
        color:"#555",
        // fontWeight: 'bold',
        // fontWeight: 'bold',
        textAlign: 'left',
        marginLeft:30,
        marginRight:40
    }
});