import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons"

const DailyTask = props => {
    const styles = StyleSheet.create({
        dailyTaskContainer: {
            display: "flex",
            height: "100%"
        },
        image: {
            width: "100%",
            height: 300
        },
        detailCard: {
            alignItems: "center",
            margin: 10
        },
        taskHeader: {
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            alignItems: "center",
            padding: 10
        },
        taskName: {
            justifyContent: "space-evenly",
        },
        iconsNeeded: {
            flexDirection: "row",
            width: "100%"
        },
        taskBody: {
            borderRadius: 10,
            padding: 10,
        },
        taskExtra: {
            margin: 10
        }
    })
    return (
        <ScrollView style={styles.dailyTaskContainer}>
            <View>
                <Image
                    style={styles.image}
                    source={{
                        uri: 'https://picsum.photos/200',
                    }} />
                <View style={styles.detailCard}>
                    <View style={styles.taskHeader}>
                        <View style={styles.taskName}>
                            <Text style={{ margin: 5 }}>Today's task</Text>
                            <Icon name="ios-water" size={30} color="green" style={{ textAlign: "center" }} />
                        </View>

                        <View style={styles.taskBody}>
                            <Text>Tasks description</Text>
                            <Text>5 minutes</Text>
                            <View style={styles.iconsNeeded}>

                                <MaterialIcon name="cup-water" size={30} color="green" />
                                <MaterialIcon name="flower" size={30} color="green" />
                            </View>
                        </View>
                    </View>
                    <View style={styles.taskExtra}>

                        <Text>Extra Information Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro laboriosam ad officiis quaerat mollitia ullam quidem cumque odit corrupti odio, quibusdam itaque, quo sit recusandae quod a aperiam natus ratione, quisquam animi beatae dolor expedita aliquid veniam? Necessitatibus laudantium et autem incidunt suscipit. Laborum ipsa voluptatibus inventore nisi tempore fugit?</Text>
                    </View>
                </View>

            </View>
        </ScrollView>
    );
}

export default DailyTask;
