import React from 'react';
import { StyleSheet, ScrollView, View, Text, TouchableOpacity, Alert } from 'react-native';

export default class ChecklistScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            classes: {
                opened: false,
                complete: true,
            },
            laps: {
                opened: true,
                complete: false,
            },
            scrimmages: {
                opened: false,
                complete: false,
            },
            bankedTrack: {
                opened: false,
                complete: false,
            },
            stickyFeet: {
                opened: false,
                complete: false,
            },
            grapeVines: {
                opened: false,
                complete: false,
            },
            plowStops: {
                opened: false,
                complete: false,
            },
            turnAroundStops: {
                opened: false,
                complete: false,
            },
        };
    }

    render() {
        const { navigate } = this.props.navigation;
        return (<ScrollView style={ styles.container }>
            <View style={{ alignItems: 'center' }}>
                <Task navigate={ navigate } label="Classes" complete={ true }/>
                <Task navigate={ navigate } label="Scrimmages" complete={ false }/>
                <Task navigate={ navigate } label="Banked Track" complete={ false }/>
                <Task navigate={ navigate } label="Sticky Feet" complete={ false }/>
                <Task navigate={ navigate } label="Grape Vines" complete={ false }/>
                <Task navigate={ navigate } label="Plow Stops" complete={ false }/>
                <Task navigate={ navigate } label="Turn Around Stops" complete={ false }/>
            </View>
        </ScrollView>);
    }
}

class Task extends React.Component {
    constructor(props) {
        super();
    }
    render() {
        return <TouchableOpacity
            style={ this.props.complete ? styles.completeButton : styles.incompleteButton }
            onPress={() => (
                this.props.navigate('TaskInfo', {
                    activity: 'Activity',
                    description: 'Description',
                    records: [
                        { date: '01/01/01', record: '2:14' },
                        { date: '02/02/02', record: '2:24' },
                        { date: '03/03/03', record: '1:54' },
                    ],
            }))}>
            <Text style={ this.props.complete? styles.completeText : styles.incompleteText }>{ this.props.label}: { this.props.complete ? "Complete" : "Incomplete" }</Text>   
        </TouchableOpacity>
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
    completeButton: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        width: '85%',
        marginTop: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#e6518e',
        borderRadius: 20,
    },
    completeText: {
        fontSize: 20,
        color: '#e6518e',
    },
    incompleteButton: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        width: '85%',
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#e6518e',
        borderRadius: 20,
        overflow: 'hidden',
    },
    incompleteText: {
        fontSize: 20,
        color: '#ffffff',
    }
});
