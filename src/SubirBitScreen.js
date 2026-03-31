import React, { useState, useContext, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput, ScrollView, Alert } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as DocumentPicker from 'expo-document-picker';
import { BitacoraContext } from "./BitacorasContext";

export default function SubirBitScreen({ navigation }) {
  const { agregarBitacora, bitacoras } = useContext(BitacoraContext);
  const [enviando, setEnviando] = useState(false);

  const [form, setForm] = useState({
    numero: (bitacoras.length + 1).toString(),
    nombreArchivo: "",
    observaciones: "",
    fecha: new Date().toLocaleDateString(),
    instructor: "",
    uriArchivo: null,
    estado: "Pendiente"
  });

  const seleccionarDocumento = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"],
        copyToCacheDirectory: true,
      });

      if (!result.canceled) {
        const archivo = result.assets[0];
        setForm(prevForm => ({
          ...prevForm,
          nombreArchivo: archivo.name,
          uriArchivo: archivo.uri
        }));
        Alert.alert("Éxito", `Archivo "${archivo.name}" cargado correctamente.`);
      }
    } catch (err) {
      Alert.alert("Error", "No se pudo seleccionar el archivo.");
      console.log(err);
    }
  };

  const handleAceptar = () => {
    if (!form.nombreArchivo || !form.instructor) {
      Alert.alert("Campos incompletos", "Por favor sube un archivo y completa los datos.");
      return;
    }

    if (enviando) return;
    setEnviando(true);

    try {
      const datosFinales = { 
        ...form, 
        id: Date.now().toString(),
        estado: "Pendiente"
      };

      agregarBitacora(datosFinales);
    
      setTimeout(() => {
        Alert.alert(
          "¡Registro Exitoso!",
          `La bitácora N° ${form.numero} se ha guardado correctamente.`,
          [
            { 
              text: "Entendido", 
              onPress: () => {
                setEnviando(false);
                navigation.navigate("Bitacoras"); 
              }
            }
          ],
          { cancelable: false } 
        );
      }, 100);

    } catch (error) {
      setEnviando(false);
      Alert.alert("Error", "No se pudo guardar la bitácora.");
      console.log(error);
    }
  };

  useEffect(() => {
  setForm(prev => ({
    ...prev,
    numero: (bitacoras.length + 1).toString()
  }));
}, [bitacoras.length]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons name="arrow-left" size={26} color="#1E4FA1" />
        </TouchableOpacity>
        <Text style={styles.title}>Nueva Bitácora</Text>
        <View style={{ width: 26 }} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.label}>Bitácora N° {form.numero}</Text>

        {/*subir documento */}
        <TouchableOpacity
          style={[styles.uploadCard, form.uriArchivo && styles.uploadCardSuccess]}
          onPress={seleccionarDocumento}
        >
          <MaterialCommunityIcons
            name={form.uriArchivo ? "file-check-outline" : "file-upload-outline"}
            size={80}
            color={form.uriArchivo ? "#6BB24D" : "#8EA7C9"}
          />
          <Text style={{ color: form.uriArchivo ? '#6BB24D' : '#8EA7C9', fontWeight: 'bold', marginTop: 10 }}>
            {form.uriArchivo ? "Documento Listo" : "Subir Documento (PDF/Word)"}
          </Text>
        </TouchableOpacity>

        <View style={styles.inputGroup}>
          <Text style={styles.info}>Nombre del archivo seleccionado</Text>
          <TextInput
            style={[styles.detalle, { backgroundColor: '#f9f9f9', color: '#555' }]}
            value={form.nombreArchivo}
            editable={false}
            placeholder="Selecciona un archivo..."
          />

          <Text style={styles.info}>Instructor a cargo</Text>
          <TextInput
            style={styles.detalle}
            placeholder="Digite el nombre del instructor"
            value={form.instructor}
            onChangeText={(text) => setForm(prev => ({ ...prev, instructor: text }))}
          />

          <Text style={styles.info}>Observaciones</Text>
          <TextInput
            style={[styles.detalle, { height: 80, textAlignVertical: 'top' }]}
            placeholder="Comenta algo sobre tu etapa práctica..."
            multiline
            value={form.observaciones}
            onChangeText={(text) => setForm({ ...form, observaciones: text })}
          />
        </View>

        <TouchableOpacity 
          style={[styles.button, (enviando || !form.uriArchivo) && { backgroundColor: '#A5D6A7' }]} 
          onPress={handleAceptar}
          disabled={enviando} // Deshabilitar si está enviando
        >
          <Text style={styles.buttonText}>
            {enviando ? "Guardando..." : "Aceptar"}
          </Text>
        </TouchableOpacity>

        <View style={{ height: 100 }} />
      </ScrollView>
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
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 10
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1E4FA1"
  },
  content: {
    alignItems: "center",
    paddingHorizontal: 25
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: "flex-start",
    marginVertical: 15
  },
  uploadCard: {
    width: '100%',
    height: 180,
    backgroundColor: "#FFF",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
    borderStyle: 'dashed',
    borderWidth: 2,
    borderColor: '#8EA7C9'
  },
  uploadCardSuccess: {
    borderColor: '#6BB24D',
    backgroundColor: '#F0F9EB'
  },
  inputGroup: { width: '100%' },
  info: {
    fontSize: 13,
    color: "#7A7A7A",
    marginBottom: 5,
    fontWeight: '700',
    textTransform: 'uppercase'
  },
  detalle: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 14,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#DDD",
    fontSize: 15
  },
  button: {
    backgroundColor: "#6BB24D",
    width: '100%',
    padding: 18,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
    elevation: 4
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16
  },
});