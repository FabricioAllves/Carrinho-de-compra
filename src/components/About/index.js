import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function About(props) {
    return (
        <View style={styles.container}>
            <View style={styles.modalContainer}>
                <TouchableOpacity style={styles.btnVoltar} onPress={props.voltar} >
                    <Text style={{ color: '#fff', fontSize: 16 }}>Voltar</Text>
                </TouchableOpacity>

                <Text>
                    {props.infoAll.name}
                </Text>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 10,
        marginRight: 10,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    modalContainer: {
        backgroundColor: '#fff',
        height: '85%',
        width: '100%',
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5
    },
    btnVoltar: {
        backgroundColor: '#e52246',
        padding: 10,
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5
    },
   

})