import { SwitchNavigator } from 'react-navigation';

import AuthStack from './container/auth';
import AdminStack from './container/admin';
import PersonalStack from './container/personal';

export default SwitchNavigator({
    Auth: AuthStack,
    Admin: AdminStack,
    Personal: PersonalStack,
}, {
    initialRouteName: 'Auth',
});
