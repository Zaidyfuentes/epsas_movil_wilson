import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function EstBitacoraScreen({navigation}) {
    return (
        <View style={styles.container}>
        
            {/* header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <MaterialCommunityIcons name="arrow-left" size={26} color="#1e4ea1"/>
                </TouchableOpacity>

                <Text style={styles.titulo}>
                    Estado de la Bitacora
                </Text>
            </View>

            {/* estado bitacora */}
            <View style={styles.seccion}>
                <Text style={styles.label}>
                    Estado de la Bitacora
                </Text>

                <Text style={styles.valor}>
                    Aprobada
                </Text>
            </View>
    
          {/* titulo bitacora */}
            <View style={styles.seccion}>
                <Text style={styles.valor}>
                    g.jabgangkjghgjh
                </Text>
            </View>
    
            {/* observaciones */}
            <View style={styles.seccion}>
    
                <Text style={styles.label}>
                    Observaciones
                </Text>
    
                <Text style={styles.texto}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. 
                    Duis vulputate commodo lectus, ac blandit elit tincidunt id.
                </Text>
            </View>
    
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
        paddingTop:50,
        paddingHorizontal:25
    },
    header:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"flex-start",
        marginBottom:30
    },
    titulo:{
        fontSize:18,
        fontWeight:"bold",
        color:"#333"
    },
    seccion:{
        marginBottom:30,
        borderBottomWidth:1,
        borderBottomColor:"#ddd",
        paddingBottom:10
    },
    label:{
        fontSize:14,
        color:"#555",
        marginBottom:10
    },
    valor:{
        fontSize:15,
        color:"#222"
    },
    texto:{
        fontSize:14,
        color:"#444",
        lineHeight:20
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
    },
});
