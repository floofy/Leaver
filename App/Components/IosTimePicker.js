import React, { PropTypes } from 'react'
import { View, Text, DatePickerIOS } from 'react-native'
import styles from './Styles/IosTimePickerStyle'

export default class IosTimePicker extends React.Component{
  state = {date: this.props.date,
           timeZoneOffsetInHours: (-1) * (new Date()).getTimezoneOffset() / 60}

  static propTypes = {
    onDateChange: PropTypes.func.isRequired,
    label: PropTypes.string,
    date: PropTypes.object,
  }

  handleDateChange = (date) => {
    const {onDateChange} = this.props
    this.setState({date: date});
    onDateChange(date)
  }

  onTimezoneChange = (event) => {
    var offset = parseInt(event.nativeEvent.text, 10);
    if (isNaN(offset)) {
      return;
    }
    this.setState({timeZoneOffsetInHours: offset});
  }

  render() {
    const {style, label} = this.props
    
    return (
      <View style={style}>
        <Text style={styles.textStyle}>
        	{label}
        </Text>
        <DatePickerIOS
          date={this.state.date}
          mode="datetime"
          onDateChange={this.handleDateChange}
         />
      </View>
    )
  }
}

IosTimePicker.defaultProps = {
  date: new Date(),
}

// // Prop type warnings
// IosTimePicker.propTypes = {
//   someProperty: React.PropTypes.object,
//   someSetting: React.PropTypes.bool.isRequired
// }
//
// // Defaults for props
// IosTimePicker.defaultProps = {
//   someSetting: false
// }
