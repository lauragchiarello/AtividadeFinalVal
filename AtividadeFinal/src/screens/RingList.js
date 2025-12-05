import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  StatusBar
} from 'react-native';
import { ringsData } from '../data/ringsData';
import RingCard from '../components/RingCard';

const RingList = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.Titulo}>Lista de Acessórios</Text>
      <Text style={styles.subTitulo}>{ringsData.length} Acessórios encontrados</Text>
      
      <FlatList
        data={ringsData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <RingCard ring={item} />}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  Titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 8,
    color: '#333',
  },
  subTitulo: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 16,
    color: '#666',
  },
  listContent: {
    paddingBottom: 20,
  },
});

export default RingList;