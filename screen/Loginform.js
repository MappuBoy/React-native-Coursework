import React from 'react';
import { View,StyleSheet,Image,Text,TextInput, TouchableOpacity, TouchableWithoutFeedback} from "react-native";

 const Loginform=()=>{
    return(
<View style={styles.background}>
<Image style={styles.image} source={require('../assets/image/logo.jpg')} />  
<View style={styles.feilds}>
<TextInput style={styles.input} placeholder="User Name" keyboardType="text" />
       <TextInput style={styles.input}
           placeholder="Password"
           returnKeyType='go'
           secureTextEntry
           autoCorrect={false}
/>
</View>

<TouchableOpacity style={styles.button}>
     <Text style={styles.buttontext}>Loging</Text>
     </TouchableOpacity>
 
</View>

        );
    };
const styles=StyleSheet.create({
  background:{
    backgroundColor:'white'
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
        marginTop:30,
        marginLeft:'25%',
        width:'55%',
        height:'50%',
        justifyContent:'center',
        textAlign:'center'
       
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
export default Loginform