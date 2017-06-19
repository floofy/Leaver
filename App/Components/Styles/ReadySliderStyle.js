import { StyleSheet } from 'react-native'
import { Metrics, Colors } from '../../Themes/'

export default StyleSheet.create({
  text: {
  	color: 'black',
  	fontSize: 14,
  },
  sliderView: {
 	  margin: 0
  },
  slider: {
  	marginTop: 5,
    marginHorizontal: 10,
  	backgroundColor: 'white',
  },
  minuteMarkingView: {
    marginHorizontal: 10,
    flexDirection: 'row', 
    justifyContent: 'space-between'
  },
  selectedMinutesView: {
    alignItems: 'center',
	  marginTop: 10,
  },
  selectedMinutesText: {
	  fontSize: 20,
  }
})
