//import libraries 
import React from 'react';
import {Text , View } from 'react-native';


//make components.  props argument from parent 
const Header = (props) =>{


    const { textStyle , viewStyle }=styles;
    return (

        <View style={viewStyle} >
    <Text style={textStyle} > {props.headerText} </Text>
     </View>
    );
}

//make component available to othr part
const styles={

    viewStyle:{
        justifyContent:'center',
        alignItems:'center', 
        height:60,
        paddingTop:15,
        backgroundColor:'#f8f8f8',
        shadowColor:'#000',
        shadowOffset:{ height:2, width:0},
        shadowOpacity:0.2,
        elevation:2,
        // position:relative 
    },
    
    textStyle:{
        fontSize:20
    }
}
export { Header };