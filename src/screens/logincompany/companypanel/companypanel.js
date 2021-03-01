import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Touchable, TextInput, ScrollView } from 'react-native';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

class CompanyPanel extends React.Component{
    constructor(props) {
        super(props);
        // console.log(this.props)
        this.state = {
          completeDetail: [
          ]
        };
      }
    componentDidMount() {
        var arr = []
        database().ref('/').child("Students").on("child_added",   (data)=> {
          arr.push(data.val())
          this.setState({
            completeDetail: arr
          })
        })
      }
    send_data=(i)=>{
        this.props.navigation.navigate("DetailsStudent",{details:i})
    }
    render(){
        return(
            <View style={styles.back}>
            <ScrollView>
                <Text style={{textAlign:"center",marginTop:25,fontSize:30,fontWeight:"bold",color:"#676767"}}>List Of Students</Text>
            {this.state.completeDetail.map((i)=>{
            // console.log(v)
        return(
                <View style={styles.container}>
                    <Text style={styles.inner}>Student Name: {i.UserName}</Text>
                    <Text style={styles.inner}>Gender: {i.Gender}</Text>
                    <Text style={styles.inner}>City: {i.City}</Text>
                    <View style={{flex:1,alignItems:"center"}}>
                    <TouchableOpacity onPress={()=>this.send_data(i)} style={styles.submit}><Text style={{textAlign:"center",color:"#676767"}}>Details</Text></TouchableOpacity>
                    </View>
                </View>
                    )
                  })} 
            </ScrollView>
            </View>
        );
    };
};
export default CompanyPanel;

const styles = StyleSheet.create({
    submit:{
        marginTop:15,
        backgroundColor:"#99cfe0",
        borderRadius:15,
        width:100,
        height:25,
      },
    back: {
        flex: 1,
        backgroundColor: '#99cfe0',
        alignItems: 'center',
        justifyContent: 'center',
      },
      container:{
          backgroundColor:"#fff",
          width:300,
          height:140,
        //   justifyContent:"center",
          flex:1,
          borderRadius:20,
        //   display:"inline",
          marginTop:15
      },
      inner:{
          marginTop:7,
          marginLeft:15,
        // textAlign:"center",
        fontSize:18,
      }
  });