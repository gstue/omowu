import React, { Component } from 'react';
import { Text , View, TouchableOpacity } from 'react-native'; 


// make it useable , pass props

const Button =({ onPress,children })=>{
    const {buttonStyle , textStyle} = styles;
    return( 
        <TouchableOpacity onPress={ onPress } style={buttonStyle}>


        {/* add props to butotn */}
                <Text style={textStyle}> {children}</Text>
        </TouchableOpacity >
    );
};

const styles ={

    textStyle:{
        alignSelf:'center',
        color:'#007aff',
        fontSize:16,
        fontWeight:'600',
        paddingTop:10,
        paddingBottom:10
    },
    buttonStyle:{
        flex:1,
        alignSelf:'stretch',
        backgroundColor:'#fff',
        borderRadius:2,
        borderColor:'#007aff',
        borderWidth:1,
        marginLeft:5,
        marginRight:5 
    }
}
export { Button } ; 