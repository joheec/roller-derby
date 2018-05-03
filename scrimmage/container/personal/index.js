import { StackNavigator } from 'react-navigation';
import ChecklistScreen from './Checklist';
import TaskInfoScreen from './TaskInfo';
import SettingsScreen from './Settings';

export default PersonalStack = StackNavigator(
    {
        Checklist: { screen: ChecklistScreen },
        TaskInfo: { screen: TaskInfoScreen },
        Settings: { screen: SettingsScreen },
    }, {
        mode: 'modal',
        headerMode: 'none',
    }
);
