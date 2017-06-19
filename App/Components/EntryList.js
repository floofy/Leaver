import React, { PropTypes } from 'react'
import { View, Text, ScrollView } from 'react-native'
import styles from './Styles/EntryListStyle'

import EntryButton from './EntryButton' 

export default class EntryList extends React.Component {

  static propTypes = {
    onPressItem: PropTypes.func,
    activateColor: PropTypes.string,
    inactiveColor: PropTypes.string,
    textColor: PropTypes.string,
    entries: PropTypes.array,
  }

  renderItem = (entry, i) => {
    const {onPressItem} = this.props
    const {activeColor, inactiveColor, textColor} = this.props
    const buttonColor = (entry.active) ? activeColor : inactiveColor

    return (
      <EntryButton
        key={i}
        index={i}
        onPressItem={onPressItem}
        depart={entry.depart}
        destination={entry.destination}
        readyTime={entry.readyTime}
        arrival={entry.arrival}
        color={textColor}
        backgroundColor={buttonColor}
      />
    )
  }

  render() {
    const {list} = this.props

    return (
        <ScrollView style={styles.scroll}>
          {list.map(this.renderItem)}
        </ScrollView>
    )
  }
}


// // Prop type warnings
// EntryList.propTypes = {
//   someProperty: React.PropTypes.object,
//   someSetting: React.PropTypes.bool.isRequired
// }
//
// // Defaults for props
// EntryList.defaultProps = {
//   someSetting: false
// }
