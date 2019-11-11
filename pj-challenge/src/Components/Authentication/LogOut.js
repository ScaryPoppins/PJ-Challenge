import React, {Component} from 'react';
import {connect} from 'react-redux'
import {getUser} from '../../redux/reducer'

import axios from 'axios';

class LogOut extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.handleLogOut = this.handleLogOut.bind(this);
    }

    handleLogOut() {
        this.props.getUser()
        axios.post('/auth/user').then(response => console.log(response));
    }



    render() {
        return (
                <button 
                className='navButton'
                onClick={this.handleLogOut}

                >Log Out</button>
        )
    }
}

const mapStateToProps = state =>{
    return{
        user: state.user
    }
}

export default connect(mapStateToProps, {getUser})(LogOut);