import { StackNavigator, SwitchNavigator } from 'react-navigation';
import LoginScreen from './Login';
import MainStack from './Main';
import TaskInfoScreen from './TaskInfo';

const AuthStack = StackNavigator({ Login: { screen: LoginScreen }});

const AppStack = StackNavigator(
    {
        Main: {
            screen: MainStack,
        },
        TaskInfo: {
            screen: TaskInfoScreen,
        },
    },
    {
        mode: 'modal',
        headerMode: 'none',
    }
);

export default SwitchNavigator({
    Auth: AuthStack,
    App: AppStack,
}, {
    initialRouteName: 'Auth',
});
