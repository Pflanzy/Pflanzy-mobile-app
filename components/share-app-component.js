import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

const ShareIcon = () => {

    return (
        <TouchableOpacity>
            <Ionicons name="ion:share" size={30}/>
        </TouchableOpacity>
    )
    
}

export default ShareIcon;