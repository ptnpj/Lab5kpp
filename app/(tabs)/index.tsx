import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, SafeAreaView } from 'react-native';

// Експортуємо функції перевірки для майбутніх юніт-тестів (як у методичці)
export const validateFirstName = (name: string): boolean => name.trim().length > 0;
export const validateLastName = (name: string): boolean => name.trim().length > 0;

export default function HomeScreen() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [message, setMessage] = useState('');

  const handleShowResult = (): void => {
    if (!validateFirstName(firstName)) {
      setMessage("Помилка: ім'я не може бути порожнім!");
    } else if (!validateLastName(lastName)) {
      setMessage('Помилка: прізвище не може бути порожнім!');
    } else {
      setMessage(`Результат: ${firstName.trim()} ${lastName.trim()}`);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Варіант 9: Форма імені та прізвища</Text>

        <TextInput
          style={styles.input}
          placeholder="Введіть ім'я"
          placeholderTextColor="#9ca3af"
          onChangeText={setFirstName}
          value={firstName}
        />

        <TextInput
          style={styles.input}
          placeholder="Введіть прізвище"
          placeholderTextColor="#9ca3af"
          onChangeText={setLastName}
          value={lastName}
        />

        <TouchableOpacity style={styles.button} onPress={handleShowResult}>
          <Text style={styles.buttonText}>Вивести результат</Text>
        </TouchableOpacity>

        {message ? (
          <Text style={styles.message}>{message}</Text>
        ) : null}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  formContainer: {
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginBottom: 15,
    padding: 10,
    fontSize: 16,
    color: '#000',
  },
  button: {
    backgroundColor: '#007aff',
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  message: {
    marginTop: 20,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '600',
    color: '#333',
  },
});