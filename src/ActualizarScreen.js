import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function ActualizarScreen({navigation}) {
  const [password, setPassword] = useState("");
  const [confirmarPassword, setConfirmarPassword] = useState("");
  const [isSelected, setSelection] = useState(false);

  const handleActualizar = () => {
    if (!password || !confirmarPassword) {
      Alert.alert("Error", "Completa todos los campos");
      return;
    }
    if (password !== confirmarPassword) {
      Alert.alert("Error", "Las contraseñas no coinciden");
      return;
    }
    if (!isSelected) {
      Alert.alert("Error", "Debes aceptar los términos y condiciones");
      return;
    }
    Alert.alert("Éxito", "Contraseña actualizada");
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.titulo}>
          Actualización de contraseña
        </Text>
        {/* contraseña */}
        <Text style={styles.label}>Contraseña</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingresa tu contraseña"
          placeholderTextColor="#cfcfcf"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        {/* confirmar */}
        <Text style={styles.label}>Confirmar contraseña</Text>
        <TextInput
          style={styles.input}
          placeholder="Confirma tu contraseña"
          placeholderTextColor="#cfcfcf"
          secureTextEntry
          value={confirmarPassword}
          onChangeText={setConfirmarPassword}
        />

        {/* aceptar */}
        <Pressable
          style={styles.checkboxContainer}
          onPress={() => setSelection(!isSelected)}
        >
          <MaterialCommunityIcons
            name={isSelected ? "checkbox-marked" : "checkbox-blank-outline"}
            size={22}
            color="#2f6fed"
          />
          <Text style={styles.checkboxText}>
            Acepto los <Text style={styles.link}>Términos de Servicio</Text> y{" "}
            <Text style={styles.link}>Políticas de Privacidad.</Text>
          </Text>
        </Pressable>

        {/* boton */}
        <TouchableOpacity
          style={styles.boton}
          onPress={handleActualizar}
        >
          <Text style={styles.botonText}>
            Aceptar
          </Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#fff",
    justifyContent:"center",
    paddingHorizontal:40
  },
  formContainer:{
    width:"100%"
  },
  titulo:{
    fontSize:22,
    fontWeight:"bold",
    textAlign:"center",
    marginBottom:40,
    color:"#333"
  },
  label:{
    fontSize:14,
    fontWeight:"bold",
    color:"#2f6fed",
    marginBottom:5
  },
  input:{
    borderBottomWidth:1,
    borderBottomColor:"#ddd",
    paddingVertical:10,
    marginBottom:30,
    fontSize:15
  },
  checkboxContainer:{
    flexDirection:"row",
    alignItems:"center",
    marginBottom:35
  },
  checkboxText:{
    fontSize:13,
    marginLeft:10,
    color:"#333",
    flex:1
  },
  link:{
    color:"#2f6fed",
    fontWeight:"bold"
  },
  boton:{
    backgroundColor:"#6bb64a",
    paddingVertical:14,
    borderRadius:8,
    alignItems:"center",
    shadowColor:"#000",
    shadowOpacity:0.2,
    shadowOffset:{width:0,height:2},
    shadowRadius:4,
    elevation:3
  },
  botonText:{
    color:"#fff",
    fontSize:16,
    fontWeight:"bold"
  }
});
