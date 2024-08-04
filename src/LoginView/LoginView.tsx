import React, { FC, useState } from 'react';
import { InputField } from '../InputField';
import { client } from '../client';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, SafeAreaView, Dimensions } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

export const LoginView: FC = () => {
  const [usedOneTimePasswordMethod, setUsedOneTimePasswordMethod] = useState<
    'email' | 'sms' | null
  >(null);

  if (usedOneTimePasswordMethod !== null) {
    const onSubmit = (token: string) => {
      if (usedOneTimePasswordMethod === 'email') {
        client.auth.email.verifyOTP(token);
      } else if (usedOneTimePasswordMethod === 'sms') {
        client.auth.sms.verifyOTP(token);
      }
    };

    return (
      <SafeAreaView style={styles.container}>
        <LinearGradient
          colors={['#2B0E54', '#1A0933', '#0D041A']}
          style={styles.gradient}
        >
          <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <Text style={styles.title}>Enter OTP</Text>
            <InputField
              key="otp"
              placeholder="Enter OTP token"
              onSubmit={onSubmit}
              style={styles.input}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={() => setUsedOneTimePasswordMethod(null)}
            >
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </ScrollView>
        </LinearGradient>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#1A0933', '#1A0933', '#1A0933']}
        style={styles.gradient}
      >
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <Text style={styles.title}>RWA App</Text>
          <Text style={styles.subTitle}>Gateway to investment opportunities</Text>
         
          <TouchableOpacity
            style={[styles.button, styles.secondaryButton]}
            onPress={() => client.ui.auth.show()}
          >
            <Ionicons name="person" size={24} color="#64B5F6" />
            <Text style={styles.secondaryButtonText}>Sign Up</Text>
          </TouchableOpacity>
        </ScrollView> 
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  gradient: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  scrollViewContent: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    minHeight: height,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#FFFFFF',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10
  },
  subTitle: {
    fontSize: 18,
    marginBottom: 30,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 8,
    padding: 15,
    width: width * 0.85,
    marginBottom: 20,
    color: '#FFFFFF',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#64B5F6',
    padding: 15,
    borderRadius: 8,
    width: width * 0.85,
    marginBottom: 15,
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  secondaryButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 2,
    borderColor: '#64B5F6',
  },
  secondaryButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  separator: {
    height: 1,
    width: '80%',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    marginVertical: 15,
  },
  orText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});