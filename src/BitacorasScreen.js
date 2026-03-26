import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Modal, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function BitacorasScreen({ navigation }) {
    const [menuVisible, setMenuVisible] = useState(false);
    const [menuPos, setMenuPos] = useState({ x: 0, y: 0 });

    const abrirMenu = (event) => {
        const { pageX, pageY } = event.nativeEvent;
        // Ajuste de X e Y para evitar que el menú se salga de pantalla
        setMenuPos({ x: pageX, y: pageY });
        setMenuVisible(true);
    };

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.titulo}>Bitácoras</Text>
                <Text style={styles.subtitulo}>¡Hola Aprendiz!</Text>
            </View>

            <ScrollView 
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                {/* Lista de Registros de Bitácoras */}
                {[1, 2, 3, 4].map((num) => (
                    <TouchableOpacity
                        key={num}
                        style={styles.cardBitacora}
                        onPress={() => navigation.navigate("EstBitacora")}
                    >
                        <View style={styles.iconContainer}>
                            <MaterialCommunityIcons
                                name="file-document-outline"
                                size={32}
                                color="#1e4ea1"
                            />
                        </View>
                        
                        <View style={styles.infoContainer}>
                            <Text style={styles.cardTitle}>Registro N° {num}</Text>
                            <Text style={styles.cardStatus}>
                                Estado: <Text style={styles.statusSuccess}>Aprobada</Text>
                            </Text>
                        </View>

                        {/* botón 3 puntos */}
                        <TouchableOpacity
                            style={styles.tresP}
                            onPress={abrirMenu}
                            hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}
                        >
                            <MaterialCommunityIcons
                                name="dots-vertical"
                                size={24}
                                color="#7A7A7A"
                            />
                        </TouchableOpacity>
                    </TouchableOpacity>
                ))}

                {/* Card para registrar nueva bitácora */}
                <TouchableOpacity
                    style={styles.cardAgregar}
                    onPress={() => navigation.navigate("SubirBit")}
                >
                    <MaterialCommunityIcons name="plus-circle-outline" size={32} color="#8EA7C9" />
                    <Text style={styles.textAgregar}>Registrar Nueva Bitácora</Text>
                </TouchableOpacity>
                
                {/* Espaciador inferior para SafeArea y Navbar */}
                <View style={{ height: 100 }} />
            </ScrollView>

            {/* menu de opciones */}
            <Modal
                transparent
                visible={menuVisible}
                animationType="fade"
                onRequestClose={() => setMenuVisible(false)}
            >
                <Pressable style={styles.overlay} onPress={() => setMenuVisible(false)}>
                    <View style={[styles.menu, { top: menuPos.y - 10, left: menuPos.x - 170 }]}>
                        <TouchableOpacity
                            style={styles.menuOpcion}
                            onPress={() => {
                                setMenuVisible(false);
                                navigation.navigate("Etapa");
                            }}
                        >
                            <MaterialCommunityIcons name="briefcase-outline" size={18} color="#1e4ea1" />
                            <Text style={[styles.menuTexto, { color: "#1e4ea1" }]}>Ver etapa práctica</Text>
                        </TouchableOpacity>
                    </View>
                </Pressable>
            </Modal>

            {/* footer */}
            <View style={styles.navbar}>
                <MaterialCommunityIcons name="home-outline" size={26} color="#888" />
                <TouchableOpacity
                    style={styles.botonCentral}
                    onPress={() => navigation.navigate("Subir")}
                >
                    <MaterialCommunityIcons name="plus" size={30} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Perfil")}>
                    <MaterialCommunityIcons name="account-outline" size={26} color="#7A7A7A" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F2F2F2",
    },
    headerContainer: {
        paddingHorizontal: 25,
        paddingTop: 60,
        backgroundColor: "#F2F2F2",
        paddingBottom: 10,
    },
    titulo: {
        fontSize: 26,
        fontWeight: "bold",
        color: "#1e4ea1",
        marginBottom: 5
    },
    subtitulo: {
        fontSize: 16,
        color: "#555",
        fontWeight: "500"
    },
    scrollContent: {
        paddingHorizontal: 25,
        paddingTop: 10
    },
    cardBitacora: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 16,
        marginBottom: 15,
        padding: 18,
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 4 },
        elevation: 3,
    },
    iconContainer: {
        width: 55,
        height: 55,
        borderRadius: 12,
        backgroundColor: "#EEF4FC",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 15
    },
    infoContainer: {
        flex: 1,
        justifyContent: "center"
    },
    cardTitle: {
        fontSize: 17,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 4
    },
    cardStatus: {
        fontSize: 14,
        color: "#777"
    },
    statusSuccess: {
        color: "#6bb64a",
        fontWeight: "bold"
    },
    tresP: {
        padding: 5,
    },
    cardAgregar: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#E6E6E6",
        borderRadius: 16,
        padding: 20,
        marginTop: 5,
        borderWidth: 2,
        borderColor: "#D1D9E6",
        borderStyle: "dashed",
    },
    textAgregar: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#8EA7C9",
        marginLeft: 10,
    },
    overlay: {
        flex: 1,
    },
    menu: {
        position: "absolute",
        backgroundColor: "#fff",
        borderRadius: 12,
        width: 210,
        paddingVertical: 6,
        shadowColor: "#000",
        shadowOpacity: 0.15,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 4 },
        elevation: 8,
    },
    menuOpcion: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingVertical: 13,
        gap: 10,
    },
    menuTexto: {
        fontSize: 14,
        color: "#333",
        marginLeft: 6,
    },
    navbar: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: 80,
        backgroundColor: "#fff",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        borderTopWidth: 1,
        borderColor: "#eee",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: -4 },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 10,
    },
    botonCentral: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: "#1e4ea1",
        justifyContent: "center",
        alignItems: "center",
        marginTop: -30,
        shadowColor: "#1e4ea1",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 6,
        elevation: 8,
    }
});