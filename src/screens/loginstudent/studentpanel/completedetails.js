import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Touchable, TextInput, ScrollView } from 'react-native';

class DetailsCompany extends React.Component{
    constructor(props) {
        super(props);
        // console.log(this.props.)
        this.state = {
            details:[
                this.props.route.params
            ]
        };
      }
    render(){
        return(
            <View style={styles.back}>
                            {this.state.details.map((v)=>{
            console.log(v)
        return(
                <View style={styles.white}>
                    <Text style={styles.COmpany}>Complete Details of Company</Text>
                    <Text style={styles.Detailtext1}>Company Name: {v.details.Company}</Text>
                    <Text style={styles.Detailtext}>Hiring Person's Name: {v.details.UserName}</Text>
                    <Text style={styles.Detailtext}>Company Email: {v.details.Email}</Text>
                    <Text style={styles.Detailtext}>Required Gender: {v.details.Gender}</Text>
                    <Text style={styles.Detailtext}>Job Accupation: {v.details.JobAccupation}</Text>
                    <Text style={styles.Detailtext}>Contact Number: {v.details.PhoneNum}</Text>
                    <Text style={styles.Detailtext}>City: {v.details.City}</Text>
                </View>
                    )
                })} 
            </View>
        );
    };
};
export default DetailsCompany;

const styles = StyleSheet.create({
    Detailtext:{
        fontSize:20,
        marginTop:20,
        marginLeft:10,
        fontWeight:"bold",
    },
    Detailtext1:{
        fontSize:20,
        marginTop:50,
        marginLeft:10,
        fontWeight:"bold",
    },
    COmpany:{
        fontSize:20,
        marginTop:20,
        textAlign:"center",
        fontWeight:"bold",
    },
    back: {
        flex: 1,
        backgroundColor: '#99cfe0',
        alignItems: 'center',
        justifyContent: 'center',
      },
      white:{
          backgroundColor:"#fff",
          height:500,
          borderRadius:15,
          width:350,
      }
});