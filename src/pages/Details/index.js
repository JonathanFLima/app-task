import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './style';

import { firebase } from '../../config/firebase-config';

export default function Details({navigation, route}) {

    const [descriptionEdit, setDescriptionEdit] = useState(route.params.description);
    const idTask = route.params.id;

    function editTask(description, id) {
        firebase.firestore().collection('Tasks').doc(id).update({
            description: descriptionEdit,
        })
        navigation.navigate("Task");
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Description</Text>
            <TextInput
            style={styles.input}
            placeholder="Exemplo: fazer as compras da semana"
            onChangeText={setDescriptionEdit}
            value={descriptionEdit}
            />

            <TouchableOpacity
            style={styles.buttonNewTask}
            onPress={() => { editTask(descriptionEdit, idTask) }}
            >
                <Text style={styles.iconButton}>Save</Text>
            </TouchableOpacity>
        </View>
    )
}