import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';

export default class TaskInfoScreen extends React.Component {
    constructor(props) {
        super();
    }
    render() {
        const { activity, records } = this.props.navigation.state.params;
        return <View style={ styles.container }>
            <Text style={ styles.header }>{ activity }</Text>
            <ScrollView style={ styles.entries }>
                { records.map(({ date, record }) => (
                    <View key={ date } style={ styles.entry }>
                        <Text style={ styles.date }>{ date }</Text>
                        <Text style={ styles.record }>{ record }</Text>
                    </View>
                )) }
                </ScrollView>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2DAFF',
    },
    header: {
        marginTop: 30,
        textAlign: 'center',
        color: '#486DB2',
        fontSize: 30,
        fontWeight: 'bold',
    },
    entries: {
        flexDirection: 'column',
        flex: 1,
        marginTop: 15,
    },
    entry: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
    },
    date: {
        flex: 1,
        marginLeft: 15,
        color: '#B778D9',
        fontSize: 20,
    },
    record: {
        flex: 1,
        color: '#B778D9',
        fontSize: 20,
    },
});
