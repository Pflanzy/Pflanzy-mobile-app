import React,{useEffect,useState} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Keyboard,
    ScrollView,
    ActivityIndicator,
    Image
  } from 'react-native';
  import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
  import SearchField from '../components/SearchField';
  import IndividualCard from '../components/IndividualCard';
  import cactus from '../assets/images/cactus.png';
 import Icon from "react-native-vector-icons/AntDesign"
const SearchFieldModal = ({plantData,useSelector,dispatch}) => {
    const [initialData, setInitialData] = useState(
        plantData.sort((a, b) => (a.commonName > b.commonName ? 1 : -1))
      );
      const [filteredData, setFilteredData] = useState([]);
      const [showLoading, setShowLoading] = useState(true);
      const modalVisible = useSelector(state => state.modalReducer.open);
      useEffect(() => {
        setFilteredData(initialData);
        const myTimeOut = setTimeout(() => {
          setShowLoading(false);
        }, 500);
        return () => {
          clearTimeout(myTimeOut);
        };
      }, []);
      const plantList = () => {
        return filteredData.map((element) => {
          return (
            <View key={element.scientificName}>
              <IndividualCard element={element} />
            </View>
          );
        });
      };
    
      const loadingFunction = () => {
        return (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#048243" />
          </View>
        );
      };
      const getData = (val) => {
        if (initialData) {
          const filteredResult = initialData.filter((element) => {
            return (
              element.commonName.toLowerCase().startsWith(val.toLowerCase()) ||
              element.scientificName.toLowerCase().startsWith(val.toLowerCase())
            );
          });
          setFilteredData(filteredResult);
        }
      };
    return (<>
    <TouchableWithoutFeedback onPress={() => dispatch({type:"TOGGLE"})} style={{paddingTop:10}}>
        <Icon name="close" size={30} color="#8FAE93" /> 
    </TouchableWithoutFeedback>
        <SearchField sendData={getData} /> 
    {showLoading ? (
          loadingFunction()
        ) : (
          <TouchableWithoutFeedback style={styles.wrapper} onPress={() => Keyboard.dismiss()}>
            <ScrollView>
              {filteredData.length > 0 ? (
                plantList()
              ) : (
                <View style={styles.cactusWrapper}>
                  <Image source={cactus} style={styles.cactusIcon} />
                  <Text style={styles.errorMsg}>Sorry, no matching plants :)</Text>
                </View>
              )}
            </ScrollView>
          </TouchableWithoutFeedback>
        )}
        </>
    );
}
const styles = StyleSheet.create({
    search:{
  paddingTop:100
    },
    photo: {
      width:"100%",
      height:"100%",
      resizeMode:"cover"
    },
    wrapper: {
      paddingTop: 10,
      paddingBottom: 20,
    },
    loadingContainer: {
      alignItems: 'center',
      justifyContent: 'flex-end',
      height: '55%',
    },
    plantList: {
      paddingBottom: -20,
    },
    cactusWrapper: {
      justifyContent: 'center',
      height: 400,
      alignItems: 'center',
    },
    cactusIcon: {
      height: 100,
      width: 100,
    },
    errorMsg: {
      fontSize: 20,
      marginTop: 10,
    }, centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5
    },
    openButton: {
      backgroundColor: "#F194FF",
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
  });
export default SearchFieldModal;
