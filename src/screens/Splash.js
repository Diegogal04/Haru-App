import React from 'react';
import { View, Text, StyleSheet, StatusBar, Image } from 'react-native';
import { Colors } from '../../src/constants/';

const Splash = ({navigation}) => {

    setTimeout(() => {
        navigation.replace('Onboarding')
    }, 3000)

    return (
        <View style={{flex:1, flexDirection: "column", justifyContent:"center", alignItems: "center", backgroundColor: Colors.primary}}>
            <StatusBar barStyle='light-content' hidden={false} backgroundColor={Colors.primary}/>
            <Image source={require('../assets/img/GoodLogoHaru.png')} style={{width:250, height:250}}/>
            <Text style={{fontFamily: 'Rubik-Bold', color: Colors.secondary, fontSize:40 }}>Haru</Text>
        </View>
    )
}

export default Splash;