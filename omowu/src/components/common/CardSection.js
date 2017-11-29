import React, { Component } from 'react';
import { View } from 'react-native';

// decided use functional or class componentß
const CardSection =(props)=>{

     return(
         <View style={styles.containerStyle} >
         {props.children }
         </View>
     );
};


// styleing

const styles={
    containerStyle:{
        borderBottomWidth:1, 
        padding:5,
        backgroundColor:'#fff',
        justifyContent:'flex-start' ,
        flexDirection:'row',
        borderColor:'#ddd', 
        position:'relative'
    }
}
export { CardSection };