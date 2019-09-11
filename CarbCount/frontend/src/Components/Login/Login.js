import React, { Component } from 'react';

class Login extends Componet {
    constructor(){
        super();
        this.handleChange = this.handleChange.bind(this);
    }
    render() {
        return (
            <div className="center">
                <div className='card'>
                    <h1>Login</h1>
                    <form>
                        <input
                            className='form-item'
                            placeholder='Email'
                            name='username'
                            type='text'
                            onChange={this.handleChange}
                        />
                        <input
                            className='form-item'
                            placeholder='Password'
                            name='password'
                            type='password'
                            onChange={this.handleChange}
                        />
                        <input
                            className="form-submit"
                            value='Submit'
                            type='submit'
                        />
                    </form>
                </div>
            </div>
        );
    }
    handleChange(e) {
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }
}

export default Login;