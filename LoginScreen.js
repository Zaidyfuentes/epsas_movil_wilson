import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity,  StyleSheet, Image, KeyboardAvoidingView, Platform,  ScrollView, StatusBar, } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    console.log('Iniciando sesión con:', email, password);
    navigation.navigate('Bitacoras');
  };

  const handleForgotPassword = () => {
    console.log('Recuperar contraseña');
    navigation.navigate('Correo');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {/* logo epsas */}
        <View style={styles.logoContainer}>
          <Image
            source={require('./assets/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        {/* titulo */}
        <Text style={styles.title}>Inicio de sesión</Text>
        <Text style={styles.subtitle}>¡Hola de nuevo! que gusto verte de nuevo.</Text>

        {/* formulario */}
        <View style={styles.form}>
          {/* Correo */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Correo</Text>
            <TextInput
              style={styles.input}
              placeholder="ejemplo@email.com"
              placeholderTextColor="#aaa"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>

          {/* contraseña */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Contraseña</Text>
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.passwordInput}
                placeholder="••••••••••"
                placeholderTextColor="#aaa"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
                autoCapitalize="none"
              />
              <TouchableOpacity
                style={styles.eyeButton}
                onPress={() => setShowPassword(!showPassword)}
              >
                <Ionicons name={showPassword ? 'eye-off-outline' : 'eye-outline'} size={20} color="#9ca3af" />
              </TouchableOpacity>
            </View>
          </View>

          {/* boton de inicio */}
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin} activeOpacity={0.85}>
            <Text style={styles.loginButtonText}>Inicio</Text>
          </TouchableOpacity>

          {/* olvidaste tu contraseña */}
          <TouchableOpacity onPress={handleForgotPassword} style={styles.forgotContainer}>
            <Text style={styles.forgotText}>¿Olvidaste tu contraseña?</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 32,
    paddingTop: 50,
    paddingBottom: 40,
    alignItems: 'center',
  },

  // Logo
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 230,
    height: 240,
  },

  // Título
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#111827',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 13.5,
    color: '#6b7280',
    textAlign: 'center',
    marginBottom: 32,
    lineHeight: 20,
  },

  // Formulario
  form: {
    width: '100%',
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 13,
    fontWeight: '600',
    color: '#39A900',
    marginBottom: 6,
  },
  input: {
    borderBottomWidth: 1.5,
    borderBottomColor: '#d1d5db',
    paddingVertical: 10,
    paddingHorizontal: 2,
    fontSize: 15,
    color: '#111827',
    backgroundColor: 'transparent',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1.5,
    borderBottomColor: '#d1d5db',
  },
  passwordInput: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 2,
    fontSize: 15,
    color: '#111827',
  },
  eyeButton: {
    padding: 6,
  },
  eyeIcon: {
    fontSize: 18,
  },

  // Botón principal
  loginButton: {
    backgroundColor: '#39A900',
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 60,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 28,
    marginBottom: 16,
    shadowColor: '#39A900',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
    minWidth: 220,
  },
  loginButtonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: 0.5,
  },

  // Olvidaste contraseña
  forgotContainer: {
    alignItems: 'flex-start',
    paddingVertical: 6,
  },
  forgotText: {
    fontSize: 13.5,
    color: '#39A900',
    textDecorationLine: 'underline',
  },
});