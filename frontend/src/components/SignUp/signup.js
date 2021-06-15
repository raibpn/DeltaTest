import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


const SignUp = ({ click }) => {
 
  return (
   <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" name="firstName" className="form-control" placeholder="First name"  />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" name="lastName" className="form-control" placeholder="Last name"  />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" name="emailId" className="form-control" placeholder="Enter email"  />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" className="form-control" placeholder="Enter password" />
                </div>

                <input type="submit" value="Submit" />
                <p className="forgot-password text-right">
                    Already registered <a href="/sign-in">sign in?</a>
                </p>
            </form>
  );
};

export default SignUp;