import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import { RaisedButton } from 'material-ui';



export class ConfirmDetails extends Component {
    continue =  e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back =  e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const {values: { firstName, email, occupation, bio, lastName, city}} = this.props;
        return (
            <MuiThemeProvider 
            >
                <React.Fragment>
                    <AppBar title="Confirm User Data"/>
                    <List>
                        <ListItem primaryText="First Name" secondaryText={firstName}/>
                        <ListItem primaryText="last Name" secondaryText={lastName}/>
                        <ListItem primaryText="Email" secondaryText={email}/>
                        <ListItem primaryText="Occupation" secondaryText={occupation}/>
                        <ListItem primaryText="Bio" secondaryText={bio}/>
                        <ListItem primaryText="Bio" secondaryText={city}/>
                    </List>


                    <RaisedButton 
                    label="Back"
                    primary={false}
                    style={styles.button}
                    onClick={this.back}
                    />
                    
                    <RaisedButton 
                    label="Confirm & Continue"
                    primary={true}
                    style={styles.button}
                    onClick={this.continue}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button:{
        margin:15
    }
}

export default ConfirmDetails;
