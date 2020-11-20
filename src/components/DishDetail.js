import React, {Component}  from 'react';
import {Card, CardBody, CardImg, CardText, CardTitle, BreadcrumbItem, Breadcrumb, Button,
ModalHeader, ModalBody, Modal, Row, Label, Col} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';
import { baseUrl } from '../shared/baseURL';
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component{
    constructor(props){
        super(props);
        this.state={
            isModalOpen : false
        }

        this.toggleModal= this.toggleModal.bind(this);

    }
    toggleModal(){
        this.setState({
            isModalOpen : !this.state.isModalOpen
         });
    }

    handleSubmit(values){
        alert("values are " + JSON.stringify(values));
        console.log("values are "+ JSON.stringify(values));
        this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
    }
    render(){
        return (
            <div>
            <Button outline onClick={this.toggleModal}>
                <span className="fa fa-pencil fa-lg"></span> Submit Comment
            </Button>
           <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
           <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
           <ModalBody>
              <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                    <Row className="form-group">
                      <Label htmlFor="rating" md={2}>Rating</Label>
                      <Col md={{size : 12}}>
                          <Control.select model=".rating" id="rating" name="rating"
                            className="form-control" >
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Control.select>
                      </Col>
                    </Row>
                    <Row className="form-group">
                      <Label htmlFor="username" md={6}>Your Name</Label>
                      <Col md={12}>
                      <Control.text model=".username" id="username" name="username"
                           placeholder="Full Name"
                           className="form-control"
                           validators={{
                               required, minLength: minLength(3), maxLength: maxLength(15)
                           }} />
                           <Errors
                                className="text-danger"
                                model=".username"
                                show="touched"
                                messages={{
                                required: 'Required',
                                minLength: 'Must be greater than 2 characters',
                                maxLength: 'Must be 15 characters or less'
                                        }}
                            />
                        </Col>
                    </Row>
                    <Row className="form-group">
                      <Label htmlFor="comment" md={4}>comment</Label>
                      <Col md={12}>
                      <Control.textarea model=".comment" id="comment" name="comment"
                           placeholder="Type Comment here"  rows="6"
                           className="form-control"
                           validators={{
                               required
                           }} />
                           <Errors
                                className="text-danger"
                                model=".comment"
                                show="touched"
                                messages={{
                                required: 'Required',
                                        }}
                            />
                        </Col>
                    </Row>
                <Button type="submit" value="submit" color="primary">Submit</Button>
              </LocalForm>
          </ModalBody>
          </Modal>
          </div>
    );
    }
}



        function RenderComments({comments}) {
        const coments = comments.map(comment => {
            return (
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author},
                    &nbsp;
                    {new Intl.DateTimeFormat('pt-BR', {
                        day: '2-digit',
                        month: 'long',
                        year: 'numeric'

                    }).format(new Date(comment.date))}
                    </p>
                </li>
                
            )
        })
        return (
            <div className='col-12 col-md-5 m-1'>
                <h4> Comments </h4>
                <ul className='list-unstyled'>
                    {coments}
                </ul>

               < CommentForm/>
            </div>
        )
    }

    function RenderDish({dish}) {
        if (dish != null) {
            return (
                <div className='col-12 col-md-5 m-1'>
                    <Card>
                        <CardImg top src={baseUrl + dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            )
        }
        else             return (<div></div>)

    }

    const  DishDetail = (props) => {


        if (props.dish == null) {
            return (<div></div>)
        }
       return (
                <div className="container">
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                    <RenderComments comments={props.comments}
                        addComment={props.addComment}
                        dishId={props.dish.id}
                      />
                    </div>
                </div>
                </div>
            );
    }



export default DishDetail;
