import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import BookCard from './components/bookCard';
import {useGetAuthorQuery} from '../../redux/apiSlice/homePageApi';
import {SafeAreaView} from 'react-native-safe-area-context';

const HomeScreen = () => {
  const [authorName, setAuthorName] = useState('');
  const {data, error, isLoading} = useGetAuthorQuery(authorName);

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter author name"
        onChangeText={text => setAuthorName(text)}
        value={authorName}
      />
      {isLoading && <Text>Loading...</Text>}
      {error && <Text>Error: {error.message}</Text>}

      {data && (
        <FlatList
          data={data?.docs}
          renderItem={({item}) => <BookCard props={item} />}
          keyExtractor={item => item.key.toString()}
        />
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#F5FCFF',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 5,
    paddingRight: 5,
    marginBottom: 5,
  },
});
