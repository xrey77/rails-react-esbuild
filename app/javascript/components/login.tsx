import React, {Component} from 'react'
import axios from 'axios';
import { Form } from 'react-bootstrap';

const api = axios.create({
    baseURL: "http://localhost:3000",
    headers: {'Accept': 'application/json',
              'Content-Type': 'application/json'}
})

class Login extends Component {

    state = {
        formControls: {
            usernameInput: {value: ''},
            passwordInput: {value: ''}
        },
    }

    handleLoginChange = event => {
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

    clickSubmitLogin = (e) => {
          e.preventDefault();                
          const data =JSON.stringify({ username: this.state.formControls.usernameInput, password: this.state.formControls.passwordInput });   
          api.post("/signin", data)
             .then((res) => {    
                console.log(res.data);
  
               }, (error) => {
                 console.log(error.message);
              return;
          });
      };
  


    render() {
        return (
            <div className="modal fade" id="LoginstaticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="LoginstaticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-sm modal-dialog-centered">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="LoginstaticBackdropLabel">USER LOGIN</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                <Form onSubmit={this.clickSubmitLogin} autoComplete="off">      

                        <div className="mb-3">
                            <label htmlFor="usernameInput" className="form-label">Username</label>
                            <Form.Control
                                    type="text"
                                    name="usernameInput"
                                    value={this.state.formControls.usernameInput.value}
                                    onChange={this.handleLoginChange}
                                    autoComplete="off"
                                    className="form-control" required/>       

                        </div>


                        <div className="mb-3">
                            <label htmlFor="usernameInput" className="form-label">Password</label>
                            <Form.Control
                                    type="password"
                                    name="passwordInput"
                                    value={this.state.formControls.passwordInput.value}
                                    onChange={this.handleLoginChange}
                                    autoComplete="off"
                                    className="form-control" required/>       

                        </div>                        
                        <button type="submit" className="btn btn-primary">login</button>

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

export default Login;
