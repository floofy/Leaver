import React, { PropTypes } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './Styles/EntryButtonStyle'

export default class EntryButton extends React.Component {
  static propTypes = {
    onPressItem: PropTypes.func.isRequired,
    depart: PropTypes.string.isRequired,
    destination: PropTypes.string.isRequired,
    arrival: PropTypes.string.isRequired,
    readyTime: PropTypes.string,
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
  }

  render () {
    const {index, onPressItem, backgroundColor, color, depart, destination,
           readyTime, arrival} = this.props

    return (
      <TouchableOpacity
        style={[styles.entryButton, {backgroundColor}]}
        onPress={() => onPressItem(index)}
      >
        <View style={styles.container}>
          <View style={styles.locationView}>
            <Text style={[styles.destinationText, {color}]}>
              {destination}
            </Text>
            <Text style={[styles.departText, {color}]}>
              {' '} from {depart}
            </Text>
          </View>
          <Text style={[styles.text, {color}]}>
            Arrive: {arrival}
          </Text>
          <Text style={[styles.text, {color}]}>
            Ready Time: {readyTime}
          </Text>
        </View>
      </TouchableOpacity>
    ) 
  }
}

// // Prop type warnings
// Entry.propTypes = {
//   someProperty: React.PropTypes.object,
//   someSetting: React.PropTypes.bool.isRequired
// }
//
// // Defaults for props
// Entry.defaultProps = {
//   someSetting: false
// }
