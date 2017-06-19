import React, { PropTypes } from 'react'
import { Text, View, Button, ScrollView } from 'react-native'

import IosTimePicker from '../Components/IosTimePicker'
import ReadySlider from '../Components/ReadySlider'
import Title from '../Components/Title'
import Input from '../Components/Input'
import SwitchView from '../Components/SwitchView'

import styles from './Styles/AddScreenStyles'
import { Images, Colors } from '../Themes'

export default class AddScreen extends React.Component {

  static propTypes = {
    onPressDone: PropTypes.func.isRequired,
    onPressCancel: PropTypes.func.isRequired,
    activated: PropTypes.bool,
    activeColor: PropTypes.string,
    inactiveColor: PropTypes.string,
    minTime: PropTypes.number,
  }

  state = {errorMessages: [], activated: this.props.activated}

  constructor(props) {
    super(props)
    this.depart = ''
    this.destination = ''
    this.arrival = new Date()
    this.readyTime = 5
    this.activated = true
  }

  handleDone = () => {
    const {onPressDone, onPressCancel} = this.props
    let minDate = new Date(new Date().getTime() + this.props.minTime)
    let errorMessages = ''

    if (!this.depart)
      errorMessages += 'Missing depart location.\n'
    if (!this.destination)
      errorMessages += 'Missing destination location.\n'
    if (this.arrival.getTime() < minDate) 
      errorMessages += 'Arrival must be at least 10 minutes after current time.\n'
    if (!this.readyTime)
      errorMessages += 'Set your ready time.\n'

    if (errorMessages) {
      alert(errorMessages)
    } else {
      onPressDone([this.depart, this.destination, this.arrival.toString(), 
                   this.readyTime.toString(), this.activated])
      onPressCancel()                 // Dirty way to close screen
    }
  }

  handleActivateSwitch = (active) => {
    this.activated = active
    this.setState({activated: active})
  }

  render() { 
    const {onPressCancel, activeColor, inactiveColor} = this.props
    const {errorMessages, activated} = this.state
    bannerColor = activated ? activeColor : inactiveColor
    let minDate = new Date(new Date().getTime() + this.props.minTime)
    let  options = {month: 'short', 
                    day: 'numeric', 
                    hour: '2-digit', 
                    minute: '2-digit' };  


    let timeLabel = 'Arrival time'
    timeLabel += ' (at least ' + minDate.toLocaleTimeString('en-us', options) + ')'

    return (
      <View style={styles.container}>
        <Title
          title='Add Screen'
          backgroundColor={bannerColor}
        />
        <Input
          placeholder={'Enter Depature Location'}
          onSubmitEditing={(depart) => (this.depart = depart)}
          style={styles.textInput}
        />
        <Input
          placeholder={'Enter Destination'}
          onSubmitEditing={(destination) => (this.destination = destination)}
          style={styles.textInput}
        />
        <IosTimePicker
          label={timeLabel}
          style={styles.timeStyle}
          onDateChange={(date) => {this.arrival = date}}
        />
        <ReadySlider 
          value = {this.readyTime}
          label='Choose ready time'
          style={styles.slider}
          onSlidingComplete={(readyTime) => {this.readyTime = readyTime}}
        />
        <View style={styles.activateSwitchView}>
          <SwitchView
            backgroundColor='white'
            text='Activate'
            value={this.activated}
            onValueChange={this.handleActivateSwitch}
          />
        </View>
        <View style={styles.buttonView}>
          <Button
            title='Cancel'
            onPress={onPressCancel}>
          </Button>
          <Button
            title='Done'
            onPress={this.handleDone}>
          </Button>
        </View>      
      </View>
    )
  }
}

AddScreen.defaultProps = {
  depart: '',
  destination: '',
  arrival: '',
  activated: true,
  readyTime: '',
  minTime: 10 * 60 * 1000,     // 10 minutes
}
