import React, { Component } from 'react';
import { View } from 'react-native';

//composnnet .. make this card conponent useable anywhere.

const Card =(props)=>{
     
    return (
        <View style={styles.containerStyle}>
            {props.children}  

        </View>
    );
};

const styles={
    containerStyle:{
        borderWidth:1,
        borderRadius:2,
        borderColor:'#ddd',
        borderBottomWidth:0,

        shadowColor:'#000',
        shadowOffset:{ width:0 , height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation:1,
        marginRight:5,
        marginLeft:5,
        marginTop:10

    }
}


export { Card } ;