import React from 'react';
import { EvilIcons } from '@expo/vector-icons';
import { TouchableOpacity, Share, StyleSheet } from 'react-native';

export default ShareIcon = () => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: 'Pflanzy',
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
      <EvilIcons name="share-apple" size={40} />
    </TouchableOpacity>
  );
};
