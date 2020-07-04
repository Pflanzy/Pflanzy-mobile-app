import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Labels from '../constants/Labels';
import Colors from '../constants/Colors';

function ExploreLabelComponent(props) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.labelContainer}>
        <Text style={styles.labelText}>{Labels.tip}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
  },
  labelContainer: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: Colors.collectionLabel,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: Colors.basicShadows,
    shadowOpacity: 0.4,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 2,
  },
  labelText: {
    color: Colors.defaultWhite,
  },
});

export default ExploreLabelComponent;
