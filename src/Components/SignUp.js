import React, { Component} from 'react' 
import './SignUp.css'
class SignUp extends Component {
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
    // handleValidation = () => {
    //     if (this.state.password.length < 4 && this.state.password.length > 12) {

    //     }
    //     else {
    //         alert(`password should be of length greater than 4 and less than 12 character`)
    //     }
    // }
    handleSubmit = (event) => {
        alert('This works!');
        event.preventDefault();
    }
    
    render() {
        return (
            <div className='form-container'>
                <form onSubmit={this.handleSubmit}>
                    <fieldset>
                        <legend>SignUp</legend>
                        <div className='email-container'>
                            <label>Email</label>
                            <div>
                                <input type="email" placeholder='email' value={this.state.email} onChange={this.emailHandleChanger} ></input>
                                {this.state.setError && <h2 style={{color: 'red'}}>{this.state.setError}</h2>}
                            </div>
                            <div>
                            </div>
                        </div>
                        <div className='password-container'>
                            <label>Password</label>
                            <div>
                                <input type="password" placeholder='password' value={this.state.password} minlength="3" pattern="(?=.*\d).{3,12}" title="Must contain at least one number and at least 3 or less than 12 characters" maxLength={12} required onChange={this.passwordHandler}></input>
                            </div>
                        </div>
                        <br></br>
                        <input type="submit" value="Submit" className='btn'></input>
                       
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default SignUp;
