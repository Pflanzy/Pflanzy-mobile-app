import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, Button, ImageBackground } from 'react-native';
import Swiper from 'react-native-swiper';
import Colors from '../constants/Colors';

const styles = StyleSheet.create({
  slide: {
    minHeight: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: Colors.defaultWhite,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign:"center"
  },
});

const InitialSlide = () => {
    return (
        <Swiper dotColor={Colors.darkGreen} activeDotColor={Colors.defaultWhite} onIndexChanged={(index) => console.log(index)}>    
        <ImageBackground
             source={{
               uri:
                 'https://images.unsplash.com/photo-1488067769412-89fe0bfa6f58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
             }}
             blurRadius={3}
             style={styles.slide}>
             <Text style={styles.text}>Take a snap to identify your plant</Text>
           </ImageBackground>
         <ImageBackground blurRadius={3} style={styles.slide} source={{uri:"https://images.unsplash.com/photo-1491147334573-44cbb4602074?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"}}>
           <Text style={styles.text}>Discover how to care</Text>
         </ImageBackground>
         <ImageBackground blurRadius={4} style={styles.slide} source={{uri:"https://images.unsplash.com/photo-1503149779833-1de50ebe5f8a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1875&q=80"}}>
           <Text style={styles.text}>Set a reminder to not forget</Text>
         </ImageBackground>
       </Swiper>
    );
}

export default InitialSlide;


