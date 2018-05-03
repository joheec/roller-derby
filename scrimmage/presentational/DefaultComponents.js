import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

export const DefaultScreen = ({ children }) => (
    <View style={ styles.container }>
        { children }
    </View>
);

export const DefaultButton = ({ text, action }) => (
    <TouchableOpacity onPress={ action }>
        <Text style={ styles.button }>{ text }</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    button: {
        color: '#ffffff',
        borderRadius: 10,
        backgroundColor: '#e6518e',
        padding: 10,
        textAlign: 'center',
        overflow: 'hidden',
    },
});
