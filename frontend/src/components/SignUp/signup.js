import React, { Component } from "react";
import { createUser } from "../../actions/users";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { useSelector, useDispatch} from 'react-redux';


class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: false,
            firstName: '',
            lastName: '',
            emailId: '',
            password: ''
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    onSubmit = (e) => {
        e.preventDefault();

        const newUser = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            emailId: this.state.emailId,
            password: this.state.password
        }

        //add item via add item action
          createUser(newUser);
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" name="firstName" className="form-control" placeholder="First name" onChange={this.onChange} />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" name="lastName" className="form-control" placeholder="Last name" onChange={this.onChange} />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" name="emailId" className="form-control" placeholder="Enter email" onChange={this.onChange} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" className="form-control" placeholder="Enter password" onChange={this.onChange} />
                </div>

                <input type="submit" value="Submit" />
                <p className="forgot-password text-right">
                    Already registered <a href="/sign-in">sign in?</a>
                </p>
            </form>
        );
    }
}

export default withRouter(connect(null, {createUser})(SignUp));








// const SignUp = ({ click }) => {
   
 
//   return (
//    <form>
//                 <h3>Sign Up</h3>

//                 <div className="form-group">
//                     <label>First name</label>
//                     <input type="text" name="firstName" className="form-control" placeholder="First name"  />
//                 </div>

//                 <div className="form-group">
//                     <label>Last name</label>
//                     <input type="text" name="lastName" className="form-control" placeholder="Last name"  />
//                 </div>

//                 <div className="form-group">
//                     <label>Email address</label>
//                     <input type="email" name="emailId" className="form-control" placeholder="Enter email"  />
//                 </div>

//                 <div className="form-group">
//                     <label>Password</label>
//                     <input type="password" name="password" className="form-control" placeholder="Enter password" />
//                 </div>

//                 <input type="submit" value="Submit" />
//                 <p className="forgot-password text-right">
//                     Already registered <a href="/sign-in">sign in?</a>
//                 </p>
//             </form>
//   );
// };

// export default SignUp;