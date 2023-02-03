import React from 'react';
import app from '../conf/firebase';
import "../css/login/login.css"



export default class Login extends React.Component{

    login(){

    }

    signUp(){


    }

    render(): React.ReactNode {
        return(
            <>
                <main className='login-main'>
                    <form action="" method="post">
                        <h1 style={{marginBottom: "4rem", color: "#999"}}>Login</h1>
                        <input name='email' type="email" id="email" placeholder='Email'/>
                        <input name='password' type="password" id="password" placeholder='Password'/>
                        <div className="button-wrapper">
                            <button onClick={this.login}>Login</button>
                            <button onClick={this.signUp}>Sign Up</button>
                        </div>
                    </form>
                </main>
            </>
        )
    }
}

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
        // app.auth().onAuthStateChanged((user) => {
            
        // });
    }
}