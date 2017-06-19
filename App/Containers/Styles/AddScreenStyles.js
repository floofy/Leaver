import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    backgroundColor: Colors.iosBackground,
  },
  button: {
    backgroundColor: 'steelblue',
    color: 'steelblue',
    textAlign: 'center',
  },
  textInput: {
    marginTop: 5,
    backgroundColor: Colors.snow,
    padding: 4,
    fontSize: 20,
  },
  timeStyle: {
    flex: 2,
    backgroundColor: Colors.snow,
    marginTop: 5,
  },
  slider: {
    flex: 0,
    marginTop: 5,
    backgroundColor: Colors.snow,
  },
  activateSwitchView: {
    flex: 0,
    marginVertical: 5,
  },
  buttonView: {
    flex: 0,
    backgroundColor: Colors.snow,
    // marginTop: 5,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  header: {
    backgroundColor: Colors.snow,
  },
  headerTitle: {
    color: Colors.black,
  },
  headerBack: {
    color: Colors.snow,
  },
});

