import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
  },
  text: {
  },
  buttonView: {
    alignItems: 'flex-end',
    flex: 0.2, 
  },
  icon: {
    height: 20,
    width: 20,
  },
});

