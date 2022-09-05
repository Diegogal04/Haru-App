import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Colors } from '../../src/constants';
import Icon from 'react-native-vector-icons/FontAwesome';


const Login = () => {

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    return (
        <ScrollView style={{flex:1,backgroundColor:'#fff',flexDirection:"column"}}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff"/>
            <View style={{flex:2,flexDirection:"column", backgroundColor:'#fff'}}>
                <View style={{flexDirection:"row",justifyContent:"flex-start",alignItems:"center",paddingTop:40, paddingHorizontal:'5%'}}>
                    <Text style={{color: Colors.primary, fontSize:27, paddingRight:10, fontWeight:"bold"}}>¡Unete al Equipo!</Text>
                    <Image source={require('../assets/img/hands2.png')} style={{width: 95, height:25}}/>
                </View>
                <Text style={{fontSize:15, paddingTop:10, color: '#777', paddingHorizontal:'4%'}}>
                    Estamos muy emocionados de que puedas formar parte de este gran equipo de conductores.
                </Text>
                <View style={{flexDirection:"column",paddingTop: 20}}>
                    <View style={{flexDirection:"row", justifyContent:"center",alignItems:"center", marginLeft:10, backgroundColor:'#ededed', width:'95%', borderRadius:20, height:60}}>
                        <Icon name="envelope-o" size={22} color="#818181"/>
                        <TextInput onChangeText={(text) => {setFormData((prevState) => ({...prevState, email:text}))}} style={styles.input} placeholder="Ingrese su correo electronico" placeholderTextColor="#818181"></TextInput>
                    </View>
                    <View style={{flexDirection:"row", justifyContent:"center",alignItems:"center", marginLeft:10,backgroundColor:'#ededed', width:'95%', borderRadius:20, height:60, marginTop:20    }}>
                        <Icon name="lock" size={22} color="#818181"/>
                        <TextInput onChangeText={(text) => {setFormData((prevState) => ({...prevState, password:text}))}}  style={styles.input} secureTextEntry={true} placeholder="Ingrese su contraseña" placeholderTextColor="#818181"></TextInput>
                    </View>
                    <View style={{width:'90%'}}>
                        <Text style={{fontSize:15, color:'#818181', alignSelf: "flex-end",paddingTop:10,paddingBottom:10}}>Olvide mi contraseña</Text>
                    </View>
                    <TouchableOpacity style={{justifyContent:'center', width: '90%', marginLeft:19,backgroundColor: Colors.third, height:50, marginBottom:30, borderRadius:10, color: Colors.secondary}} onPress={() => console.log(formData)}>
                        <Text style={{fontSize:17, color: Colors.secondary, letterSpacing:1.5, textAlign:"center",position:"relative", fontWeight:"bold"}}>
                            Registrate
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{flex:2,flexDirection:"column",backgroundColor:'#fff', flexDirection:"column",paddingHorizontal:'3%'}}>
                <Text style={{textAlign: "center",marginVertical:35, color:'#818181', fontSize:20}}>Ó</Text>
            
                <View style={{flexDirection:"column",alignItems:"center",width:'95%'}}>
                    <TouchableOpacity style={{height:55, width:'100%', borderWidth:1, borderRadius:10,borderColor:'#ddd', flexDirection:"row", alignItems: "center"}}>
                        <Image source={require('../assets/img/googleIcon.png')} style={{width:25,height:25, marginLeft:15}}/>
                        <Text style={{marginLeft:15, fontWeight:"bold", width:'80%', textAlign:"center", fontSize:16}}>Inicia Secion</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection:"row",alignItems:"center", width:'100%', justifyContent:"center"}}>
                    <Text style={{paddingTop:15,fontSize:17, color: '#818181'}}>No tienes cuenta?</Text>
                    <Text style={{paddingTop:15, fontSize:18, marginLeft:5}}>Crear una Cuenta</Text>
                 </View>
            </View>
            
        </ScrollView>
    )
}

export default Login

const styles = StyleSheet.create({
    input: {
        position: "relative",
        height: '100%',
        width: '85%',
        paddingLeft:20
    }
})
