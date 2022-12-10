import React, { Component } from 'react'
import './Login.css'
 class Login extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        email: '',
        password: '',
        setError: ''
      }
    }
    emailHandleChanger = (event) => {
        let email=event.target.value
        if(!(/\S+@\S+\.\S+/.test(email)))
        {
            this.setState({
                setError:'Email is invalid'
            })
        }
        else
        {
            this.setState({
                setError:''
            }) 
        }
        this.setState({
            email: event.target.value
        })
    }
    passwordHandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    handleSubmit=(event)=>{
        const pass=this.state.password;
        let pass1=this.state.email;
        pass1=pass1.substring(0, pass1.indexOf('@'));
        if(pass===pass1)
        {
            alert('Success!!');

        }
        else
        {
            alert('Failure!!');
        }
        event.preventDefault();

    }
  render() {
    return (
        <div className='form1-container'>
        <form onSubmit={this.handleSubmit}>
            <fieldset>
                <legend>Login</legend>
                <div className='email1-container'>
                    <label>Email</label>
                    <div>
                        <input type="email" placeholder='email' value={this.state.email} onChange={this.emailHandleChanger} ></input>
                        {this.state.setError && <h2 style={{color: 'red'}}>{this.state.setError}</h2>}
                       
                    </div>
                    <div>
                    </div>
                </div>
                <div className='password1-container'>
                    <label>Password</label>
                    <div>
                        <input type="password" placeholder='password' value={this.state.password} minlength="3"  title="Must contain  at least 3 or less than 12 characters" maxLength={12} required onChange={this.passwordHandler}></input>
                    </div>
                </div>
                <br></br>
                <input type="submit" value="Submit" className='btn1'></input>
            </fieldset>
        </form>
    </div>
    )
  }
}

export default Login;