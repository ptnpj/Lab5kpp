import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, SafeAreaView, FlatList } from 'react-native';


export const validateFirstName = (name: string): boolean => name.trim().length > 0;
export const validateLastName = (name: string): boolean => name.trim().length > 0;

interface NewsItem {
  id: string;
  title: string;
  description: string;
  date: string;
}


const MOCK_NEWS: NewsItem[] = [
  {
    id: '1',
    title: 'Збірка APK пройшла успішно',
    description: 'Студентка Лілія Мунтян успішно зробила 6 лабу з КПП та отримала залік ура нарешті.',
    date: '18.06.2026',
  },
  {
    id: '2',
    title: 'Таємнича групка студентів все ще не закрила дисципліну дизайну',
    description: 'Згідно з останніми оновленнями, для кількох студентів СН-21 боротьба все ще триває, нижче Ви зможете переглянути, як одна з них відгукується про дану ситуацію.',
    date: '16.06.2026',
  },
  {
    id: '3',
    title: 'Лаби чи ігри? Що краще для самопочуття студента?',
    description: 'Суперечки між прихильниками вчасного навчання та невчасного відпочинку тривають. Проте що ж насправді таке справжнє щастя під час сесії, закрити всі предмети чи нарешті відпочити?',
    date: '14.06.2026',
  },
];


function NewsScreen() {
  const renderNewsItem = ({ item }: { item: NewsItem }) => (
    <View style={styles.newsCard}>
      <Text style={styles.newsCardTitle}>{item.title}</Text>
      <Text style={styles.newsCardDesc}>{item.description}</Text>
      <Text style={styles.newsCardDate}>{item.date}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.newsContainer}>
      <View style={styles.newsHeader}>
        <Text style={styles.newsHeaderTitle}>📰 Стрічка новин</Text>
      </View>
      <FlatList
        data={MOCK_NEWS}
        keyExtractor={(item) => item.id}
        renderItem={renderNewsItem}
        contentContainerStyle={styles.newsListContent}
      />
    </SafeAreaView>
  );
}

// Головний екран
export default function HomeScreen() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [message, setMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleShowResult = (): void => {
    if (!validateFirstName(firstName)) {
      setMessage("Помилка: ім'я не може бути порожнім!");
    } else if (!validateLastName(lastName)) {
      setMessage('Помилка: прізвище не може быть порожнім!');
    } else {
      setMessage(''); 
      setIsLoggedIn(true); 
    }
  };

  if (isLoggedIn) {
    return <NewsScreen />;
  }


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
          <Text style={styles.buttonText}>Вивести результат і увійти</Text>
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
    color: '#cc0000', 
  },

  newsContainer: {
    flex: 1,
    backgroundColor: '#f5f5f7',
  },
  newsHeader: {
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5ea',
    alignItems: 'center',
    paddingTop: 40,
  },
  newsHeaderTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1c1c1e',
  },
  newsListContent: {
    padding: 15,
  },
  newsCard: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2, 
  },
  newsCardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1c1c1e',
    marginBottom: 6,
  },
  newsCardDesc: {
    fontSize: 14,
    color: '#3a3a3c',
    lineHeight: 20,
    marginBottom: 10,
  },
  newsCardDate: {
    fontSize: 11,
    color: '#8e8e93',
    textAlign: 'right',
  },
});