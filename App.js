import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions, Linking, Clipboard, ImageBackground } from 'react-native';
import { Menu, Provider, Divider, TouchableRipple } from 'react-native-paper';
import { RFValue } from 'react-native-responsive-fontsize';
import { MaterialIcons } from '@expo/vector-icons';
var display = { width: Dimensions.get('window').width, height: Dimensions.get('window').height };

const RFValueProcessed = (val, max) => {
  var to_return;
  if (RFValue(val) > max) { to_return = max; } else { to_return = RFValue(val) }
  return to_return;
}

export default class App extends Component {
  constructor() {
    super();
    this.state = { menu: false, }
  }

  launchMenu = val => this.setState({ menu: val });
  render() {
    return (
      <Provider>
        <View style={styles.container}>
          {display.width < 806 ?
            <View style={styles.header}>
              <View style={{ zIndex: 10, paddingLeft: RFValueProcessed(5, 30) }}>
                <Menu visible={this.state.menu} anchor={<TouchableOpacity onPress={() => this.launchMenu(true)}><MaterialIcons name='menu' size={RFValueProcessed(35, 55)} color={'#ffffff'} rotate={0} /></TouchableOpacity>} onDismiss={() => this.launchMenu(false)} contentStyle={{ borderTopLeftRadius: 0, borderRadius: 20, backgroundColor: '#ffffff', marginTop: 5, marginLeft: RFValueProcessed(14, 40), marginTop: RFValueProcessed(14, 40) }}>
                  <Menu.Item icon={() => <MaterialIcons name='info-outline' style={{ fontSize: RFValueProcessed(22, 35), color: '#272727' }} />} titleStyle={{ color: '#272727', fontSize: RFValueProcessed(15, 25) }} onPress={this.logOut} title="About" />
                  <Divider style={{ borderWidth: 1, borderColor: '#27272727' }} />
                  <Menu.Item icon={() => <MaterialIcons name='person' style={{ fontSize: RFValueProcessed(22, 35), color: '#272727' }} />} titleStyle={{ color: '#272727', fontSize: RFValueProcessed(15, 25) }} onPress={this.logOut} title="Contacts" />
                </Menu>
              </View>
              <Text style={styles.header_txt}>Aditya Prakash</Text>
            </View>
            :
            <View style={[styles.header, { justifyContent: 'space-between' }]}>
              <Text style={styles.header_txt}>Aditya Prakash</Text>
              <View style={{ zIndex: 10, alignSelf: 'center', display: 'flex', flexDirection: 'row' }}>
                <TouchableRipple onPress={() => console.log('Pressed')} rippleColor="rgba(0, 0, 0, .32)" style={{ paddingVertical: RFValue(2), paddingHorizontal: RFValueProcessed(5, 15), backgroundColor: '#ffffff33', borderRadius: 5, marginHorizontal: 35 }}>
                  <Text style={{ fontSize: RFValueProcessed(20, 25), color: '#ffffff' }}>About</Text>
                </TouchableRipple>
                <TouchableRipple onPress={() => console.log('Pressed')} rippleColor="rgba(0, 0, 0, .32)" style={{ paddingVertical: RFValue(2), paddingHorizontal: RFValueProcessed(5, 15), backgroundColor: '#ffffff33', borderRadius: 5, marginHorizontal: 35 }}>
                  <Text style={{ fontSize: RFValueProcessed(20, 25), color: '#ffffff' }}>Contacts</Text>
                </TouchableRipple>
              </View>
            </View>}
          <View style={{ flex: 1 }}>
            <View style={[styles.section, { borderBottomRightRadius: 20, borderTopRightRadius: 20, borderLeftWidth: 0, marginRight: display.width < 768 ? RFValueProcessed(30, 60) : display.width > 1024 ? RFValueProcessed(350, 1280) : RFValueProcessed(125, 512), marginTop: RFValueProcessed(60, 100) }]}>
              <Text style={{ color: '#000000', fontWeight: 'bold', fontSize: RFValueProcessed(20, 30), marginLeft: RFValueProcessed(10, 50) }}>
                Q. Who am I ?
              </Text>
              <Text style={{ color: '#000000', fontSize: RFValueProcessed(17, 27), marginLeft: RFValueProcessed(10, 50) }}>
                → I am Aditya Prakash.
              </Text>
              <Text style={{ color: '#000000', fontSize: RFValueProcessed(15, 25), marginLeft: RFValueProcessed(20, 50) }}>
                A Student, programmer & a karate player, from Patna, Bihar, India. As of 2022, My age is 15 years and I'm in grade-10.{'\n'}
                
              </Text>
            </View>

          </View>
        </View>
      </Provider >

    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    width: display.width,
    backgroundColor: '#272727',
    position: 'absolute',
    top: 0,
    paddingVertical: RFValueProcessed(20, 10),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    zIndex: 99
  },
  header_txt: {
    color: '#ffffff',
    fontSize: RFValueProcessed(26, 40),
    letterSpacing: RFValueProcessed(-0.5),
    paddingLeft: RFValueProcessed(20)
  },
  section: {
    padding: RFValueProcessed(7, 30),
    borderColor: '#272727',
    borderWidth: 4
  }
});