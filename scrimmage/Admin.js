import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';

export default class AdminScreen extends React.Component {
    render() {
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
        return <View style={ styles.container }>
            <ScrollView>
                { girls.map(girl => <View style={ styles.option }>
                    <Text style={ styles.text }>{ girl.name }</Text>
                </View>)}
            </ScrollView>
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
