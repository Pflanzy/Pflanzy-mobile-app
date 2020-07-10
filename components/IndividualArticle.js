import React from 'react';
import {TouchableOpacity, ScrollView, View, Text, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const IndividualArticle = (props) => {
    return (
        <ScrollView style={styles.mainWrapper}>
            <View style={styles.imageWrapper}>
                <Image style={styles.image} source={{uri: 'https://picsum.photos/seed/picsum/200/200'}}/>
            </View>
            <View style={styles.contentWrapper}>
            <View style={styles.content}>
                <View style={styles.labelWrapper}>
                    <Text style={styles.label}> Category Label</Text>
                </View>
                <Text style={styles.headline}>Headline Headline</Text>
                <Text style={styles.text}>Lorem ipsum dolor sit aet consectetur adipisicing elit. In error ut, pariatur minima, sit minus, assumenda suscipit distinctio iure cum impedit unde veniam ea vitae? Molestias reprehenderit nisi rerum obcaecati distinctio vitae placeat maiores accusantium provident reiciendis atque, error inventore consequatur ullam fugiat repellat voluptate consequuntur illo. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit saepe vitae dolores iusto dignissimos debitis, ipsum minima assumenda hic libero? Magnam, numquam necessitatibus!</Text>
                <TouchableOpacity style={styles.buttonWrapper}>
                    <Text style={styles.buttonText} color="white">Add to my Garden</Text>
                    <Icon name="ios-leaf" size={25} color="white" style={{ textAlign: 'center' }} />
                </TouchableOpacity>
            </View>
            </View>
        </ScrollView>
    )
}
 
const styles = StyleSheet.create({
    mainWrapper: {
        backgroundColor: '#008080'
    },
    wrapper: {
        display: "flex",
    },
    image: {
        width: '100%',
        height: 300, 
        
    },
    contentWrapper: {
        
    },
    content: {
        marginHorizontal: 20,
        marginBottom: 20,
        marginTop: 10,

    },
    labelWrapper: {
        backgroundColor: '#A1009D',
        marginTop: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
        minWidth: '25%',
        alignSelf: "flex-end",
        borderRadius: 15,
    },
    label: {
        color: 'white',
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 12,
    },
    headline: {
        fontSize: 28,
        marginBottom: 10,
        marginTop: 10,
        color: 'white'
    },
    text: {
        fontSize: 16,
        lineHeight: 24,
        color: 'white',
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