import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Touchable, TextInput, ScrollView } from 'react-native';

class DetailsStudent extends React.Component{
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
                    <Text style={styles.COmpany}>Complete Details of Students</Text>
                    <Text style={styles.Detailtext1}>Students Name: {v.details.UserName}</Text>
                    <Text style={styles.Detailtext}>Student Email: {v.details.Email}</Text>
                    <Text style={styles.Detailtext}>Student Number: {v.details.PhoneNum}</Text>
                    <Text style={styles.Detailtext}>Gender: {v.details.Gender}</Text>
                    <Text style={styles.Detailtext}>Total Marks: {v.details.Marks}</Text>
                    <Text style={styles.Detailtext}>Name Of College: {v.details.College}</Text>
                    <Text style={styles.Detailtext}>City: {v.details.City}</Text>
                </View>
                      )
                    })} 
            </View>
        );
    };
};
export default DetailsStudent;

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