import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import { RaisedButton } from 'material-ui';
import FormPersonalDetails from './FormPersonalDetails';
import ConfirmDetails from './Confirm';
import Success from './Success';



export class UserForm extends Component {
    state = {
        step:1,
        firstName:'',
        lastName:'',
        email:'',
        occupation:'',
        city:'',
        bio:''
    }

    // proceed to next step
    nextStep = () => {
        const {step} = this.state;
        this.setState({
            step:step + 1
        })
    }

    // go back to previos
    prevStep = () => {
        const {step} = this.state;
        this.setState({
            step:step - 1
        })
    }

    //handle Fields change
    handleChange = (input) => e => {
        this.setState({
            [input]:e.target.value
        });
    };
    render() {
        const {step, firstName,email, occupation,city, bio, lastName}  = this.state;
        const values =  {step, firstName,email, occupation,city, bio, lastName};

        switch(step){
            case 1:
                return (
                    <FormUserDetails 
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                    />
                )
            case 2:
                return (
                    <FormPersonalDetails 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                    />
                )
            
            case 3:
                return (
                    <ConfirmDetails 
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                    /> 
                )
            case 4:
                return (
                    <Success />
                )
        }

        return (
            <div>
                
            </div>
        )
    }
}

export default UserForm
