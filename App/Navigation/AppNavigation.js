import { TabNavigator, StackNavigator } from 'react-navigation'

import ActivatedScreen from '../Containers/ActivatedScreen'
import AllScreen from '../Containers/AllScreen'
import AddScreen from '../Containers/AddScreen'

import styles from './Styles/NavigationStyles'
import tabConfig from './Styles/TabStyles'

const MainScreenNavigator = TabNavigator(
    {
      Activated: { screen: ActivatedScreen },
      All: { screen: AllScreen },
    }, 
    {
      swipeEnabled: false, 
      tabBarPosition: 'bottom', 
      animationEnabled: false,
      // showIcon: true,
      pressOpacity:1,
      tabBarOptions: tabStyle
    },
);

MainScreenNavigator.navigationOptions = {
    title: 'Leaver',
    headerTintColor: 'white',
};

// Manifest of possible screens
const PrimaryNav = StackNavigator({
    Home: { screen: MainScreenNavigator },
    Add: { screen: AddScreen},
  }, {
    // Default config for all screens
    // mode: 'modal',
    // headerMode: 'none',
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: styles.header
  }
})

export default PrimaryNav
