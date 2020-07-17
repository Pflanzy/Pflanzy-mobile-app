import React from 'react';
import {TouchableOpacity, ScrollView, View, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ExploreLabelComponent from '../components/ExploreLabel'
import Colors from '../constants/Colors'

const IndividualArticle = ({route}) => {
    const article = route.params.article;
    return (
        <ScrollView style={styles.mainWrapper}>
            <View style={styles.imageWrapper}>
                <Image style={styles.image} source={{uri: article.images.imagePrimary}}/>
            </View>
            <View style={styles.content}>
                <View style={styles.labelWrapper}>
                    <ExploreLabelComponent/>
                </View>
                <Text style={styles.headline}>{article.headline}</Text>
                <Text style={styles.author}>Author: {article.author}</Text>
                <Text style={styles.subHeader}>{article.firstSubheader}</Text>
                <Text style={styles.paragraph}>{article.firstParagraph}</Text>
                <Image style={styles.imageInText} source={{uri: article.images.imageSecondary}}/>
                <Text style={styles.subHeader}>{article.secondSubheader}</Text>
                <Text style={styles.paragraph}>{article.secondParagraph}</Text>
                <Image style={styles.imageInText} source={{uri: article.images.imageTernary}}/>
                <Text style={styles.subHeader}>{article.thirdSubheader}</Text>
                <Text style={styles.paragraph}>{article.thirdParagraph}</Text>
            </View>
        </ScrollView>
    )
}
 
const styles = StyleSheet.create({
    wrapper: {
        display: "flex",
    },
    image: {
        width: '100%',
        height: 300, 
    },
    imageInText: {
        width: '80%',
        height: 200,
        alignSelf: 'center',
        marginTop: 20,
        marginBottom: 20,
        borderRadius: 10
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
        lineHeight: 24
    },
    author: {
        fontSize: 14,
        color: 'grey',
        marginBottom: 10,
    },
    paragraph: {
        fontSize: 16,
        lineHeight: 24,
        color: Colors.textGrey
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
        color: 'white',
        fontSize: 18,
        marginRight: 5
    }
})

export default IndividualArticle;