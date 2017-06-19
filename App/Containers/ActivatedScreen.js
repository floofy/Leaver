import React from 'react'
import { ScrollView, Button, Text, Image, View, Modal, TouchableHighlight } from 'react-native'
import { Images, Colors } from '../Themes'

import AddScreen from './AddScreen'

import EntryList from '../Components/EntryList'
import AddEntryButton from '../Components/AddEntryButton'

import styles from './Styles/ActivatedScreenStyles'

export default class ActivatedTabScreen extends React.Component {
  // DEBUG TEST START STATE
  state = {
    entries: require('../Fixtures/entry.json').items,
    modalVisible: false,
  }

  constructor(props) {
    super(props)
    this.add_depart = ''
    this.add_destination = ''
    this.add_arrival = ''
    this.add_readyTime = ''
  }

  static navigationOptions = {
    style: {marginBottom:100},
    activeTintColor: Colors.mainBanner,
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={Images.busIcon}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  }

  setModalVisible = (visible) => {
    this.setState({modalVisible: visible});
  }

  setModalInvisible = () => {
    this.setModalVisible(false)
  }

  toggleActive = (index) => {
    const {entries} = this.state
    entry = entries[index]
    entry.active = !entry.active
    this.setState({entries})
  }
  
  handleAddEntry = (list) => {
    const {entries} = this.state
    new_entry = {
      "depart": list[0],
      "destination" : list[1],
      "arrival" : list[2],
      "readyTime" : list[3],
      "active": list[4],
    }
    this.setState({entries: [new_entry, ...entries]})
  }

  render() {
    const {entries} = this.state

    return (
      <View style={styles.container}>
        <Modal
          animationType={'slide'}
          transparent={false}
          visible={this.state.modalVisible}
          >
            <AddScreen
              onPressCancel={this.setModalInvisible}
              onPressDone = {this.handleAddEntry}
              activeColor={Colors.active}
              inactiveColor={Colors.inactive}
            />
        </Modal>

        <EntryList
          onPressItem={this.toggleActive}
          list={entries.filter((e) => {return e.active})}
          activeColor={Colors.active}
          inactiveColor={Colors.inactive}
          textColor='white'
        />
        <View style={styles.buttonView}>
          <AddEntryButton
            onPress={() => this.setModalVisible(true)}
          />
        </View>

      </View>
   )
  }
}
