import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import {
  FacebookLoginButton,
  GoogleLoginButton
} from "react-social-login-buttons";
import { GoogleLogin } from "react-google-login";
import { FacebookProvider, LoginButton } from "react-facebook";

export default class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      url: ""
    };
  }

  responseGoogle = (response) => {
    console.log(response);
    this.setState({
      name: response.profileObj.name,
      email: response.profileObj.email,
      imageUrl: response.profileObj.imageUrl
    });
  };
  responseFacebook = (response) => {
    console.log(response);
  };
  responseErrorFacebook = (error) => {
    console.log(error);
  };

  render() {
    return (
      <div>
        <Form className="login-form">
          <h2 className="text-center">Welcome to React Calendar App {this.state.name}</h2>
          <h3>{this.state.email}</h3>
          <img src={this.state.imageUrl} alt={this.state.name} />
          <FormGroup>
            <Label>Email</Label>
            <Input type="email" placeholder="Email" />
          </FormGroup>
          <FormGroup>
            <Label>Password</Label>
            <Input type="password" placeholder="Password" />
          </FormGroup>
          <Button className="btn-lg btn-block"><a href="https://scheduler-sooty.vercel.app/">Log in</a></Button>
          <div className="text-center pt-3">Or</div>
          <FacebookLoginButton className="mt-3 mb-3" />
          <GoogleLoginButton buttonText="Login" className="mt-3 mb-3" />

          <div className="text-center">
            <a href="/sign-up">Sign up</a>
          </div>
        </Form>
      </div>
    );
  }
}
