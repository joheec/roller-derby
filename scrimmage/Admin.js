import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default class AdminScreen extends React.Component {
    render() {
        return <Text style={ styles.container }>Admin</Text>;
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
});
