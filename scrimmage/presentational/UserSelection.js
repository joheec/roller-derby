import React from 'react';
import { StyleSheet, TouchableOpacity, ScrollView, View, Text } from 'react-native';

export default class UserSelection extends React.Component {
    constructor() {
        super();
    }
    render() {
        const { navigate } = this.props.navigation;
        const girls = [
            {
                name: 'MerMace',
                selected: false,
            }, {
                name: 'Yellow Fever',
                selected: false,
            }, {
                name: 'Shannihilator',
                selected: true,
            }
        ];
        return <ScrollView>
                { girls.map(girl => <View style={ styles.option }>
                    <Text style={ styles.text }>{ girl.name }</Text>
                </View>)}
            </ScrollView>;
    }
}

const styles = StyleSheet.create({
    option: {
        flex: 1,
        margin: 10,
        padding: 5,
        borderWidth: 1,
        borderColor: '#e6518e',
        borderRadius: 5,
    },
    text: {
        color: '#e6518e',
    },
});
