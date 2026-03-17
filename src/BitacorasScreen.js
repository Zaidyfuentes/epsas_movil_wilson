import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function BitacorasScreen({navigation}) {
    return (
        <View style={styles.container}>
            <ScrollView>
                {/* titulo */}
                <Text style={styles.titulo}>Bitacoras</Text>
                <Text style={styles.subtitulo}>
                    ¡Hola Aprendiz!
                </Text>

                {/* contenedor de cards */}
                <View style={styles.grid}>

                    {/* cards */}
                    <TouchableOpacity
                        style={styles.cardAzul}
                        onPress={() => navigation.navigate("EstBitacora")}
                    >
                        <MaterialCommunityIcons
                            name="file-document-outline"
                            size={40}
                            color="#fff"
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.cardAzul}
                        onPress={() => navigation.navigate("EstBitacora")}
                    >
                        <MaterialCommunityIcons
                            name="file-document-outline"
                            size={40}
                            color="#fff"
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.cardAzul}
                        onPress={() => navigation.navigate("EstBitacora")}
                    >
                        <MaterialCommunityIcons
                            name="file-document-outline"
                            size={40}
                            color="#fff"
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.cardAzul}
                        onPress={() => navigation.navigate("EstBitacora")}
                    >
                        <MaterialCommunityIcons
                            name="file-document-outline"
                            size={40}
                            color="#fff"
                        />
                    </TouchableOpacity>

                    {/* agregar*/}
                    <TouchableOpacity style={styles.cardGris} onPress={() => navigation.navigate("Bitacoras")}>
                        <MaterialCommunityIcons name="plus" size={40} color="#bfc3c7"/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cardGris} onPress={() => navigation.navigate("Bitacoras")}>
                        <MaterialCommunityIcons name="plus" size={40} color="#bfc3c7"/>
                    </TouchableOpacity>
                </View>
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

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff",
        paddingHorizontal:25,
        paddingTop:60
    },  
    titulo:{
        fontSize:24,
        fontWeight:"bold",
        color:"#333",
        marginBottom:5
    },  
    subtitulo:{
        fontSize:16,
        color:"#555",
        marginBottom:25
    },  
    grid:{
        flexDirection:"row",
        flexWrap:"wrap",
        justifyContent:"space-between"
    },  
    cardAzul:{
        width:"47%",
        height:120,
        backgroundColor:"#1e4ea1",
        borderRadius:20,
        marginBottom:20,
        justifyContent:"center",
        alignItems:"center"
    },  
    cardGris:{
        width:"47%",
        height:120,
        backgroundColor:"#e5e5e5",
        borderRadius:20,
        marginBottom:20,
        justifyContent:"center",
        alignItems:"center"
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
    botonCentral:{
        width:60,
        height:60,
        borderRadius:30,
        backgroundColor:"#1e4ea1",
        justifyContent:"center",
        alignItems:"center",
        marginTop:-25
    }
});
