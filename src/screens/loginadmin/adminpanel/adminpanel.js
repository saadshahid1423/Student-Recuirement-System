import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Touchable, TextInput,ScrollView } from 'react-native';
import { exp } from 'react-native/Libraries/Animated/src/Easing';

class AdminPanel extends React.Component{
    Companydata=()=>{
        this.props.navigation.navigate("CompanyData")
    }
    Studentdata=()=>{
        this.props.navigation.navigate("StudentData")
    }
    render(){
        return(
            <View style={styles.back}>
                <View style={styles.box}>
                    <Text style={styles.head}>Choose which data you want to see?</Text>
                    <TouchableOpacity onPress={this.Companydata}><Text style={styles.Option1}>Company Data</Text></TouchableOpacity>
                    <TouchableOpacity onPress={this.Studentdata}><Text style={styles.Option}>Student Data</Text></TouchableOpacity>
                </View>
            </View>
        )
    }
}
export default AdminPanel;
const styles = StyleSheet.create({
    head:{
        fontSize:25,
        textAlign:"center",
    },
    Option1:{
        marginTop:100,
        marginLeft:10,
        fontSize:30,
    },
    Option:{
        marginLeft:10,
        fontSize:30,
        marginTop:50,
    },
    back:{
        flex: 1,
        backgroundColor: '#99cfe0',
        alignItems: 'center',
        justifyContent: 'center',
    },
    box:{
        backgroundColor:"#fff",
        height:500,
        width:350,
        borderRadius:15,
    },
})