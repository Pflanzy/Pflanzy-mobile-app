import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';
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
                <Text style={article.firstSubheader ? styles.subHeader : styles.none}>{article.firstSubheader}</Text>
                <Text style={article.firstParagraph ? styles.paragraph : styles.none}>{article.firstParagraph}</Text>
                <Image style={article.images.imageSecondary ? styles.imageInText : styles.none} source={article.images.imageSecondary ? {uri: article.images.imageSecondary} : null}/>
                <Text style={article.secondSubheader ? styles.subHeader : styles.none}>{article.secondSubheader}</Text>
                <Text style={article.secondParagraph ? styles.paragraph : styles.none}>{article.secondParagraph}</Text>
                <Image style={article.images.imageTernary ? styles.imageInText : styles.none} source={article.images.imageTernary ? {uri: article.images.imageTernary} : null}/>
                <Text style={article.thirdSubheader ? styles.subHeader : styles.none}>{article.thirdSubheader}</Text>
                <Text style={article.thirdParagraph ? styles.paragraph : styles.none}>{article.thirdParagraph}</Text>
            </View>
        </ScrollView>
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
        color: 'white',
        fontSize: 18,
        marginRight: 5
    }
})

export default IndividualArticle;