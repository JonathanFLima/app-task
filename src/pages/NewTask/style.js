import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },

    label: {
        width: '90%',
        marginTop: 20,   
        marginLeft: 20,  
        fontSize: 26,
        color: '#F92E6A',
    },

    input: {
        width: '90%',
        height: 50,
        
        marginTop: 10,
        marginLeft: 'auto',
        marginRight: 'auto',

        padding: 10,

        borderBottomWidth: 1,
        borderBottomColor: '#F92E6A',
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
        fontSize: 16,
        fontWeight: 'bold'
    },


})

export default styles