import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Touchable, TextInput } from 'react-native';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

class SignupCompany extends React.Component{
  constructor(props){
    super(props)
    this.state={
        UserName:"",Email:"",Password:"",PhoneNum:"",JobAccupation:"",Gender:"",Company:"",City:""
    }
}

 send_data = () =>{
   console.log("console===>")
   var obj = {
    UserName:this.state.UserName,
    Email:this.state.Email,
    Password:this.state.Password,
    PhoneNum:this.state.PhoneNum,
    JobAccupation:this.state.JobAccupation,
    Gender:this.state.Gender,
    Company:this.state.Company,
    City:this.state.City
   }
    //  this.setState(
    //      ()=>({})
    //  )
    if (this.state.UserName.trim() === "") {
        this.setState(() => ({ nameError: "Fill above feild." }));
      }else if (this.state.Email.trim() === "" ) {
        this.setState(() => ({ nameError: "Fill above feild." }));
      }else if (this.state.Password.trim() === "") {
        this.setState(() => ({ nameError: "Fill above feild." }));
    }else if (this.state.PhoneNum.trim() === "") {
        this.setState(() => ({ nameError: "Fill above feild." }));
    }else if (this.state.JobAccupation.trim() === "") {
      this.setState(() => ({ nameError: "Fill above feild." }));
    }else if (this.state.Gender.trim() === "") {
      this.setState(() => ({ nameError: "Fill above feild." }));
    }else if (this.state.Company.trim() === "") {
      this.setState(() => ({ nameError: "Fill above feild." }));
    }
     else {
        auth()
        .createUserWithEmailAndPassword(this.state.Email, this.state.Password)
        .then(() => {
            console.log('User account created & signed in!');
            database().ref('/').child('Company').push(obj)
            .then((success)=>{
                console.log(success,'success')
                this.props.navigation.navigate("CompanyPanel")
            })
          .catch((err)=>{
              console.log(err,'err')
          })
        })
        .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
                console.log('That email address is already in use!');
            }
      
            if (error.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');
            }
            
            console.error(error);
        });
      }
    }
    
    student=()=>{
        this.props.navigation.navigate("LoginCompany")
    }
    render(){
        return(
            <View style={styles.container}>
            <View style={styles.box} >
              <Text style={styles.head}>SignUp As Company</Text>
            <TextInput style={styles.Input} value={this.state.UserName} onChangeText={(e)=>this.setState({UserName:e})} placeholder="Name" />
            <TextInput style={styles.Input1} value={this.state.Email} onChangeText={(e)=>this.setState({Email:e})} keyboardType="email-address" placeholder="Email" />
            <TextInput style={styles.Input1} value={this.state.Password} onChangeText={(e)=>this.setState({Password:e})} secureTextEntry={true} placeholder="Password" />
            <TextInput style={styles.Input1} value={this.state.PhoneNum} onChangeText={(e)=>this.setState({PhoneNum:e})} keyboardType="number-pad" placeholder="Phone Number" />
            <TextInput style={styles.Input1} value={this.state.JobAccupation} onChangeText={(e)=>this.setState({JobAccupation:e})} placeholder="Job Accupation" />
            <TextInput style={styles.Input1} value={this.state.Gender} onChangeText={(e)=>this.setState({Gender:e})} placeholder="Required Gender" />
            <TextInput style={styles.Input1} value={this.state.Company} onChangeText={(e)=>this.setState({Company:e})} placeholder="Name Of Company" />
            <TextInput style={styles.Input1} value={this.state.City} onChangeText={(e)=>this.setState({City:e})} placeholder="City" />
            {!!this.state.nameError && (<Text style={{ color: "red",marginLeft:20 }}>{this.state.nameError}</Text>)}
            <TouchableOpacity onPress={()=>this.send_data()} style={styles.submit}><Text style={{textAlign:"center",color:"#676767"}}>Signup</Text></TouchableOpacity>
            <Text  style={{marginTop:20,textAlign:"center",color:"#676767"}}>Already have an Account? <TouchableOpacity onPress={()=>this.student()}><Text style={styles.signup}>Login</Text></TouchableOpacity></Text>
              </View>
            </View>
        );
    };
};
export default SignupCompany;

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
        marginTop:20,
    },
    Input1:{
        backgroundColor:"#fff",
        width:200,
        borderRadius:5,
        color:"#676767",
        // marginTop:20,
    },
    container: {
      flex: 1,
      backgroundColor: '#99cfe0',
      alignItems: 'center',
      justifyContent: 'center',
    },
    box:{
      height:600,
      width: 280,
      borderRadius:15,
      alignItems:"center",
      justifyContent:"center",
      backgroundColor:"#fff"
    },
    head:{
      fontSize:30,
      color:"#676767",
    //   marginTop:-100,
      fontWeight:"bold",
    }
  });