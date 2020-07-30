import React, { useState } from 'react';
import { ScrollView, View, Text, Image, StyleSheet, Modal, Button } from 'react-native';
import ExploreLabel from '../components/ExploreLabel'
import Colors from '../constants/Colors'
import ImageViewer from 'react-native-image-zoom-viewer';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons';



const IndividualArticle = ({route}) => {
    const article = route.params.article;
    let imagesURLs = Object.values(article.images);
    const modalImages = imagesURLs
        .map((image) => {return {url: image}})
        .filter((image) => {return image.url != null && image.url != '';
    })

    const [visible, setVisibility] = useState(false)
    const [currentIndex, setCurrentIndex] = useState(0)
      
      return (
        <>
            <Modal visible={visible} transparent={false}>
                <ImageViewer enableSwipeDown={true} onSwipeDown={() => setVisibility(false)}  swipeDownThreshold={10} imageUrls={modalImages} index={currentIndex}/>
                <TouchableOpacity activeOpacity={1} style={styles.closeButton} onPress={() => setVisibility(false)}>
                    <Entypo name="circle-with-cross" size={24} color={Colors.defaultWhite} />
                </TouchableOpacity>
            </Modal>
            <ScrollView style={styles.mainWrapper}>
                <View style={styles.imageWrapper}>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => {setVisibility(true); setCurrentIndex(0)}}>
                        <Image style={styles.image} source={{uri: article.images.imagePrimary}}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.content}>
                    <View style={styles.labelWrapper}>
                        <ExploreLabel label={article.label}/>
                    </View>
                    <Text style={styles.headline}>{article.headline}</Text>
                    <Text style={styles.author}>Author: {article.author}</Text>
                    <Text style={article.firstSubheader ? styles.subHeader : styles.none}>{article.firstSubheader}</Text>
                    <Text style={article.firstParagraph ? styles.paragraph : styles.none}>{article.firstParagraph}</Text>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => {setVisibility(true); setCurrentIndex(1)}}>
                        <Image 
                        style={article.images.imageSecondary ? styles.imageInText : styles.none} source={article.images.imageSecondary ? {uri: article.images.imageSecondary} : null}
                        />
                    </TouchableOpacity>
                    <Text style={article.secondSubheader ? styles.subHeader : styles.none}>{article.secondSubheader}</Text>
                    <Text style={article.secondParagraph ? styles.paragraph : styles.none}>{article.secondParagraph}</Text>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => {setVisibility(true); setCurrentIndex(2)}}>
                        <Image style={article.images.imageTernary ? styles.imageInText : styles.none} source={article.images.imageTernary ? {uri: article.images.imageTernary} : null}/>
                    </TouchableOpacity>
                    <Text style={article.thirdSubheader ? styles.subHeader : styles.none}>{article.thirdSubheader}</Text>
                    <Text style={article.thirdParagraph ? styles.paragraph : styles.none}>{article.thirdParagraph}</Text>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => {setVisibility(true); setCurrentIndex(3)}}>
                        <Image style={article.images.imageFour ? styles.imageInText : styles.none} source={article.images.imageFour ? {uri: article.images.imageFour} : null}/>
                    </TouchableOpacity>
                    <Text style={article.forthSubheader ? styles.subHeader : styles.none}>{article.forthSubheader}</Text>
                    <Text style={article.forthParagraph ? styles.paragraph : styles.none}>{article.forthParagraph}</Text>
                </View>
            </ScrollView>
        </>
    )
}
 
const styles = StyleSheet.create({
    wrapper: {
        display: "flex",
    },
    none: {
        display: "none"
    },
    image: {
        width: '100%',
        height: 300, 
    },
    imageInText: {
        width: '85%',
        height: 200,
        alignSelf: 'center',
        marginTop: 20,
        marginBottom: 20,
        borderRadius: 5
    },
    closeButton: {
        backgroundColor: 'black',
        display: 'flex',
        alignItems: 'center',
        paddingBottom: '7%',
    },
    content: {
        marginHorizontal: 20,
        marginBottom: 20,
        marginTop: 10,
    },
    labelWrapper: {
        marginTop: 10,
        alignSelf: "flex-start",
    },
    headline: {
        fontSize: 28,
        marginBottom: 10,
        marginTop: 10,
    },
    subHeader: {
        fontSize: 18,
        marginBottom: 10,
        marginTop: 20,
        lineHeight: 24
    },
    author: {
        fontSize: 14,
        color: 'grey'
    },
    paragraph: {
        fontSize: 16,
        lineHeight: 24,
        color: Colors.textGrey,
        marginBottom: 20,
    },
    buttonWrapper: {
        backgroundColor: '#004e57',
        borderRadius: 25,
        marginTop: 20,
        marginBottom: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        width: 250,
        borderWidth: 2,
        borderColor: '#79C3CA',
    },
    buttonText: {
        color: Colors.defaultWhite,
        fontSize: 18,
        marginRight: 5
    }
})

export default IndividualArticle;