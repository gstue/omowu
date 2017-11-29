//decided is it a class component
import React,{ Components, Component } from 'react';
import {Text} from 'react-native'; 
import firebase from 'firebase';
import { Button , Card , CardSection , Input ,  Spinner } from './common';

class LoginForm extends Component{
    // initial satte
    state={email:'', password:'', error:'' , loading:false};

    onButtonPress(){

        const { email ,  password} = this.state;


        //set state 
        this.setState({error:'', loading:true});
        //attempt the frebase data ocme in
            firebase.auth().signInWithEmailAndPassword( email , password)

            //if fail auth 
            .then(this.onLoginSuccess.bind(this))


            .catch(()=>{
            firebase.auth().createUserWithEmailAndPassword( email ,password)
            .then(this.onLoginSuccess.bind(this))
                .catch(this.onLoginFail.bind(this));
            });

    };

    onLoginFail(){
        this.setState({
            error:'Login fal',loading:false 
        });
    }
    onLoginSuccess(){
        this.setState({
            email:'',
            password:'',
            loading:false,
            error:''
        });
    }


    renderButton(){

        //default true
        if(this.state.loading){
            return <Spinner size="small"/>
        }

       return <Button onPress={this.onButtonPress.bind(this)}>
        Login
    </Button>
    }

    render(){
        return(
            <Card>
                <CardSection>
                {/* Textinput do not input width and height */}

                <Input 
                placeholder=" @gamil.com"
                label = " email "
                value = {this.state.email}
                onChangeText = { email=>this.setState( { email })}
                />
                </CardSection>
                
                <CardSection>
                    <Input
                    secureTextEntry
                    placeholder="password"
                    label ="password"
                    value={this.state.password}
                    onChangeText = { password =>this.setState({ password })}
                    />
                </CardSection>

                {/* area show error tet */}
                <Text style={styles.errorTextStyle}> 

                    {/* //default is empty string  */}
                {this.state.error}    
                </Text> 
                <CardSection>
                  {this.renderButton()}
                </CardSection>
            </Card>
        )
    }
}
const styles={
    errorTextStyle:{
        fontSize:20,
        alignSelf:'center',
        color:'red'
    }

};
export default LoginForm;