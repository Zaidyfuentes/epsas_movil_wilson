import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './src/LoginScreen';
import RecuContraScreen from './src/RecuContraScreen';
import CodigoScreen from './src/CodigoScreen';
import ActualizarScreen from './src/ActualizarScreen';
import CorreoScreen from './src/CorreoScreen';
import BitacorasScreen from './src/BitacorasScreen';
import EstBitacoraScreen from './src/EstBitacoraScreen';
import SubirBitScreen from './src/SubirBitScreen';
import PerfilScreen from './src/PerfilScreen';
import EditarPerfilScreen from './src/EdiPerfil';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login"  screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Login" component={LoginScreen}/>
                <Stack.Screen name="Correo" component={CorreoScreen}/>
                <Stack.Screen name="Recuperar" component={RecuContraScreen} />
                <Stack.Screen name="Codigo" component={CodigoScreen} />
                <Stack.Screen name="Actualizar" component={ActualizarScreen} />
                <Stack.Screen name="Bitacoras" component={BitacorasScreen}/>
                <Stack.Screen name="EstBitacora" component={EstBitacoraScreen}/>
                <Stack.Screen name="Subir" component={SubirBitScreen}/>
                <Stack.Screen name="Perfil" component={PerfilScreen}/>
                <Stack.Screen name="Editar" component={EditarPerfilScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}