import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import BookCard from './components/bookCard';
import {useGetAuthorQuery} from '../../redux/apiSlice/homePageApi';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSelector, useDispatch} from 'react-redux';
import {
  addLastSearch,
  removeLastSearch,
} from '../../redux/apiSlice/homePageSlice';

const HomeScreen = () => {
  const [authorName, setAuthorName] = useState('');
  const [authorCompleteName, setAuthorCompleteName] = useState('');
  const {data, error, isLoading} = useGetAuthorQuery(authorCompleteName);
  const lastSearches = useSelector(state => state.homePageReducer.lastSearches);

  const dispatch = useDispatch();

  const handleSearch = async () => {
    if (authorName.trim() !== '') {
      setAuthorCompleteName(authorName);
      dispatch(addLastSearch(authorName));
    }
  };

  const handleRecentSearch = search => {
    setAuthorName(search.text);
    setAuthorCompleteName(search.text);
    dispatch(addLastSearch(search.text));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.recentSearchContainer}>
        <Text style={styles.recentSearchTitle}>Recent Searches:</Text>
        <FlatList
          horizontal={true}
          data={lastSearches}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => handleRecentSearch(item)}>
              <Text style={styles.recentSearchItem}>{item.text}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon
          style={{marginLeft: 10, marginRight: 10}}
          name="search"
          size={25}
          color="#6D6C6C"
        />
        <TextInput
          style={styles.inputText}
          placeholder="Enter author name"
          onChangeText={text => setAuthorName(text)}
          value={authorName}></TextInput>
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>

      {isLoading && <Text style={styles.loadingText}>Loading...</Text>}
      {error && <Text style={styles.errorText}>Error: {error.message}</Text>}

      {data && (
        <FlatList
          data={data?.docs}
          renderItem={({item}) => (
            <TouchableOpacity disabled={true} onPress={() => {}}>
              <BookCard props={item} />
            </TouchableOpacity>
          )}
          keyExtractor={item => item.key.toString()}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#F5FCFF',
  },
  inputContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 20,
    alignItems: 'center',
    height: 40,
    borderColor: '#6D6C6C',
    backgroundColor: 'white',
    elevation: 5,
  },
  inputText: {
    flex: 1,
  },
  searchButton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'center',
  },
  searchButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  recentSearchContainer: {
    marginTop: 10,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
  },
  recentSearchTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  recentSearchItem: {
    color: 'white',
    marginBottom: 5,
    marginRight: 10,
    padding: 5,
    borderRadius: 5,
    backgroundColor: '#3498db',
  },
  loadingText: {
    textAlign: 'center',
    marginTop: 10,
    color: '#3498db',
  },
  errorText: {
    textAlign: 'center',
    marginTop: 10,
    color: '#e74c3c',
  },
});

export default HomeScreen;
