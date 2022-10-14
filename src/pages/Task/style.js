import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        paddingTop: 20,
    },

    contextAllTasks: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',

        marginTop: 5
    },

    deleteTask: {
        justifyContent: 'center',
        paddingLeft: 15,
    },

    descriptionTask: {
        width: '75%',
        alignContent: 'flex-start',

        backgroundColor: '#f5f5f5cf',
        padding: 12,
        paddingHorizontal: 20,

        borderRadius: 50,
        marginBottom: 5,
        marginRight: 15,

        color: "#282b2db5",

    },

    buttonNewTask: {
        position: 'absolute',
        width: 60,
        height: 60,

        bottom: 30,
        left: 30,
        backgroundColor: '#f92E6A',

        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'

    },

    iconButton: {
        color: '#FFF',
        fontSize: 40,
        fontWeight: 'bold'
    },
})

export default styles