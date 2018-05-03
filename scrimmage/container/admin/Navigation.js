import React from 'react';
import { StyleSheet, TouchableOpacity, ScrollView, View, Text } from 'react-native';
import { DefaultButton } from '../../presentational/DefaultComponents';

export default class NavigationScreen extends React.Component {
    constructor() {
        super();
    }
    render() {
        const { navigate } = this.props.navigation;
        return <View style={ styles.container }>
            <TouchableOpacity onPress={ () => navigate('UserType') }>
                <Text>Exit</Text>
            </TouchableOpacity>
            <DefaultButton text='Edit Times' action={ () => navigate('Edit') } />
            <DefaultButton text='Practice Times' action={ () => navigate('Practice') } />
            <DefaultButton text='Assessment Times' action={ () => navigate('Assessment') } />
        </View>;
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        marginBottom: 50,
        marginLeft: 25,
        marginRight: 25,
        flexDirection: 'column',
        flex: 1,
    },
});
