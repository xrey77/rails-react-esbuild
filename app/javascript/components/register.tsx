import React, {Component} from 'react'
import axios from 'axios';
import { Form } from 'react-bootstrap';

const api = axios.create({
    baseURL: "http://localhost:3000",
    headers: {'Accept': 'application/json',
              'Content-Type': 'application/json'}
})

class Register extends Component {

    state = {
        formControls: {
            lastnameInput: {value: ''},
            firstnameInput: {value: ''},
            emailaddInput: {value: ''},
            mobilenoInput: {value: ''},
            usernameInput: {value: ''},
            passwordInput: {value: ''}
        },
    }

    handleRegistrationChange = event => {
        const name = event.target.name;
        const value = event.target.value;      
        this.setState({
          formControls: {
              ...this.state.formControls,
              [name]: {
              ...this.state.formControls[name],
              value
            }
          }
        });
      }

    clickSubmitRegistration = (e) => {
          e.preventDefault();                
          const data =JSON.stringify({
            lastname: this.state.formControls.lastnameInput,
            firstname: this.state.formControls.firstnameInput,
            emailadd: this.state.formControls.emailaddInput,
            mobileno: this.state.formControls.mobilenoInput, 
            username: this.state.formControls.usernameInput, 
            passwd: this.state.formControls.passwordInput });
          api.post("/signup", data)
             .then((res) => {    
                console.log(res.data);
  
               }, (error) => {
                 console.log(error.message);
              return;
          });
      };



    render() {
        return (
            <div className="modal fade" id="RegisterstaticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="RegisterstaticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="RegisterstaticBackdropLabel">USER REGISTRATION</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                <Form onSubmit={this.clickSubmitRegistration} autoComplete="off">      
                     <div className="row">
                        <div className="col">
                        <div className="mb-3">
                            <label htmlFor="lastnameInput" className="form-label">Last Name</label>
                            <Form.Control
                                    type="text"
                                    name="lastnameInput"
                                    value={this.state.formControls.lastnameInput.value}
                                    onChange={this.handleRegistrationChange}
                                    autoComplete="off"
                                    className="form-control" required/>       

                        </div>           
                        </div>
                        <div className="col">             
                        <div className="mb-3">
                            <label htmlFor="firstnameInput" className="form-label">First Name</label>
                            <Form.Control
                                    type="text"
                                    name="firstnameInput"
                                    value={this.state.formControls.firstnameInput.value}
                                    onChange={this.handleRegistrationChange}
                                    autoComplete="off"
                                    className="form-control" required/>                                   
                        </div>           
                        </div>             
                      </div>

                      <div className="row">
                        <div className="col">
                        <div className="mb-3">
                            <label htmlFor="emailadd" className="form-label">Email Address</label>
                            <Form.Control
                                    type="email"
                                    name="emailaddInput"
                                    value={this.state.formControls.emailaddInput.value}
                                    onChange={this.handleRegistrationChange}
                                    autoComplete="off"
                                    className="form-control" required/>       


                        </div>           
                        </div>
                        <div className="col">             
                        <div className="mb-3">
                            <label htmlFor="mobileno" className="form-label">Mobile No.</label>
                            <Form.Control
                                    type="text"
                                    name="mobilenoInput"
                                    value={this.state.formControls.mobilenoInput.value}
                                    onChange={this.handleRegistrationChange}
                                    autoComplete="off"
                                    className="form-control" required/>                                   
                        </div>           
                        </div>             
                        </div>

                        <div className="row">
                            <div className="col">
                        <div className="mb-3">
                            <label htmlFor="usernameInput" className="form-label">Username</label>
                            <Form.Control
                                    type="text"
                                    name="usernameInput"
                                    value={this.state.formControls.usernameInput.value}
                                    onChange={this.handleRegistrationChange}
                                    autoComplete="off"
                                    className="form-control" required/>       
                        </div>               
                        </div>
                        <div className="col">         
                        <div className="mb-3">
                            <label htmlFor="passwordInput" className="form-label">Password</label>
                            <Form.Control
                                    type="password"
                                    name="passwordInput"
                                    value={this.state.formControls.passwordInput.value}
                                    onChange={this.handleRegistrationChange}
                                    autoComplete="off"
                                    className="form-control" required/>       

                        </div>           
                        </div>
                        </div>             
                        <button type="submit" className="btn btn-primary">register</button>
                </Form>
                </div>
                <div className="modal-footer">
                    <div className="w-100 text-left text-danger fsize-10"></div>
                </div>
                </div>
            </div>
            </div>
        );
    }
}

export default Register;
