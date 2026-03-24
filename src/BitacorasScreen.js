import React, { useState } from "react";
import {View,Text,StyleSheet,TouchableOpacity,ScrollView,Modal,Pressable} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function BitacorasScreen({ navigation }) {
    const [menuVisible, setMenuVisible] = useState(false);
    const [menuPos, setMenuPos] = useState({ x: 0, y: 0 });
    const abrirMenu = (event) => {
        const { pageX, pageY } = event.nativeEvent;
        setMenuPos({ x: pageX, y: pageY });
        setMenuVisible(true);
    };

    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.titulo}>Bitacoras</Text>
                <Text style={styles.subtitulo}>¡Hola Aprendiz!</Text>

                <View style={styles.grid}>

                    {/* bitacoras */}
                    {[1, 2, 3, 4].map((num) => (
                        <TouchableOpacity
                            key={num}
                            style={styles.cardAzul}
                            onPress={() => navigation.navigate("EstBitacora")}
                        >
                            <MaterialCommunityIcons
                                name="file-document-outline"
                                size={40}
                                color="#fff"
                            />

                            {/* botón 3 puntos */}
                            <TouchableOpacity
                                style={styles.tresP}
                                onPress={abrirMenu}
                                hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
                            >
                                <MaterialCommunityIcons
                                    name="dots-vertical"
                                    size={20}
                                    color="#fff"
                                />
                            </TouchableOpacity>
                        </TouchableOpacity>
                    ))}

                    {/* cards para agregar */}
                    <TouchableOpacity
                        style={styles.cardGris}
                        onPress={() => navigation.navigate("Bitacoras")}
                    >
                        <MaterialCommunityIcons name="plus" size={40} color="#bfc3c7" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.cardGris}
                        onPress={() => navigation.navigate("Bitacoras")}
                    >
                        <MaterialCommunityIcons name="plus" size={40} color="#bfc3c7" />
                    </TouchableOpacity>
                </View>
            </ScrollView>

            {/* menu de opciones */}
            <Modal
                transparent
                visible={menuVisible}
                animationType="fade"
                onRequestClose={() => setMenuVisible(false)}
            >
                {/* capa para cerrar al tocar fuera */}
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
        backgroundColor: "#fff",
        paddingHorizontal: 25,
        paddingTop: 60
    },
    titulo: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 5
    },
    subtitulo: {
        fontSize: 16,
        color: "#555",
        marginBottom: 25
    },
    grid: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between"
    },
    cardAzul: {
        width: "47%",
        height: 120,
        backgroundColor: "#1e4ea1",
        borderRadius: 20,
        marginBottom: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    cardGris: {
        width: "47%",
        height: 120,
        backgroundColor: "#e5e5e5",
        borderRadius: 20,
        marginBottom: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    // 3 puntos
    tresP: {
        position: "absolute",
        top: 8,
        right: 8,
        padding: 4,
    },
    // menú de opciones
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
    separador: {
        height: 1,
        backgroundColor: "#f0f0f0",
        marginHorizontal: 10,
    },
    navbar: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: 80,
        backgroundColor: "#f5f5f5",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        borderTopWidth: 1,
        borderColor: "#eee"
    },
    botonCentral: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: "#1e4ea1",
        justifyContent: "center",
        alignItems: "center",
        marginTop: -25
    }
});