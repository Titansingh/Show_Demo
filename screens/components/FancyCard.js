import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const FancyCard = ({props}) => {
  const {name, rating, image, summary, premiered, ended} = props.show;

  const defaultImage = 'https://example.com/default-image.jpg'; // Replace with your default image URL
  const defaultRating = 'N/A';
  const defaultTitle = 'Not Available';

  return (
    <View style={styles.cardContainer}>
      <Image
        style={styles.image}
        source={{
          uri: image?.original || defaultImage,
        }}
      />
      <View style={styles.detailsContainer}>
        <View style={styles.titleRatingContainer}>
          <Text numberOfLines={1} style={styles.titleText}>
            {name || defaultTitle}
          </Text>
          <View style={styles.ratingContainer}>
            <Text style={styles.ratingText}>
              {rating?.average ? rating.average.toFixed(1) : defaultRating}
            </Text>
          </View>
        </View>
        <Text numberOfLines={3} style={styles.descriptionText}>
          {summary}
        </Text>
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>
            {premiered} - {ended || 'Present'}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default FancyCard;

const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    aspectRatio: 16 / 9,
    borderRadius: 16,
    overflow: 'hidden',
    marginTop: 10,
    marginBottom: 10,
    elevation: 5,
  },
  image: {
    flex: 1,
  },
  detailsContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 16,
  },
  titleRatingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  titleText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    color: 'yellow',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 8,
  },
  descriptionText: {
    color: 'white',
    fontSize: 14,
    marginBottom: 8,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerText: {
    color: '#E50914',
    fontSize: 14,
  },
});
