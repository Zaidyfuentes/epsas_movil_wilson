import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './LoginScreen';
import RecuContraScreen from './RecuContraScreen';
import CodigoScreen from './CodigoScreen';
import ActualizarScreen from './ActualizarScreen';
import CorreoScreen from './CorreoScreen';
import BitacorasScreen from './BitacorasScreen';
import EstBitacoraScreen from './EstBitacoraScreen';
import SubirBitScreen from './SubirBitScreen';
import PerfilScreen from './PerfilScreen';

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
            </Stack.Navigator>
        </NavigationContainer>
    );
}