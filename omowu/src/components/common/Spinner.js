import React, { Component } from 'react';
import { ActivityIndicator , View } from 'react-native'; 

const Spinner =({size})=>{
    return(
        <View style={styles.spinnerStyle}>
            <ActivityIndicator size={size || 'large'}/> 
        </View>
    );
}

// add style to spinner
const styles={
    spinnerStyle:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center'
    }
}

export {Spinner};