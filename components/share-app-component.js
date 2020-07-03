import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity, View } from 'react-native';


const ShareIcon = () => {
        const onShare = async () => {
          try {
            const result = await Share.share({
              message:
                'Spread the word about Pflanzy :)',
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
            <TouchableOpacity style={styles.wrapper} onPress={onShare}>
                <View>
                    <Ionicons name="ion:share" size={30} />
                </View>
            </TouchableOpacity>
        );
      };
      

export default ShareIcon;