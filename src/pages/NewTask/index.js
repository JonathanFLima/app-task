import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import { firebase } from '../../config/firebase-config';
import styles from './style'

export default function NewTask({ navigation }) {

const [description, setDescription] = useState(null);


function addTask() {
    
    firebase.firestore().collection('Tasks').add({
        description: description,
        status: false,
    })
    navigation.navigate("Task");
}
    
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Description</Text>
            <TextInput
            style={styles.input}
            placeholder="Exemplo: fazer as compras da semana"
            onChangeText={setDescription}
            value={description}
            />

            <TouchableOpacity
            style={styles.buttonNewTask}
            onPress={() => { addTask() }}
            >
                <Text style={styles.iconButton}>Save</Text>
            </TouchableOpacity>
        </View>
    )
}