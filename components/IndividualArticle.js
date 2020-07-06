import React from 'react';
import {TouchableOpacity, Button, ScrollView, View, Text, Image, StyleSheet } from 'react-native';
import { withSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

const IndividualArticle = (props) => {
    return (
        <ScrollView style={styles.mainWrapper}>
            <View style={styles.imageWrapper}>
                <Image style={styles.image} source={{uri: 'https://picsum.photos/seed/picsum/200/200'}}/>
            </View>
            <View style={styles.contentWrapper}>
                <View style={styles.labelWrapper}>
                    <Text style={styles.label}> Category Label</Text>
                </View>
                <Text style={styles.headline}>Headline Headline</Text>
                <Text style={styles.text}>Lorem ipsum dolor sit aet consectetur adipisicing elit. In error ut, pariatur minima, sit minus, assumenda suscipit distinctio iure cum impedit unde veniam ea vitae? Molestias reprehenderit nisi rerum obcaecati distinctio vitae placeat maiores accusantium provident reiciendis atque, error inventore consequatur ullam fugiat repellat voluptate consequuntur illo. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit saepe vitae dolores iusto dignissimos debitis, ipsum minima assumenda hic libero? Magnam, numquam necessitatibus!</Text>
                <TouchableOpacity style={styles.buttonWrapper}>
                    <Button color="white" title='Add to my Garden'/>
                    <Icon name="ios-leaf" size={30} color="white" style={{ textAlign: 'center' }} />
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}
 
const styles = StyleSheet.create({
    wrapper: {
        display: "flex"
    },
    imageWrapper: {},
    image: {
        width: '100%',
        height: 300, 
        
    },
    contentWrapper: {
        margin: 20,
    },
    labelWrapper: {
        backgroundColor: '#006400',
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
        fontSize: 26,
        marginBottom: 10,
        marginTop: 10,
    },
    text: {
        fontSize: 16,
        lineHeight: 22
    },
    buttonWrapper: {
        backgroundColor: '#008000',
        borderRadius: 25,
        marginTop: 20,
        marginBottom: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
    }


})

export default IndividualArticle;