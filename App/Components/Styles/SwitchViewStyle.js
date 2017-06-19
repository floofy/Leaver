import {StyleSheet} from 'react-native'
import { Fonts, Colors, Metrics } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  textView: {
    marginTop: 5,
    marginLeft: 12,
  },
  text: {
    fontSize: 18,
  },
  switchView: {
    marginRight: 12,
  },
})
