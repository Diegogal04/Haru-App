import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Colors } from '../../src/constants/';



const Onboarding = ({navigation}) => {

    return (
        <View style={{flex:1, backgroundColor: Colors.secondary}}> 
            <StatusBar barStyle='dark-content' backgroundColor='#fff' />
            <View style={{flex:3, flexDirection: "column", backgroundColor:'#000', alignItems:"center", justifyContent: "center", paddingTop:10}}>
                <ImageBackground source={require('../assets/img/car2.png')} style={{width:'100%', height:'100%', backgroundColor:'#181818'}}/>
            </View>
            <View style={{flex:2, backgroundColor:'#181818'}}>
                <View style={{flex:1, flexDirection:"column",justifyContent:"flex-start", alignItems: "center",backgroundColor:"#000"}}>
                    <Text style={{fontFamily: "Rubik-Bold", color: Colors.secondary, fontSize: 40, fontWeight:"bold"}}>Conductor Haru</Text>
                    <Text style={{fontFamily: 'Rubik-Bold',maxWidth: '85%', color: '#999', fontSize: 17, textAlign: "center", paddingTop:10, fontWeight:"bold"}}>Registrate como un conductor Haru y empieza a generar ingresos mensuales extra por solo manejar!</Text>
                </View>
                <View style={{flex:1, flexDirection:"column", justifyContent: "flex-end", alignItems:"center", backgroundColor:"#000"}}>
                <TouchableOpacity style={{justifyContent:'center', width: '70%',backgroundColor: Colors.third, height:50, marginBottom:30, borderRadius:10, color: Colors.secondary}} onPress={() => navigation.navigate('Login')}>
                        <Text style={{fontSize:17, color: Colors.secondary, letterSpacing:1.5, textAlign:"center",position:"relative", fontWeight:"bold"}}>
                            Registrate
                        </Text>
                </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Onboarding

const styles = StyleSheet.create({})
