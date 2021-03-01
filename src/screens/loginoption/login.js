import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Touchable } from 'react-native';
// import { Fade } from "rnal";

class LoginOption extends React.Component{
  moveToStudent=()=>{
    this.props.navigation.navigate("Loginstudent")
  }
  movetoCompany=()=>{
    this.props.navigation.navigate("LoginCompany")
  }
  movetoAdmin=()=>{
    this.props.navigation.navigate("LoginAdmin")
  }
    render(){
        return(
        <View style={styles.container}>
          <View style={styles.box} >
            <Text style={styles.head}>Job Finder</Text>
            <TouchableOpacity onPress={this.moveToStudent}><Text style={styles.LoginText}>Login As Student</Text></TouchableOpacity>
            <TouchableOpacity onPress={this.movetoCompany}><Text style={styles.LoginText}>Login As Company</Text></TouchableOpacity>
            <TouchableOpacity onPress={this.movetoAdmin}><Text style={styles.LoginText}>Login As Admin</Text></TouchableOpacity>
            </View>
          </View>
        );
    };
};
export default LoginOption;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#99cfe0',
      alignItems: 'center',
      justifyContent: 'center',
    },
    LoginText: {
      fontSize: 20,
      padding:7,
      color:"#676767",
      fontWeight:"bold",
    },
    box:{
      height:500,
      width: 280,
      borderRadius:15,
      alignItems:"center",
      justifyContent:"center",
      backgroundColor:"#fff"
    },
    head:{
      fontSize:35,
      marginBottom:45,
      color:"#676767",
      fontWeight:"bold",
    }
  });