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
import FancyCard from '../components/FancyCard';
import {useGetShowQuery} from '../../redux/apiSlice/homePageApi';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSelector, useDispatch} from 'react-redux';
import {addLastSearch} from '../../redux/apiSlice/homePageSlice';

const SearchScreen = () => {
  const [showName, setShowName] = useState('');
  const [showCompleteName, setShowCompleteName] = useState('');
  const {data, error, isLoading} = useGetShowQuery(showCompleteName);
  const lastSearches = useSelector(state => state.homePageReducer.lastSearches);

  const dispatch = useDispatch();

  const handleSearch = async () => {
    if (showName.trim() !== '') {
      setShowCompleteName(showName);
      dispatch(addLastSearch(showName));
    }
  };

  const handleRecentSearch = search => {
    setShowName(search.text);
    setShowCompleteName(search.text);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <Icon name="search" size={20} color="white" style={styles.searchIcon} />
        <TextInput
          style={styles.inputText}
          placeholder="Enter Show Name"
          onChangeText={text => setShowName(text)}
          value={showName}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.recentSearchContainer}>
        <Text style={styles.recentSearchTitle}>Recent Searches:</Text>
        <FlatList
          horizontal
          data={lastSearches}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => handleRecentSearch(item)}>
              <Text style={styles.recentSearchItem}>{item.text}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>

      {isLoading && <Text style={styles.loadingText}>Loading...</Text>}
      {error && <Text style={styles.errorText}>Error: {error.message}</Text>}

      {data && (
        <FlatList
          data={data}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => {}}>
              <FancyCard props={item} />
            </TouchableOpacity>
          )}
          keyExtractor={item => item.show.id.toString()}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#111',
  },
  inputContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 20,
    alignItems: 'center',
    height: 40,
    borderColor: '#6D6C6C',
    backgroundColor: '#6D6C6C',
    elevation: 5,
  },
  searchIcon: {
    marginLeft: 10,
    marginRight: 10,
  },
  inputText: {
    flex: 1,
  },
  searchButton: {
    backgroundColor: '#E50914',
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
    backgroundColor: '#6D6C6C',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
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
    backgroundColor: '#E50914',
  },
  loadingText: {
    textAlign: 'center',
    marginTop: 10,
    color: '#E50914',
  },
  errorText: {
    textAlign: 'center',
    marginTop: 10,
    color: '#e74c3c',
  },
});

export default SearchScreen;
