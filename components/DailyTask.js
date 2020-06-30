import React from 'react';
import { StyleSheet, Text, View,Image,ScrollView } from 'react-native';


const DailyTask = () => {
    const styles = StyleSheet.create({
        dailyTaskContainer:{
            display:"flex",
            height:"100%"
        },
        image: {
            width:"100%",
            height:300
        },
        detailCard: {
         alignItems:"center",
         borderColor:"black",
         borderWidth:1,
         margin:10
        },
        taskHeader: {
            borderColor:"black",
            borderWidth:1,
            width:"50%",
            alignItems:"center",
            margin:10
        },
        taskBody: { 
            borderRadius:10,
            padding:10,
            shadowColor:"black",
            shadowOffset:{width:2, height:2},
            shadowRadius:2,
            shadowOpacity:0.26,
            backgroundColor:"white"
        },
        taskExtra: {
            borderColor:"black",
            borderWidth:1,
            margin:10
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
        <Text>Task</Text>

</View>
       <View style={styles.taskBody}>
           
        <Text>Tasks description</Text>
        <Text>Suggested Time</Text>
        <Text>Tools Needed</Text>
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
