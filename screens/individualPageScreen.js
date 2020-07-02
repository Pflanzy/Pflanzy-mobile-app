// import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
// import { useNavigation } from '@react-navigation/native'
import * as React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';

const individualPage = () => {

  // const pressHandler = () => {
  //   console.log('Back button pressed!')
  // }

  return (
    <View style={styles.container}>
      <ImageBackground source={require("../assets/images/TEST-flower-02.jpg")} style={styles.background}>
        {/* <View style={styles.header}>
          <TouchableOpacity onPress={pressHandler} style={styles.backIconBG}>
            <MaterialCommunityIcons name="backburger" size={30} color="black" />
          </TouchableOpacity>
        </View> */}
      </ImageBackground>
      <View style={styles.contentWrapper}>  
          <View style={styles.content}>
            <View>
              <Text style={styles.nameGeneric}>
                Name (Generic)
              </Text>
              <Text style={styles.nameScientific}>
                Name (Scientific)
              </Text>
            </View>
            <View style={styles.btnContainer}>
              <TouchableOpacity style={styles.btnReminder}>
                <Entypo name="drop" size={14} color="white" style={styles.waterDrop} />  
                <Text style={styles.btnText}>
                  Set care reminder
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnCalendar}>
                <AntDesign name="calendar" size={24} color="white" />            
              </TouchableOpacity> 
            </View>
            <View style={styles.contentBody}>
              <Text style={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus sint id quis quaerat consequatur facere optio facilis neque, possimus eligendi officia, quidem et nesciunt!
              </Text>                                      
            </View>
          </View>        
      </View>
    </View>
  );
};

export default individualPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee"
  },
  background: {
    flex: 1,
  },
  // header: {
  //   flexDirection: 'row',
  //   padding: 10
  // },
  // backIconBG: {
  //   backgroundColor: "#ffffff99",
  //   borderRadius: 50,
  //   padding: 4,
  // },
  contentWrapper: {
    position: "absolute",
    bottom: 0,
  },
  content: {
    backgroundColor: "#008080",
    borderTopRightRadius: 80, 
    padding: 20,
  },
  nameGeneric: {
    color: 'white',
    fontSize: 26,
    marginBottom: 10,
  },
  nameScientific: {
    color: 'white',
    marginBottom: 20,
    fontStyle: 'italic',
  },
  btnContainer: {
    flexDirection: 'row',
  },
  btnReminder: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#004e57",
    width: 240,
    padding: 10,
    marginBottom: 20,
    borderRadius: 50,
  },
  btnCalendar: {
    backgroundColor: "#004e57",
    // borderColor: "#004e57",
    // borderWidth: 1,
    borderRadius: 50,
    width: 46,
    height: 46,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
  },
  btnText: {
    color: 'white',
    fontSize: 18,
    paddingLeft: 6,
  },
  text: {
    color: 'white',
    lineHeight: 28,
    marginBottom: 20,
  }
});
