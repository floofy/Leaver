import React, { PropTypes } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './Styles/AddEntryButtonStyle'

import Images from '../Themes'

export default class AddEntryButton extends React.Component {
  static propTypes = {
    onPressItem: PropTypes.func,
  }

  render () {
    const {style, onPress} = this.props

    return (
      <TouchableOpacity
        style={[styles.button]}
        onPress={onPress}
      >
        <View style={styles.imageView}>
          <Image
            source={require('../Images/Icons/add-icon.png')} style={styles.iconImage}
          />          
        </View>
      </TouchableOpacity>
    )
  }
}


// // Prop type warnings
// AddEntryButton.propTypes = {
//   someProperty: React.PropTypes.object,
//   someSetting: React.PropTypes.bool.isRequired
// }
//
// // Defaults for props
// AddEntryButton.defaultProps = {
//   someSetting: false
// }
