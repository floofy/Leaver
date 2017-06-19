import React, { PropTypes}  from 'react'
import { View, Text, Switch } from 'react-native'
import styles from './Styles/SwitchViewStyle'

export default class SwitchView extends React.Component {
  static propTypes = {
    onValueChange: PropTypes.func,
    value: PropTypes.bool,
    text: PropTypes.string,
  }

  constructor(props) {
    super(props)
    let {value} = props
    this.state = {on: value}
  }

  handleChange = () => {
    const {onValueChange} = this.props
    this.setState({on: !this.state.on})
    onValueChange(!this.state.on)
  }

  render () {
    const {text, backgroundColor, onValueChange} = this.props
    const {on} = this.state

    return (
      <View style={[styles.container, {backgroundColor}]}>
        <View style={styles.textView}>
          <Text style={styles.text}>
            {text}
          </Text>
        </View>
        <View style={styles.switchView}>
            <Switch
              onValueChange={this.handleChange}
              value={on}
            />
        </View>
      </View>
    )
  }
}

SwitchView.defaultProps = {
  value: false,
}

// // Prop type warnings
// Toggle.propTypes = {
//   someProperty: React.PropTypes.object,
//   someSetting: React.PropTypes.bool.isRequired
// }
//
// // Defaults for props
// Toggle.defaultProps = {
//   someSetting: false
// }
