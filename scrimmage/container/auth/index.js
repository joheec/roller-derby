import { StackNavigator } from 'react-navigation';
import LoginScreen from './Login';
import UserTypeScreen from './UserType';

export default AuthStack = StackNavigator({
    Login: { screen: LoginScreen },
    UserType: { screen: UserTypeScreen },
});
