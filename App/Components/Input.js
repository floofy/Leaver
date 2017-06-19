import React, { Component } from 'react'
import { TextInput, StyleSheet } from 'react-native'
import styles from './Styles/InputStyle'

export default class Input extends Component {

  state = {
    text: '',
    submitted: false,
  }

  onChangeText = (text, submitted=false) => {
    this.setState({text, submitted})
  }

  onSubmitEditing = () => {
    const {onSubmitEditing, style} = this.props
    const {text} = this.state

    if (!text) return // Don't submit if empty

    onSubmitEditing(text)
    this.setState({text: text, submitted: true})
  }

  render() {
    const {style, placeholder} = this.props
    const {text, submitted} = this.state
    let color = 'black'
    if (submitted) {
      color = 'steelblue'
    }

    return (
      <TextInput
        style={[style, styles.input, {color}]}
        value={text}
        placeholder={placeholder}
        onChangeText={this.onChangeText}
        onSubmitEditing={this.onSubmitEditing}
      />
    )
  }
}


// // Prop type warnings
// Input.propTypes = {
//   someProperty: React.PropTypes.object,
//   someSetting: React.PropTypes.bool.isRequired
// }
//
// // Defaults for props
// Input.defaultProps = {
//   someSetting: false
// }
