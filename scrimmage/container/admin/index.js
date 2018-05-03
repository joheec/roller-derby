import { StackNavigator } from 'react-navigation';
import NavigationScreen from './Navigation';
import EditScreen from './Edit';
import PracticeScreen from './Practice';
import AssessmentScreen from './Assessment';

export default AdminStack = StackNavigator(
    {
        Navigation: { screen: NavigationScreen },
        Edit: { screen: EditScreen },
        Practice: { screen: PracticeScreen },
        Assessment: { screen: AssessmentScreen },
    }, {
        headerMode: 'none',
    }
);
