import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, CheckBox } from "react-native";

export default function App() {

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

      {/* INPUTS DEL CODIGO */}
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

      {/* CHECKBOX */}
      <View style={styles.checkContainer}>
        <CheckBox
          value={aceptado}
          onValueChange={setAceptado}
        />
        <Text style={styles.textoCheck}>
          Acepto los <Text style={styles.link}>Términos de Servicio</Text> y{" "}
          <Text style={styles.link}>Políticas de Privacidad</Text>.
        </Text>
      </View>

      {/* BOTON */}
      <TouchableOpacity style={styles.boton}
          onPress={()=> navigation.navigate("ActualizarPassword")}>

        <Text style={styles.textoBoton}>Continuar</Text>
      </TouchableOpacity>
      

      {/* TEXTO INFERIOR */}
      <Text style={styles.descripcion}>
        Hemos enviado un <Text style={styles.link}>código de verificación</Text> a tu correo electrónico.
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
    marginBottom:20
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
    flexDirection:"row",
    alignItems:"center",
    marginBottom: 40
  },

  textoCheck:{
    flex:1,
    marginLeft:5,
    fontSize:13
  },

  link:{
    color:"#000000"
  },

  boton:{
    backgroundColor:"#1f4db7",
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
    color:"#555"
  }

});