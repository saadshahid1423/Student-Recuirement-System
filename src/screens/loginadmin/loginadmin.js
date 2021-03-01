import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Touchable, TextInput,ScrollView } from 'react-native';

class LoginAdmin extends React.Component{
  constructor(props){
    super(props)
    this.state={
        UserName:"",Password:""
    }
}
send_data=()=>{
  var username = this.state.UserName;
  var password = this.state.Password;
  if(username==="admin"){
    if(password==="admin"){
      this.props.navigation.navigate("AdminPanel")
      // console.log("Correct")
    }
    else{
      console.log("Wrong Pass")
    }
  }else{
    console.log("WRong Username")
  }
}
    render(){
        return(
            <View style={styles.container}>
              {/* <ScrollView> */}
            <View style={styles.box} >
              <Text style={styles.head}>Login As Admin</Text>
            <TextInput style={styles.Input} value={this.state.UserName} onChangeText={(e)=>this.setState({UserName:e})} placeholder="User Name" />
            <TextInput style={styles.Input1} value={this.state.Password} onChangeText={(e)=>this.setState({Password:e})} secureTextEntry={true} placeholder="Password" />
            <TouchableOpacity onPress={()=>this.send_data()} style={styles.submit}><Text style={{textAlign:"center",color:"#676767"}}>Login</Text></TouchableOpacity>
              </View>
              {/* </ScrollView> */}
            </View>
        );
    };
};
export default LoginAdmin;

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