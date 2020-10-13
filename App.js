import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Header from './components/Header';
// import { v4 as uuidv4 } from 'uuid'
import {randomValue} from './utils/randomValue';

const App = () => {
  const [items, setItems] = useState([
    {id: '1', text: 'Eggs'},
    {id: '2', text: 'Milk'},
    {id: '3', text: 'Bread'},
    {id: '4', text: 'Juice'},
  ]);
  return (
    <View style={styles.container}>
      <Header title="Shooping List" />
      <FlatList
        data={items}
        renderItem={({item}) => <Text>{item.text}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
