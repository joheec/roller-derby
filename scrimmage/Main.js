import React from 'react';
import Swiper from 'react-native-swiper';
import ChecklistScreen from './Checklist';
import AdminScreen from './Admin';
import SettingsScreen from './Settings';

export default class MainStack extends React.Component {
    render() {
        const { navigation } = this.props;
        return <Swiper loop={false}>
            <ChecklistScreen navigation={ navigation } />
            <AdminScreen />
            <SettingsScreen />
        </Swiper>;
    }
}
