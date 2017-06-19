import React from 'react'
import { View, Text, Slider } from 'react-native'
import styles from './Styles/ReadySliderStyle'

import Colors from '../Themes/'

export default class ReadySlider extends React.Component {

  state = {curValue: this.props.value}

  changeValue = (value) => {
    this.setState({curValue: value})
  }

  render () {
    const {label, style, minValue, maxValue, value, onSlidingComplete} = this.props
    const {curValue} = this.state


    return (
      <View style={style}>
        <Text style={styles.text}>
          {label}
        </Text>
        <View style={styles.sliderView}>
          <Slider
            onValueChange={this.changeValue}
            onSlidingComplete={onSlidingComplete}
            step={1}
            minimumTrackTintColor='#177BFB'
            value={value}
            minimumValue={minValue}
            maximumValue={maxValue}
            style={styles.slider}
          />
        </View>
        <View style={styles.minuteMarkingView}>
          <Text>
            {minValue}
          </Text>
          <Text>
            {maxValue/2}
          </Text>
          <Text>
            {maxValue}
          </Text>
        </View>
        <View style={styles.selectedMinutesView}>
          <Text style={styles.selectedMinutesText}>
            {curValue} minutes
          </Text>
        </View>
      </View>
    )
  }
}

ReadySlider.defaultProps = {
  minValue: 1,
  maxValue: 60,
  value: 1,
}

// // Prop type warnings
// ReadySlider.propTypes = {
//   someProperty: React.PropTypes.object,
//   someSetting: React.PropTypes.bool.isRequired
// }
//
// // Defaults for props
// ReadySlider.defaultProps = {
//   someSetting: false
// }
