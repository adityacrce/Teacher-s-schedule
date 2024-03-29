import React, { Component } from 'react'

 class SignUp extends Component {
     state = {
         email: '',
         password: '',
         firstname: '',
         lastname: ''
     }
     handleChange= (e) => {
        this.setState({
            [e.target.id]: e.target.value 
        })
    }
    handleSubmit=(e) => {
        e.preventDefault();
        console.log(this.state)
    }
    render() {
        return (
            <div className='container'>
                <form onSubmit={this.handleSubmit}>
                    <h3 className='grey-text text-darken-3'>Sign Up</h3>
                    <div className='input-field'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email' onChange={this.handleChange}/>
                    </div>
                    <div className='input field'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' id='password' onChange={this.handleChange}/>
                    </div>
                    <div className='input field'>
                        <label htmlFor='firstName'>First Name</label>
                        <input type='text' id='firstname' onChange={this.handleChange}/>
                    </div>
                    <div className='input field'>
                        <label htmlFor='lastName'>Last Name</label>
                        <input type='text' id='lastname' onChange={this.handleChange}/>
                    </div>
                    <div className='input-field'>
                        <button className='btn pink lighten-1 z-depth-0'>LogIn</button>
                    </div>
                </form>    
            </div>
        );
    }
}

export default SignUp
