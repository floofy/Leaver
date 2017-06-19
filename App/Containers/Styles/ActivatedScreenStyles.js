import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
  },
  text: {
  },
  icon: {
  	height: 20,
  	width: 20,
  },
  buttonView: {
    alignItems: 'flex-end',
    flex: 0.1, 
  },
  modalView: {
    flex: 1,
    backgroundColor: Colors.iosBackground,
  },
});

