import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const BookCard = ({props}) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.bookName}>
          Book Name: {props.top_work || 'Unknown Book'}
        </Text>
        <Text style={styles.authorName}>
          Author: {props.name || 'Unknown Author'}
        </Text>
        <Text style={styles.workCount}>
          Work Count: {props.work_count || 'Unknown Work Count'}
        </Text>
      </View>
    </View>
  );
};

export default BookCard;

const styles = StyleSheet.create({
  cardContainer: {
    width: 350,
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 5,
  },
  textContainer: {
    padding: 10,
  },
  bookName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  authorName: {
    fontSize: 14,
    color: 'gray',
  },
  workCount: {
    fontSize: 14,
    color: 'green',
  },
});
