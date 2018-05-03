import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { DefaultButton } from '../../presentational/DefaultComponents';

export default class UserTypeScreen extends React.Component {
    constructor() {
        super();
    }
    render() {
        const { navigate } = this.props.navigation;
        return <View>
            <Text>I'm a...</Text>
            <DefaultButton text="Derby Mom" action={ () => navigate('Navigation') } />
            <DefaultButton text="Derby Girl" action={ () => navigate('Checklist') } />
        </View>;
    }
}

const styles = StyleSheet.create({
    button: {
        color: '#ffffff',
        borderRadius: 10,
        backgroundColor: '#e6518e',
        padding: 10,
        overflow: 'hidden',
    },
});
