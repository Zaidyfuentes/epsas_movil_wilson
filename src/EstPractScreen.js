import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function EstPractScreen({ navigation }) {
    const totalHoras = 880;
    const horasCompletadas = 594;
    const progresoPorcentaje = Math.round((horasCompletadas / totalHoras) * 100);

    const bitacorasTotal = 6;
    const bitacorasEntregadas = 5;
    const bitacorasAprobadas = 4;

    const visitas = [
        { numero: 1, estado: "Aprobada", fecha: "10 Feb 2025", color: "#4CAF50" },
        { numero: 2, estado: "Aprobada", fecha: "15 Mar 2025", color: "#4CAF50" },
        { numero: 3, estado: "Pendiente", fecha: "20 Abr 2025", color: "#FFA726" },
    ];

    return (
        <View style={styles.container}>
            <ScrollView
                contentContainerStyle={styles.scroll}
                showsVerticalScrollIndicator={false}
            >
                {/* header */}
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <MaterialCommunityIcons
                            name="arrow-left"
                            size={26}
                            color="#1e4ea1"
                        />
                    </TouchableOpacity>
                    <Text style={styles.titulo}>Etapa Productiva</Text>
                    <View style={{ width: 26 }} />
                </View>

                {/* empresa */}
                <View style={styles.banner}>
                    <MaterialCommunityIcons
                        name="briefcase-outline"
                        size={34}
                        color="#fff"
                    />
                    <View style={{ marginLeft: 14 }}>
                        <Text style={styles.bannerLabel}>En curso</Text>
                        <Text style={styles.bannerEmpresa}>Empresa XYZ S.A.S</Text>
                    </View>
                    <View style={styles.badgeEstado}>
                        <Text style={styles.badgeTexto}>Activa</Text>
                    </View>
                </View>

                {/* estadistica bitacoras */}
                <View style={styles.card}>
                    <Text style={styles.cardTitulo}>Bitácoras</Text>
                    <View style={styles.bitacorasGrid}>
                        <View style={styles.bitacoraCirculo}>
                            <Text style={styles.bitacoraNumero}>{bitacorasTotal}</Text>
                            <Text style={styles.bitacoraLabel}>Total</Text>
                        </View>
                        <View style={[styles.bitacoraCirculo, { borderColor: "#1e4ea1" }]}>
                            <Text style={[styles.bitacoraNumero, { color: "#1e4ea1" }]}>
                                {bitacorasEntregadas}
                            </Text>
                            <Text style={styles.bitacoraLabel}>Entregadas</Text>
                        </View>
                        <View style={[styles.bitacoraCirculo, { borderColor: "#4CAF50" }]}>
                            <Text style={[styles.bitacoraNumero, { color: "#4CAF50" }]}>
                                {bitacorasAprobadas}
                            </Text>
                            <Text style={styles.bitacoraLabel}>Aprobadas</Text>
                        </View>
                    </View>
                </View>

                {/* visitas del instructor*/}
                <View style={styles.card}>
                    <Text style={styles.cardTitulo}>Visitas del Instructor</Text>
                    {visitas.map((v) => (
                        <View key={v.numero} style={styles.visitaFila}>
                            <View
                                style={[styles.visitaCirculo, { backgroundColor: v.color }]}
                            >
                                <Text style={styles.visitaNumeroTexto}>{v.numero}</Text>
                            </View>
                            <View style={{ flex: 1, marginLeft: 14 }}>
                                <Text style={styles.visitaTitulo}>Visita N° {v.numero}</Text>
                                <Text style={styles.visitaFecha}>{v.fecha}</Text>
                            </View>
                            <View
                                style={[
                                    styles.visitaBadge,
                                    { backgroundColor: v.color + "22" },
                                ]}
                            >
                                <Text style={[styles.visitaBadgeTexto, { color: v.color }]}>
                                    {v.estado}
                                </Text>
                            </View>
                        </View>
                    ))}
                </View>

                {/* doc */}
                <View style={[styles.card, { marginBottom: 100 }]}>
                    <Text style={styles.cardTitulo}>Documentos</Text>
                    {[
                        {
                            nombre: "Carta de inicio",
                            icono: "file-document-outline",
                            estado: "Aprobado",
                        },
                        {
                            nombre: "Contrato de aprendizaje",
                            icono: "file-sign",
                            estado: "Aprobado",
                        },
                        {
                            nombre: "Informe final",
                            icono: "file-chart-outline",
                            estado: "Pendiente",
                        },
                    ].map((doc, i) => (
                        <View key={i} style={styles.docFila}>
                            <MaterialCommunityIcons
                                name={doc.icono}
                                size={22}
                                color="#1e4ea1"
                            />
                            <Text style={styles.docNombre}>{doc.nombre}</Text>
                            <Text
                                style={[
                                    styles.docEstado,
                                    { color: doc.estado === "Aprobado" ? "#4CAF50" : "#FFA726" },
                                ]}
                            >
                                {doc.estado}
                            </Text>
                        </View>
                    ))}
                </View>
            </ScrollView>

            {/* footer */}
            <View style={styles.navbar}>
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                    <MaterialCommunityIcons name="home-outline" size={26} color="#888" />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.botonCentral}
                    onPress={() => navigation.navigate("Subir")}
                >
                    <MaterialCommunityIcons name="plus" size={30} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Perfil")}>
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
        backgroundColor: "#F2F4F8",
    },
    scroll: {
        paddingHorizontal: 20,
        paddingTop: 55,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 22,
    },
    titulo: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
    },
    banner: {
        backgroundColor: "#1e4ea1",
        borderRadius: 18,
        padding: 18,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 18,
    },
    bannerLabel: {
        fontSize: 12,
        color: "#aec6f0",
        marginBottom: 2,
    },
    bannerEmpresa: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#fff",
    },
    badgeEstado: {
        marginLeft: "auto",
        backgroundColor: "#4CAF50",
        borderRadius: 20,
        paddingHorizontal: 12,
        paddingVertical: 5,
    },
    badgeTexto: {
        color: "#fff",
        fontSize: 12,
        fontWeight: "bold",
    },
    card: {
        backgroundColor: "#fff",
        borderRadius: 18,
        padding: 18,
        marginBottom: 16,
        shadowColor: "#000",
        shadowOpacity: 0.06,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 3 },
        elevation: 3,
    },
    cardTitulo: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#1e4ea1",
        marginBottom: 16,
    },
    // bitacoras
    bitacorasGrid: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: 16,
    },
    bitacoraCirculo: {
        width: 78,
        height: 78,
        borderRadius: 39,
        borderWidth: 3,
        borderColor: "#ddd",
        justifyContent: "center",
        alignItems: "center",
    },
    bitacoraNumero: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#555",
    },
    bitacoraLabel: {
        fontSize: 11,
        color: "#999",
        marginTop: 2,
    },
    botonSecundario: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1.5,
        borderColor: "#1e4ea1",
        borderRadius: 10,
        paddingVertical: 10,
        gap: 4,
    },
    botonSecundarioTexto: {
        color: "#1e4ea1",
        fontWeight: "600",
        fontSize: 14,
    },
    // visitas
    visitaFila: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 14,
    },
    visitaCirculo: {
        width: 38,
        height: 38,
        borderRadius: 19,
        justifyContent: "center",
        alignItems: "center",
    },
    visitaNumeroTexto: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 15,
    },
    visitaTitulo: {
        fontSize: 14,
        fontWeight: "600",
        color: "#333",
    },
    visitaFecha: {
        fontSize: 12,
        color: "#999",
        marginTop: 2,
    },
    visitaBadge: {
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 4,
    },
    visitaBadgeTexto: {
        fontSize: 12,
        fontWeight: "600",
    },
    //doc
    docFila: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 11,
        borderBottomWidth: 1,
        borderBottomColor: "#f0f0f0",
        gap: 12,
    },
    docNombre: {
        flex: 1,
        fontSize: 14,
        color: "#333",
        marginLeft: 4,
    },
    docEstado: {
        fontSize: 13,
        fontWeight: "600",
    },

    // NAVBAR
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
        borderColor: "#eee",
    },
    botonCentral: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: "#1e4ea1",
        justifyContent: "center",
        alignItems: "center",
        marginTop: -25,
    },
});
