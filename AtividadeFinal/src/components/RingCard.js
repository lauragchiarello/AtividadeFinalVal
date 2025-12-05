import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

const RingCard = ({ ring }) => {
  return (
    <View style={styles.card}>
      <Image 
        source={{ uri: ring.imagem }} 
        style={styles.ringImage}
        resizeMode="cover"
      />
      <View style={styles.cardContent}>
        <Text style={styles.ringTitle}>
          {ring.marca} {ring.modelo}
        </Text>
        <View style={styles.ringDetails}>
          <Text style={styles.ringDetail}>Preço: {ring.preco}</Text>
          <Text style={styles.ringDetail}>Cor: {ring.cor}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    overflow: 'hidden',
  },
  ringImage: {
    width: '100%',
    height: 200,
  },
  cardContent: {
    padding: 16,
  },
  ringTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  ringDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  ringDetail: {
    fontSize: 16,
    color: '#666',
  },
  ringId: {
    fontSize: 14,
    color: '#999',
    fontStyle: 'italic',
  },
});

export default RingCard;