import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FromInput from '../form-input/from-input.component';

import './sign-in.style.scss';

class SignIn extends React.Component {
  state = {
    email: '',
    password: '',
  };

  handleSubmit = (event) => {
    event.preventDeafult();

    this.setState({ email: '', password: '' });
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with yourt email and password</span>
        <form onSubmit={this.handleSubmit} action=''>
          <FromInput type='text' name='email' onChange={this.handleChange} value={this.state.email} required />

          <FromInput
            type='password'
            name='password'
            onChange={this.handleChange}
            value={this.state.password}
            required
          />
          <CustomButton type='submit'> SIGN IN</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
