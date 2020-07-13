import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const DailyTask = (props) => {
  const styles = StyleSheet.create({
    dailyTaskContainer: {
      display: 'flex',
      height: '100%',
    },
    image: {
      width: '100%',
      height: 300,
    },
    detailCard: {
      alignItems: 'center',
      margin: 10,
      width: '90%',
      alignSelf: 'center',
    },
    taskHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      alignItems: 'center',
    },
    iconContainer: {
      backgroundColor: '#fff',
      borderRadius: 15,
      padding: 10,
      alignItems: 'center',
      margin: 5,
    },
    taskName: {
      justifyContent: 'space-evenly',
    },
    taskBody: {
      borderRadius: 10,
      padding: 10,
    },
    taskExtra: {
      margin: 10,
    },
    bottomText: {
      backgroundColor: '#9DBCD4',
      borderRadius: 15,
      padding: 5,
    },
    mainText: {
      textAlign: 'justify',
    },
  });
  return (
    <ScrollView style={styles.dailyTaskContainer}>
      <View>
        <Image
          style={styles.image}
          source={{
            uri: 'https://picsum.photos/200',
          }}
        />
        <View style={styles.detailCard}>
          <View style={styles.taskHeader}>
            <View style={styles.iconContainer}>
              <Ionicons name="ios-construct" size={30} color="#9DBCD4" />
              <Text>Care</Text>
              <View style={styles.bottomText}>
                <Text>Low</Text>
              </View>
            </View>
            <View style={styles.iconContainer}>
              <Icon name="water" size={30} color="#9DBCD4" />
              <Text>Water</Text>
              <View style={styles.bottomText}>
                <Text>Every 2-3 weeks</Text>
              </View>
            </View>
            <View style={styles.iconContainer}>
              <Ionicons name="ios-sunny" size={30} color="#9DBCD4" />
              <Text>Sun</Text>
              <View style={styles.bottomText}>
                <Text>Full sun</Text>
              </View>
            </View>
          </View>
          <View style={styles.taskExtra}>
            <Text style={styles.mainText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              laudantium pariatur aliquid, ratione dolorem placeat eligendi vero
              unde sapiente maiores dignissimos ea nulla ducimus modi, quas quis
              totam id laborum cum eos commodi sint iste! Velit fugit ratione
              tenetur saepe expedita illum quis dolorem harum, aliquam at sed et
              exercitationem, porro sunt quae labore est? Repudiandae nam saepe
              doloribus dolorem? Eaque architecto vel quae, exercitationem sint
              qui eligendi deserunt incidunt corrupti fugit magni saepe, vitae
              tempore rem velit omnis illum sunt itaque quasi aut minima cumque
              alias porro. Nisi repellat, dolor quaerat delectus ullam obcaecati
              eius et quasi quidem quae accusamus laboriosam reprehenderit neque
              quas amet maxime numquam quia laborum iusto? Totam nisi dolorum
              sapiente neque necessitatibus eaque error ipsam? Saepe error
              placeat dignissimos ipsam cumque deserunt itaque eos iure
              consequuntur minima, dolores recusandae aut commodi sint tempora
              suscipit ullam qui, voluptas blanditiis repudiandae odit
              similique. Dignissimos accusamus dolor quisquam necessitatibus
              aperiam fugit magni odit temporibus autem, ratione neque iusto
              sunt unde culpa. Sequi dolores culpa, nulla rerum obcaecati omnis.
              Quibusdam voluptatibus nostrum iure doloremque! Nulla, molestiae?
              Nesciunt enim at nam! Voluptas, eligendi provident beatae nihil
              molestiae, iure quasi soluta dolorum nemo, ad blanditiis rem
              itaque maiores officiis! Animi, perferendis!
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default DailyTask;
