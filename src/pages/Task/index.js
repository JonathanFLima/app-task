import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import styles from './style';

import { firebase } from '../../config/firebase-config';


export default function Task({navigation}) {

const [task, setTask] = useState([]);
const taskRef = firebase.firestore().collection('Tasks');

function deleteTask(id) {
    taskRef.doc(id).delete()
}

useEffect(() => {
    taskRef.onSnapshot((query) => {
      const list = [];
      query.forEach((doc) => {
        list.push({ ...doc.data(), id: doc.id });
      });
      setTask(list);
    });
  }, []);

    return (
        <View style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={task}
                renderItem={( {item} ) => {
                    return (
                    <View style={styles.contextAllTasks}>
                        <TouchableOpacity style={styles.deleteTask} onPress={() => {
                            deleteTask(item.id)
                        }}
                        >
                        <FontAwesome name='star' size={23} color='#F92e6A'/>
                        </TouchableOpacity>
                        <Text
                            style={styles.descriptionTask}
                            onPress={() => 
                                navigation.navigate("Details", {
                                    id: item.id,
                                    description: item.description,
                                })
                        }>
                            {item.description}
                        </Text>
                    </View>
                    )
                }}
            />
            <TouchableOpacity 
                style={styles.buttonNewTask}
                onPress={() => navigation.navigate("NewTask")}>
                <Text style={styles.iconButton}>+</Text>
            </TouchableOpacity>
        </View>
    )
}