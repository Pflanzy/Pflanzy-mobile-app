import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Colors from '../constants/Colors';

function ExploreLabelComponent({ type }) {
  return (
    <View style={styles.mainContainer}>
      <View style={type === 'collection' ? styles.collectionStyle : styles.tipsStyle}>
        <Text style={styles.labelText}>
          {type === 'collection' ? 'Plant collection' : 'Plant tips'}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
  },
  collectionStyle: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: Colors.collectionLabel,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  tipsStyle: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: Colors.tipsLabel,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelText: {
    color: Colors.defaultWhite,
  },
});

export default ExploreLabelComponent;
