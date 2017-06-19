import React from 'react'
import { ScrollView, Button, Text, Image, View } from 'react-native'

import RoundedButton from '../Components/RoundedButton'

import EntryList from '../Components/EntryList'

import styles from './Styles/AllScreenStyles'
import { Images } from '../Themes'
import { Colors } from '../Themes'

export default class ActivatedScreen extends React.Component {

  // DEBUG TEST START STATE
  state = {
    entries: require('../Fixtures/entry.json').items
  }

  static navigationOptions = {
    style: {marginBottom:100},
    activeTintColor: Colors.mainBanner,
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={Images.components}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  }

  toggleActive = (index) => {
    const {entries} = this.state
    entry = entries[index]
    entry.active = !entry.active
    this.setState({entries})
  }
  
  render() {
    const {entries} = this.state

    return (
      <View style={styles.container}>
        <EntryList
          onPressItem={this.toggleActive}
          list={entries}
          activeColor={Colors.active}
          inactiveColor={Colors.inactive}
          textColor='white'
        />
      </View>
   )
  }
}
