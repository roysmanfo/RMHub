import React from 'react';
import app from './firebase';


class Auth extends React.Component{
    constructor(props: any){
        super(props);
        
        this.state = {
            user: null,
        }

        this.authListener = this.authListener.bind(this);
    }

    componentDidMount(): void {
        this.authListener();  
    }

    authListener(){
        app.auth().onAuthStateChanged((user) => {
            
        });
    }
}