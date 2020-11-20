
import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle,Button, Modal, ModalHeader, ModalBody, Form } from 'reactstrap';
import DISHES from '../shared/dishes';
import LEADERS from '../shared/leaders';
import PROMOTIONS from '../shared/promotions';
import { baseUrl } from '../shared/baseURL';
import {  MDBInput } from 'mdbreact';
import fire from 'firebase' ;
import {db} from '../config/firebase';

class Home extends Component {
constructor(props) {
        super(props);
        this.state = {
            
            isModalOpen: false,
            isModalOpen1: false,
            
			cost: '',
			title: '',
			cost: '',
			desc: '',
			skills: '',
			author: ''


        }
        
        this.toggleModal = this.toggleModal.bind(this);
        this.toggleModal1 = this.toggleModal1.bind(this);


    }

    toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
    }
    toggleModal1() {
            this.setState({
              isModalOpen1: !this.state.isModalOpen1
			
            });
          }
title1 = (e) => {

  let title = e.target.value;

  this.setState({title});
}
author1 = (e) => {
  let author = e.target.value;

  this.setState({author});
}

cost1 = (e) => {
  let cost = e.target.value;

  this.setState({cost});
}

skills1 = (e) => {
  let skills = e.target.value;

  this.setState({skills});
}

desc1 = (e) => {
  let desc = e.target.value;

  this.setState({desc});
}
reservetable=() => {
	db.collection('Reserve_table')
	.add({
		Name:this.state.title,
		phn:this.state.author,
		No_of_tables:this.state.cost,
		S_NS:this.state.desc,
		Date_time:this.state.skills
	})
    }
 render() {
    return(
        <div className="container">
        
        <div className="col-12">
        <p>&nbsp;</p> 
        
        <cite title="Source Title" class='align-self-center 'className="move  ">தீபாவளி சலுகை 50% தள்ளுபடி/deepavali festival offer <cite class=" badge badge-danger blink"> 50% off</cite></cite></div>
        <div className="col-12">
        
         <p>&nbsp;</p> 
        <div className="row">
        <div class="col-12 col-sm-3"> 
                        
        <img class="d-block img-fluid"
                                src="assets/images/Chinese.webp"  height="2000" width="1000"></img></div>
                            <div class="col-12 col-sm-8  " >
                                <h2>Weekend Grand Buffet <span class="badge badge-danger blink">NEW</span></h2>
                                <p class="d-none d-sm-block">Featuring mouthwatering combinations with a choice of
                                    five different salads, six enticing appetizers, six main entrees and five choicest desserts.
                                    Free flowing bubbly and soft drinks. All for just $19.99 per person.
                                </p>
                            
                        </div>
                        </div>
            <Card class="col-6 col-sm-6 align-self-center">
         
                    <Button className="reserve" onClick={this.toggleModal}>Reserve Table</Button>
                
        </Card>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>

              <ModalHeader toggle={this.toggleModal} className= "bg-primary" >TABLE RESERVATION</ModalHeader>

              <ModalBody>
            <div className="grey-text" align="center">
            <span>Name</span>
            <MDBInput
              group
              validate
              error="wrong"
              success="right"
              onChange = {(e)=>this.title1(e)}
            />
			<span>Phone Number</span>
            <MDBInput
              group
              validate
              error="wrong"
              success="right"
              onChange = {(e)=>this.author1(e)}
            />

          <span>Number Of Tables</span>

            <MDBInput
              group            
              validate
              onChange = {(e)=>this.cost1(e)}
            />
			            

          <span>Smoking/Non-Smoking</span>

            <MDBInput
              group            
              validate
              onChange = {(e)=>this.desc1(e)}
            />
			<span>Time and Date</span>

            <MDBInput
              group            
              validate
              onChange = {(e)=>this.skills1(e)}
            />
			
          
			   
			   <Button  type="submit" color="primary" onClick={() => {this.toggleModal1();
			   this.reservetable()}}>
							<i> RESERVE</i>
						</Button><hr />
						<Modal isOpen={this.state.isModalOpen1} toggle={this.toggleModal1}>

				<ModalHeader toggle={this.toggleModal1} className="bg-success">SUCCESSFULL</ModalHeader>

				<ModalBody>
					<Form onSubmit>
					<div>

						<p><b>TABLE RESERVED</b></p>
					</div>
					</Form>
					</ModalBody>
					</Modal>	
                    
                </div>
                </ModalBody>
                    </Modal>
        </div>
        </div>

    );
    }
}

export default Home;
