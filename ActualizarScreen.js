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
    Alert.alert("Éxito", "Contraseña actualizada", [
    { text: "OK", onPress: () => navigation.navigate('Login') }
  ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.titulo}>Actualizacion de contraseña</Text>

        <Text style={styles.label}>Contraseña</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingresa tu contraseña"
          placeholderTextColor="#ccc"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <Text style={styles.label}>Confirmar contraseña</Text>
        <TextInput
          style={styles.input}
          placeholder="confirma tu contraseña"
          placeholderTextColor="#ccc"
          secureTextEntry
          value={confirmarPassword}
          onChangeText={setConfirmarPassword}
        />

        <Pressable style={styles.checkboxContainer} onPress={() => setSelection(!isSelected)}>
          <MaterialCommunityIcons 
            name={isSelected ? "checkbox-marked" : "checkbox-blank-outline"} 
            size={24} 
            color="#003399" 
          />
          <Text style={styles.checkboxText}>
            Acepto los <Text style={styles.link}>Términos de Servicio</Text> y <Text style={styles.link}>Políticas de Privacidad.</Text>
          </Text>
        </Pressable>

        <TouchableOpacity style={styles.boton} onPress={handleActualizar}>
          <Text style={styles.botonText}>Aceptar</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 40,
    justifyContent: 'center',
  },
  formContainer: {
    width: '100%',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 40,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#003399',
    marginBottom: 5,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingVertical: 10,
    marginBottom: 30,
    fontSize: 16,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  checkboxText: {
    fontSize: 13,
    color: '#333',
    marginLeft: 10,
    flex: 1,
  },
  link: {
    color: '#003399',
    textDecorationLine: 'underline',
  },
  boton: {
    backgroundColor: "#003399",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  botonText: {
    color: "white",
    fontSize: 18,
    fontWeight: 'bold'
  },
});
