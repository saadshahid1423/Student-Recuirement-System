import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Touchable, TextInput } from 'react-native';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';


class LoginStudent extends React.Component{
  constructor(props){
    super(props)
    this.state={
        Email:"",Password:""
    }
}
    send_data=()=>{
      if (this.state.Email.trim() === "") {
        this.setState(() => ({ nameError: "Fill above feild." }));
      }else if (this.state.Password.trim() === "" ) {
        this.setState(() => ({ nameError: "Fill above feild." }));
      }else(
        auth()
        .signInWithEmailAndPassword(this.state.Email, this.state.Password)
        .then(() => {
          console.log('User account created & signed in!');
          this.props.navigation.navigate("StudentPanel")
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
          }
      
          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
          }
      
          console.error(error);
        })
      )
    }
    Signup=()=>{
      this.props.navigation.navigate("Signupstudent")
    }
    render(){
        return(
            <View style={styles.container}>
            <View style={styles.box} >
              <Text style={styles.head}>Login As Student</Text>
            <TextInput value={this.state.Email} onChangeText={(e)=>this.setState({Email:e})} style={styles.Input} keyboardType="email-address" placeholder="Email" />
            <TextInput  value={this.state.Password} onChangeText={(e)=>this.setState({Password:e})} style={styles.Input1} secureTextEntry={true} placeholder="Password" />
            <TouchableOpacity onPress={()=>this.send_data()} style={styles.submit}><Text style={{textAlign:"center",color:"#676767"}}>Login</Text></TouchableOpacity>
            {!!this.state.nameError && (<Text style={{ color: "red",marginLeft:20 }}>{this.state.nameError}</Text>)}
            <Text style={{marginTop:50,textAlign:"center",color:"#676767"}}>Don't have an Account? <TouchableOpacity onPress={this.Signup}><Text style={styles.signup}>Signup</Text></TouchableOpacity></Text>
              </View>
            </View>
        );
    };
};
export default LoginStudent;

const styles = StyleSheet.create({
  submit:{
    marginTop:15,
    backgroundColor:"#99cfe0",
    borderRadius:15,
    width:100,
    height:25,
  },

    Input:{
        backgroundColor:"#fff",
        width:200,
        borderRadius:5,
        color:"#676767",
        marginTop:120,
    },
    Input1:{
        backgroundColor:"#fff",
        width:200,
        borderRadius:5,
        color:"#676767",
        marginTop:20,
    },
    container: {
      flex: 1,
      backgroundColor: '#99cfe0',
      alignItems: 'center',
      justifyContent: 'center',
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
      fontSize:30,
      color:"#676767",
      marginTop:-100,
      fontWeight:"bold",
    }
  });