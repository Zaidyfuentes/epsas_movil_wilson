import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Animated } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// Componente reutilizable de tarjeta de info
function InfoCard({ icon, label, children, iconBg }) {
    return (
        <View style={styles.infoCard}>
            <View style={[styles.infoCardIcon, { backgroundColor: iconBg || "#EEF4FC" }]}>
                <MaterialCommunityIcons name={icon} size={22} color="#1e4ea1" />
            </View>
            <View style={styles.infoCardContent}>
                <Text style={styles.infoCardLabel}>{label}</Text>
                {children}
            </View>
        </View>
    );
}

export default function EstBitacoraScreen({ navigation }) {
    const [expandObs, setExpandObs] = useState(false);

    return (
        <View style={styles.container}>

            {/* HEADER */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <MaterialCommunityIcons name="arrow-left" size={22} color="#1e4ea1" />
                </TouchableOpacity>
                <Text style={styles.titulo}>Detalle de Bitácora</Text>
                <View style={{ width: 40 }} />
            </View>

            <ScrollView
                style={{ flex: 1 }}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
                keyboardShouldPersistTaps="handled"
            >

                {/* HERO ESTADO */}
                <View style={styles.heroCard}>
                    <View style={styles.heroIconWrap}>
                        <MaterialCommunityIcons name="file-document-check-outline" size={42} color="#1e4ea1" />
                    </View>
                    <Text style={styles.heroTitle}>Registro N° 1</Text>
                    <View style={styles.estadoBadge}>
                        <MaterialCommunityIcons name="check-circle" size={16} color="#fff" />
                        <Text style={styles.estadoBadgeText}>Aprobada</Text>
                    </View>
                </View>

                {/* SECCION INFO */}
                <Text style={styles.sectionLabel}>Información de la bitácora</Text>

                <InfoCard icon="file-document-outline" label="Nombre del archivo" iconBg="#EEF4FC">
                    <Text style={styles.infoCardValue}>g.jabgangkjghgjh</Text>
                </InfoCard>

                <InfoCard icon="calendar-check-outline" label="Fecha de entrega" iconBg="#EEF4FC">
                    <Text style={styles.infoCardValue}>26 Mar 2026</Text>
                </InfoCard>

                <InfoCard icon="account-check-outline" label="Revisado por" iconBg="#EEF4FC">
                    <Text style={styles.infoCardValue}>Instructor Wilson</Text>
                </InfoCard>

                {/* OBSERVACIONES */}
                <View style={styles.observacionesCard}>
                    {/* Solo el header es tocable para expandir/colapsar */}
                    <TouchableOpacity
                        style={styles.observacionesHeader}
                        onPress={() => setExpandObs(!expandObs)}
                        activeOpacity={0.7}
                    >
                        <View style={styles.infoCardIcon}>
                            <MaterialCommunityIcons name="comment-text-outline" size={22} color="#1e4ea1" />
                        </View>
                        <Text style={styles.observacionesTitle}>Observaciones</Text>
                        <MaterialCommunityIcons
                            name={expandObs ? "chevron-up" : "chevron-down"}
                            size={22}
                            color="#8EA7C9"
                        />
                    </TouchableOpacity>
                    {expandObs && (
                        <Text style={styles.observacionesTexto}>
                            aqui va la observacion
                        </Text>
                    )}
                </View>

                {/* BOTON DE DESCARGA */}
                <TouchableOpacity style={styles.downloadBtn} activeOpacity={0.85}>
                    <MaterialCommunityIcons name="download-outline" size={22} color="#fff" />
                    <Text style={styles.downloadBtnText}>Descargar Bitácora</Text>
                </TouchableOpacity>

                <View style={{ height: 100 }} />
            </ScrollView>

            {/* NAVBAR */}
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
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: 55,
        paddingHorizontal: 20,
        paddingBottom: 15,
        backgroundColor: "#F2F2F2",
    },
    backButton: {
        width: 40,
        height: 40,
        borderRadius: 12,
        backgroundColor: "#EEF4FC",
        justifyContent: "center",
        alignItems: "center",
    },
    titulo: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#1e4ea1",
    },
    scrollContent: {
        paddingHorizontal: 20,
        paddingTop: 5,
    },

    // HERO
    heroCard: {
        backgroundColor: "#1e4ea1",
        borderRadius: 20,
        padding: 30,
        alignItems: "center",
        marginBottom: 25,
        shadowColor: "#1e4ea1",
        shadowOpacity: 0.3,
        shadowRadius: 12,
        shadowOffset: { width: 0, height: 6 },
        elevation: 8,
    },
    heroIconWrap: {
        width: 72,
        height: 72,
        borderRadius: 20,
        backgroundColor: "rgba(255,255,255,0.15)",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 14,
    },
    heroTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff",
        marginBottom: 12,
    },
    estadoBadge: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#6bb64a",
        borderRadius: 50,
        paddingHorizontal: 16,
        paddingVertical: 6,
        gap: 6,
    },
    estadoBadgeText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 14,
    },

    // SECTION LABEL
    sectionLabel: {
        fontSize: 13,
        fontWeight: "700",
        color: "#999",
        textTransform: "uppercase",
        letterSpacing: 1,
        marginBottom: 12,
        marginLeft: 4,
    },

    // INFO CARDs
    infoCard: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 16,
        padding: 16,
        marginBottom: 12,
        shadowColor: "#000",
        shadowOpacity: 0.04,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 3 },
        elevation: 2,
    },
    infoCardIcon: {
        width: 46,
        height: 46,
        borderRadius: 12,
        backgroundColor: "#EEF4FC",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 14,
    },
    infoCardContent: {
        flex: 1,
    },
    infoCardLabel: {
        fontSize: 12,
        color: "#999",
        marginBottom: 3,
        fontWeight: "600",
    },
    infoCardValue: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#333",
    },

    // OBSERVACIONES
    observacionesCard: {
        backgroundColor: "#fff",
        borderRadius: 16,
        padding: 16,
        marginBottom: 16,
        marginTop: 4,
        shadowColor: "#000",
        shadowOpacity: 0.04,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 3 },
        elevation: 2,
    },
    observacionesHeader: {
        flexDirection: "row",
        alignItems: "center",
    },
    observacionesTitle: {
        flex: 1,
        fontSize: 15,
        fontWeight: "bold",
        color: "#333",
        marginLeft: 14,
    },
    observacionesTexto: {
        fontSize: 14,
        color: "#555",
        lineHeight: 22,
        marginTop: 14,
        paddingTop: 14,
        borderTopWidth: 1,
        borderTopColor: "#F0F0F0",
    },

    // DOWNLOAD BUTTON
    downloadBtn: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1e4ea1",
        borderRadius: 14,
        paddingVertical: 16,
        gap: 10,
        shadowColor: "#1e4ea1",
        shadowOpacity: 0.35,
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 4 },
        elevation: 6,
    },
    downloadBtnText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
    },

    // NAVBAR
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
    },
});
