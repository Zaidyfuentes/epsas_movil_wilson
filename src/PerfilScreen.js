import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function PerfilScreen({ navigation }) {
    const handleEditarPerfil = () => {
        console.log('Editar Perfil');
        navigation.navigate('Editar');
    };

    const handleCambiarPassword = () => {
        console.log('Cambiar Contraseña');
    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
                {/* HEADER */}
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <MaterialCommunityIcons name="arrow-left" size={26} color="#1E4FA1" />
                    </TouchableOpacity>

                    <Text style={styles.title}>Perfil</Text>

                    <View style={{ width: 26 }} />
                </View>

                {/* FOTO + NOMBRE */}
                <View style={styles.profileSection}>
                    <View style={styles.imageContainer}>
                        <Image
                            source={{ uri: "https://i.pravatar.cc/150" }}
                            style={styles.image}
                        />

                        {/* BOTÓN EDITAR FOTO */}
                        <TouchableOpacity style={styles.editIcon}>
                            <MaterialCommunityIcons name="pencil" size={16} color="#fff" />
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.name}>Aprendiz SENA</Text>
                    <Text style={styles.role}>Usuario</Text>
                </View>

                {/* OPCIONES */}
                <View style={styles.options}>
                    <OptionItem icon="account-edit" text="Editar perfil" onPress={handleEditarPerfil}/>
                    <OptionItem icon="lock-outline" text="Cambiar contraseña" onPress={handleCambiarPassword}/>
                </View>

                {/* BOTÓN CERRAR SESIÓN */}
                <TouchableOpacity style={styles.logout}>
                    <MaterialCommunityIcons name="logout" size={20} color="#fff" />
                    <Text style={styles.logoutText}>Cerrar sesión</Text>
                </TouchableOpacity>
            </ScrollView>

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

/* COMPONENTE OPCIÓN */
const OptionItem = ({ icon, text, onPress }) => (
    <TouchableOpacity style={styles.optionItem} onPress={onPress}>
        <View style={styles.iconContainer}>
            <MaterialCommunityIcons name={icon} size={20} color="#fff" />
        </View>

        <Text style={styles.optionText}>{text}</Text>

        <MaterialCommunityIcons name="chevron-right" size={22} color="#999" />
    </TouchableOpacity>
);

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
    profileSection: {
        alignItems: "center",
        marginTop: 10
    },
    imageContainer: {
        position: "relative"
    },
    image: {
        width: 110,
        height: 110,
        borderRadius: 55,
        borderWidth: 3,
        borderColor: "#1E4FA1"
    },
    editIcon: {
        position: "absolute",
        bottom: 0,
        right: 0,
        backgroundColor: "#1E4FA1",
        width: 28,
        height: 28,
        borderRadius: 14,
        justifyContent: "center",
        alignItems: "center"
    },
    name: {
        fontSize: 18,
        fontWeight: "600",
        marginTop: 10
    },
    role: {
        color: "#888",
        fontSize: 14
    },
    options: {
        marginTop: 30,
        paddingHorizontal: 20
    },
    optionItem: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        padding: 15,
        borderRadius: 12,
        marginBottom: 12,
        justifyContent: "space-between"
    },
    iconContainer: {
        backgroundColor: "#1E4FA1",
        padding: 10,
        borderRadius: 10,
        marginRight: 10
    },
    optionText: {
        flex: 1,
        marginLeft: 10,
        fontSize: 15
    },
    logout: {
        flexDirection: "row",
        backgroundColor: "#1E4FA1",
        marginHorizontal: 20,
        marginTop: 10,
        padding: 15,
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center"
    },
    logoutText: {
        color: "#fff",
        marginLeft: 10,
        fontWeight: "600"
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
    botonCentral: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: "#1E4FA1",
        justifyContent: "center",
        alignItems: "center",
        marginTop: -25
    }
});