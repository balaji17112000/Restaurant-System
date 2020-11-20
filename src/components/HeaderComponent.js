import React, { Component } from 'react';
import fire from 'C:/Users/aravi/OneDrive/Desktop/coursera assignments/bootstrap/React/confusion/src/config/firebase';
import Login from './Login';
import Main from './Maincomponent';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen: false

		};
		this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
		this.handleLogin = this.handleLogin.bind(this);
      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }
	  toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
      }
	  handleLogin(event) {
        this.toggleModal();
        alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
        event.preventDefault();

    }
    componentDidMount( ) {
        this. authListener()
        }
    authListener = ( )=>{
    let self =this;
    fire . auth().onAuthStateChanged(function(user){
    console.log( 'this ', self)
    console.log("welcome balaji",user.UID)
    if (user) {
    console.log(" user" , user)
    self. setState( {user})
    } else {
    // No user is signed in.
    self. setState( {user:null})
    console.log("notsigned in")
    }
    })
    }

    render() {
        return(
            <div>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/"><img src='Restaurant-System/public/assets/images/logo.png' height="30" width="41" alt='Balaji Restaurent' /></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span> About Us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/menu'><span className="fa fa-list fa-lg"></span> Menu</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/contactus'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                            </NavItem>
                            </Nav>
							 <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Button outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span>  LogIn/LogOut</Button>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                        
                            <div className="col-12 col-sm-6 ">
                                <p>&nbsp;</p> 
                                <p>&nbsp;</p> 
                                <h1><i>பாலாஜி உணவகம்</i></h1>
                               <cite title="Source Title" class='align-self-center'><p>உணவு அதானே எல்லாம்!!!!</p></cite></div>
                        
                        <div className="col-12 col-sm-1">
                        </div>
                        <div className="col-12 col-sm">
                         <img src='assets/images/logo2.jpg' height="200" width="250" className="hiding"></img>
                         <cite title="Source Title"><p> கார சாரமான சாப்பாடுக்கு தயாரா</p></cite>
                        </div>
                    </div>
                    </div>
                </Jumbotron>
				<Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
            						<Form onSubmit={this.handleLogin}>
                        <mdbcontainer style={{'textAlign':"-webkit-center"}}>
                        {this.props.user?(<Main />) : (<Login />)}
                        </mdbcontainer>
                        </Form>

                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default Header;
