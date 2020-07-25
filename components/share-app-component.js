import React from 'react';
import { Ionicons, EvilIcons } from '@expo/vector-icons';
import { TouchableOpacity, Share, StyleSheet } from 'react-native';

export default ShareIcon = () => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: 'Spread the word about Pflanzy :)',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <TouchableOpacity onPress={onShare}>
      <EvilIcons style={styles.icon} name="share-apple" size={50} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    margin: 10,
  },
});
