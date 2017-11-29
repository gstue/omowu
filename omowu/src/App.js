import React , { Components, Component } from 'react';
import { View , Text } from 'react-native';
import firebase from 'firebase'; 
import { Header , Button , Spinner }   from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component{

    state={ loggedIn  : null }; 
    // add life cycle method

    componentWillMount(){

        //set status of login initial

        firebase.initializeApp({
            apiKey: "AIzaSyDV0HU-s2jCBAx91hr6zH1E7w4lSi2hdNc",
            authDomain: "authentication-e9d83.firebaseapp.com",
            databaseURL: "https://authentication-e9d83.firebaseio.com",
            projectId: "authentication-e9d83",
            storageBucket: "authentication-e9d83.appspot.com",
            messagingSenderId: "80026607231"
          });

        //   check the status of user is loign
        firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                this.setState({loggedIn:true});
            }
            else {
                this.setState({loggedIn:false});
            }
        })
    }

    renderContent(){


        // if(this.state.loggedIn){
        //     return (
        //         <Button>i am Logout</Button>
        //     );
        // }
        // return 
        // <LoginForm/>;

        // change to switch
        switch(this.state.loggedIn){

            case true:
                 return (  
                //  <Text>hiM</Text>
                 <Button onPress={()=>firebase.auth().signOut()}>
                Logout      </Button>
                 );            

            case false:
            return (
            <LoginForm/>);
             default:
                return <Spinner size="large"/>;


        }

    }

    
    render() {
        return (
            <View>
                <Header headerText="Ithentication"/> 
                {/* <LoginForm/>   chaneg to if else render method */}
                {this.renderContent() }
            </View>

        );
    }
}

export default App;