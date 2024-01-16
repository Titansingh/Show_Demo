import React from 'react';
import {StyleSheet, Text, FlatList, TouchableOpacity, View} from 'react-native';
import {useGetMusicQuery} from '../../redux/apiSlice/homePageApi';
import {SafeAreaView} from 'react-native-safe-area-context';
import FancyCard from '../components/FancyCard';

const HomeScreen = () => {
  const {data, error, isLoading} = useGetMusicQuery();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Latest Shows</Text>
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
          contentContainerStyle={styles.flatListContent}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
  },
  header: {
    backgroundColor: '#111',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  loadingText: {
    textAlign: 'center',
    marginTop: 10,
    color: '	#E50914',
  },
  errorText: {
    textAlign: 'center',
    marginTop: 10,
    color: '#e74c3c',
  },
  flatListContent: {
    paddingBottom: 20,
    marginTop: 20,
  },
});

export default HomeScreen;
