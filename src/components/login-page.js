import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton'
import {
  TextField
} from 'redux-form-material-ui';
import { loginSubmit } from '../actions/actions';



class LoginForm extends Component{

    onFormSubmit( { username, password } ){
        this.props.dispatch(loginSubmit({ username, password }));
    }

    render(){
        const { handleSubmit } = this.props;
        return (
            <div className="col-md-4 col-md-offset-4">
                <h1> LoginForm</h1>
              <form onSubmit={handleSubmit(this.onFormSubmit.bind(this))}>
                <div>
                  <Field name="username" component={TextField} type="text" floatingLabelText = { "Username" }/>
                </div>
                <div>
                  <Field name="password" component={TextField} type="text" floatingLabelText = { "Password" } />
                </div>
                <RaisedButton label="Login" type="submit" />
              </form>
              <div>{ this.props.error }</div>
            </div>
        );
    }
}

function validate({ username, password }){

    let errors = {}

    if(!username){
        errors['username'] = "Please fill in a username"
    }

    if(!password){
        errors['password'] = "Cannot be empty"
    }

    return errors;

}

LoginForm = reduxForm({
    form:'myForm',
    validate
})(LoginForm);

export default connect()(LoginForm)
