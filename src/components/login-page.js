import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton'
import {
  TextField
} from 'redux-form-material-ui';
import { store } from '../index';



class LoginForm extends Component{

    onFormSubmit( values ){
        store.dispatch({type: 'LOGIN_USER_REQUESTED', user: values})
    }

    render(){
        console.log(this.props);
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

LoginForm = reduxForm({
    form:'myForm'
})(LoginForm);

export default connect()(LoginForm)
