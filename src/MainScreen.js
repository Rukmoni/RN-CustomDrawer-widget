import React from "react";

import {
  View,
  Button,
  Text,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";
import Colors from './constants/Colors';

const MainScreen = () => {
    return (
        <View style={styles.container}>
           <Text style={styles.contentText}>Circular Drawer Demo Page!</Text> 
        </View>
    
      );
}
 
const styles = StyleSheet.create({
    container: {
     
      alignItems:'center',
      justifyContent: "center",
      alignContent:"center",
      position:"relative"
     
    },
    contentText:{
        fontSize:20,
        color:Colors.primary
    }
})
export default MainScreen;