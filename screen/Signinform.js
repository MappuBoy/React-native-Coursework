import React from 'react';
import { View,StyleSheet,Image,Text,TextInput, TouchableOpacity, } from "react-native";

 const Signinform=()=>{
    return(
<View style={styles.background}>
<Image style={styles.image} source={require('../assets/image/user.jpg')} />  
<View style={styles.feilds}>
<TextInput style={styles.input} placeholder="Full name" keyboardType="text" />
<TextInput style={styles.input} placeholder="Address" keyboardType="text" />
<TextInput style={styles.input} placeholder="email" keyboardType="text" />
<TextInput style={styles.input} placeholder="tp number" keyboardType="text" />   
</View>

<TouchableOpacity style={styles.button}>
     <Text style={styles.buttontext}>Signing in</Text>
     </TouchableOpacity>
 
</View>

        );
    };
const styles=StyleSheet.create({
  background:{
    backgroundColor:'white',
    marginTop:'25%'
  },
    input: {
        height: 50,
        marginTop: 25,
        borderRadius:30,
        borderWidth: 1,
        padding: 10,
        width:280
      },
      tinyLogo: {
        width: 100,
        height: 100,

      },
      container:{
        marginTop:20,
        alignItems:'center',
        justifyContent:'center',
    },
    image:{
        marginTop:'10%',
        marginLeft:'25%',
        width:180,
        height:150,
        justifyContent:'center',
        alignItems:'center'
       
    },
    text:{
        
        fontWeight: 'bold',
        textAlign:'center',
        justifyContent:'center',
        alignItems:'center',
        color: 'black',
        fontSize:30
    },
    feilds:{
        justifyContent:'center',
        textAlign:'center',
        marginLeft:50,
        marginBottom:'2%',
    },
    button:{
        width:'60%',
        padding:5,
        fontSize:20,
        backgroundColor:"goldenrod",
        height:50,
        marginLeft:'17%',
        alignItems:'center',
        justifyContent:'center',
        marginTop:'10%',
        borderRadius:100
      },
      buttontext:{
        color: 'black',
        textAlign:'center',
        fontWeight: 'bold',
      },

});
export default Signinform