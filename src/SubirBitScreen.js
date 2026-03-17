import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function SubirBitScreen({ navigation }) {
  return (
    <View style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons name="arrow-left" size={26} color="#1E4FA1" />
        </TouchableOpacity>

        <Text style={styles.title}>
          Nueva Bitacora
        </Text>
        <View style={{ width: 26 }} />
      </View>

      {/* CONTENIDO */}
      <View style={styles.content}>
        <Text style={styles.label}>
          Bitacora N° 5
        </Text>

        {/* TARJETA SUBIR */}
        <TouchableOpacity style={styles.uploadCard}>
          <MaterialCommunityIcons
            name="file-upload-outline"
            size={90}
            color="#8EA7C9"
          />
        </TouchableOpacity>

        {/* BOTON */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
            Aceptar
          </Text>
        </TouchableOpacity>
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
          onPress={() => navigation.navigate("SubirBit")}
        >
          <MaterialCommunityIcons
            name="plus"
            size={30}
            color="white"
          />
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
    fontWeight: "600"
  },
  content: {
    alignItems: "center",
    marginTop: 40
  },
  label: {
    fontSize: 16,
    alignSelf: "flex-start",
    marginLeft: 30,
    marginBottom: 20
  },
  uploadCard: {
    width: 220,
    height: 220,
    backgroundColor: "#E6E6E6",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40
  },
  button: {
    backgroundColor: "#6BB24D",
    width: 250,
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    elevation: 3
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16
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
