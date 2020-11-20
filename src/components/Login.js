

import firebase from 'C:/Users/aravi/OneDrive/Desktop/coursera assignments/bootstrap/React/confusion/src/config/firebase';


import React , {Component} from "react";
import Header from './HeaderComponent';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn,MDBCard } from 'mdbreact';
import{Button } from 'reactstrap';


class Login extends Component {
  constructor(props) {
      super(props);
      this.state = {
          isLoggedIn: false

      }

      this.componentDidMount = this.componentDidMount.bind(this);
  }
state = {

    email: '',

    password : ''

  }
  componentDidMount() {
  firebase.auth().onAuthStateChanged(user => {
    if (user) { this.setState({ isLoggedIn:true})

    console.log("this is user detail",user)
   }
    else { this.setState({ isLoggedIn:false })

}
  })
}

login = (e) => {

  firebase.auth().signInWithEmailAndPassword(this.state.email , this.state.password).then((res) => {

      console.log("user at firebase",res)
      console.log("welcome you are logged in",res)


  }).catch((e)=>{

      console.log("error",e)
      console.log("please check your mailID or password")

  })
}

logout = () => {
    console.log("LOGGED OUT SUCCESSFULLY")
  firebase.auth().signOut()
  }


passwordOn = (e) => {

  let password = e.target.value;

  this.setState({password});
}
emailOn = (e) => {

  let email = e.target.value;

  this.setState({email});
}
submitOn = (e , emailOn) => {

  this.login(e , this.state.isLoggedIn);

  if( this.state.email==="balaji@gmail.com"&& this.state.password==="balaji"||this.state.email==="bala@gmail.com"&& this.state.password==="balaji" ){
  alert("welcome "  +  this.state.password);
}

else if(this.state.email==="rishi@gmail.com"&&this.state.password==="rishikesh"){
  alert("welcome "  + this.state.password);

}

else{
alert(   this.state.email +" is not found or password is incorrect");}
}
nameOn = (e) => {

  let name = e.target.value;

  this.setState({name});

}

confirmEmailOn = (e) => {

  let confirmEmail = e.target.value;

  this.setState({confirmEmail});

}

render(){

  return(

    <MDBContainer >

    <MDBRow style={{"textAlign":"center"}}>

    <MDBCard style = {{"width":"145%",'textAlign':"-webkit-center"}} className = "mt-5">

      <MDBCol md="4" className="col-md-offset-4">

        <form>

        <p className="h5 text-center mb-4" onClick = {()=>this.setState({toggle:!this.state.toggle})}>{this.state.toggle ? <span>LogIn to Your Application</span> : <span>LogIn</span> }</p>
          <span>Type your email</span>

​

          <div className="grey-text">

            <MDBInput

              icon="envelope"

              group

              type="email"

              validate

              error="wrong"

              success="right"

              onChange = {(e)=>this.emailOn(e)}

            />

          <span>Type your password</span>

            <MDBInput

              icon="lock"

              group

              type="password"

              validate

              onChange = {(e)=>this.passwordOn(e)}
            />
          </div>
          <div className="text-center">
           <MDBBtn colour= "primary" onClick = {(e)=>this.submitOn(e)}><Button  color="primary"><span>LogIn</span> </Button></MDBBtn>
           <MDBBtn colour= "dark" onClick = {this.logout}><Button  color="primary"><span>LogOut</span> </Button></MDBBtn>

          </div>

        </form>

      </MDBCol>
  </MDBCard>
    </MDBRow>

  </MDBContainer>
  )
 }
}

export default Login;
