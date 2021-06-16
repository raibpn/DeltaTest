import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import { createUser } from "../../redux/actions/userActions";
import { withRouter } from "react-router-dom";
import { Card } from "react-bootstrap";


// User page state Mock Checkup
class CreateUser extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      email: "",
      password: "",
    
    };
  }
  componentDidMount() {
    this._isMounted = true;
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  handleChange = (event) => {
    event.preventDefault();
    let name = event.target.name;
    let val = event.target.value;
    this.setState({ [name]: val });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const postData = {
      name: this.state.name,
      address: this.state.address,
      email: this.state.email,
      password: this.state.password,
    };
    this.props.createUser(postData).then(() => {
      alert("User has been Successfully Created");
    });
  };

  render() {
    return (
      <>
        <Card>
          <Card.Header as="h5">Create User</Card.Header>
          <Card.Body>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  name="name"
                  type="text"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Address</Form.Label>
                <Form.Control
                  name="address"
                  type="text"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>email</Form.Label>
                <Form.Control
                  name="email"
                  type="text"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>password</Form.Label>
                <Form.Control
                  name="password"
                  type="text"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
      name: state.name,
      address: state.address,
      email: state.email,
      password: state.password,
});
const mapDispatchToProps = (dispatch) => ({
  createUser: (data) => dispatch(createUser(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CreateUser));
