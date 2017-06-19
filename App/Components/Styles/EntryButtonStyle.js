import { StyleSheet } from 'react-native'
import { Metrics } from '../../Themes/'
import { Colors } from '../../Themes/'

export default StyleSheet.create({
  entryButton: {
  	flex: 1,
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 0.5,
    borderRadius: 12,
    padding: 13,
  }, 
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  locationView: {
    flexDirection: 'row',
  },
  destinationText: {
    fontWeight: 'bold',
  },
  departText: {
  },
  text: {
  }
})
