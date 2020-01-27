import React, { Component } from "react";
import { View, Text, StyleSheet,TouchableOpacity } from "react-native"
import { Ionicons } from "@expo/vector-icons";;
import MainScreen from "./MainScreen";
import CustomDrawer from './components/CustomDrawer';

class HomePage extends Component {
  openDrawer() {
    this.refs.DRAWER.open();
  }

  renderSideMenu() {
    return (
      <View style={{ flex: 1, marginTop: 10 }}>
        <Text style={styles.menuText}>Menu1 </Text>
        <Text style={styles.menuText}>Menu2</Text>
        <Text style={styles.menuText}>Menu3 </Text>
        <Text style={styles.menuText}>Menu4</Text>
      </View>
    );
  }

  renderTopRightView() {
    return (
      <View style={{ flex: 1, marginTop: 40 }}>
        <Text>Rs Content</Text>
      </View>
    );
  }
  render() {
    return (
      <CustomDrawer
        ref="DRAWER"
        sideMenu={this.renderSideMenu()}
        topRightView={this.renderTopRightView()}
      >
        
        <TouchableOpacity onPress={() => this.openDrawer()}>
          <View style={styles.menuButton}>
            <Ionicons name="md-menu" style={styles.menuIcon} />
          </View>
        </TouchableOpacity>
        <MainScreen />
      </CustomDrawer>
    );
  }
}

const styles = StyleSheet.create({
    menuButton: {
        backgroundColor: "#C21858",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
        borderTopEndRadius: 15,
        borderBottomEndRadius: 15,
        width: "15%",
        height: "25%",
      
      },
      menuIcon: {
        color: "white",
        fontSize: 25
      },
 

  menuText: {
    paddingBottom: 10,
    fontSize: 21,
    color: "white"
  },
 
 
});

export default HomePage;
