import React, {Component} from 'react';
import Axios from 'axios'
import './Header.css';
import { Link } from "react-router-dom";
import LogOut from '../Authentication/LogOut'
import {connect} from 'react-redux'
import {getUser} from '../../redux/reducer'
import pumpJack from '../Images/PumpJack.JPG'
import hamburger2 from '../Images/Hamburger.JPG'

class Header extends Component {
  constructor() {
        super();
        this.state = {
                user: [],
                loggedIn: false,
                menuStatus: 'dropdown-menu-close'
                
        }
  }

  handleClick = () => {
        if(this.state.menuStatus === 'dropdown-menu-open'){
                this.setState({menuStatus: 'dropdown-menu-close'})
        }
        else {
                this.setState({menuStatus: 'dropdown-menu-open'})
        }
        }


  componentDidMount(){

        Axios.get('/auth/user')
                .then(response => {
                        this.props.getUser(response.data)
                })
                .catch(error => console.log(error, `in Header componentDidMount`))
  }



render(){          



console.log(this.props);
  return (
   <div>    

  <div className="navHeader-over700">
        
    <img
     id = 'snail-over700'
     alt = 'snail' 
     src={pumpJack}
     /> 

    <div className = 'button-container-over700'>  
    <Link to="/">
            <button className='navButton'>Home</button>
    </Link>

    <Link to="/products">
            <button className='navButton'>Products</button>
    </Link>
        
    { this.props.user && this.props.user.email   
     ?    
       <LogOut/>
     :
       <Link to="/login">
         <button className='navButton'>Log In</button>
       </Link>
    }

    <Link to="/orders">
            <button className='navButton'>Orders</button>
    </Link>

    <Link to="/cart">
            <button className='navButton'>Cart</button>
    </Link>

 
    </div>   




    </div>  
{/* ---------OVER 700 MENU--------- */}
 {/* ---------------------------------------------- */}
{/* ---------UNDER 700 MENU--------- */}

<div className="navHeader-under700">
        <button 
            onClick = {this.handleClick}
            className = 'menu-button'>

            <img id='hamburger-menu' alt='menu'
                src={hamburger2}></img>
        </button>

    <div className={this.state.menuStatus} >
    <Link to="/">
            <button className='navButton' id= 'under700-text'>Home</button>
    </Link>

    <Link to="/Products">
            <button className='navButton' id= 'under700-text'>Products</button>
    </Link>
 
    { this.props.user && this.props.user.email   
     ?    
       <LogOut  id= 'under700-text'/>
     :
       <Link to="/login">
         <button className='navButton' id= 'under700-text'>Log In</button>
       </Link>
    }

        <Link to="/orders">
            <button className='navButton'>Orders</button>
        </Link>

        <Link to="/cart">
            <button className='navButton'  id= 'under700-text'>Cart</button>
        </Link>
        </div>

    <div>
        <img id = 'snail-under700' 
        alt = 'snail' 
        src={pumpJack}
        /> 
    </div>

</div>
</div>   
  );
}
}
const mapStateToProps = state =>{
        // console.log(state);
        return{
            user: state.user
        }
    }
    
    export default connect(mapStateToProps, {getUser})(Header);

