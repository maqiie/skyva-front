import React, { Component } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignUp: false,
      usernameOrEmail: "",
      password: "",
      confirmPassword: "",
      dataFromServer: null,
    };
  }

  // Toggle between login and signup
  handleSwitchClick = () => {
    this.setState((prevState) => ({
      isSignUp: !prevState.isSignUp,
    }));
  };

  // Handle input changes for controlled components
  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  // Make a login request
  loginRequest = async () => {
    try {
      const { usernameOrEmail, password } = this.state;
      const response = await axios.post(
        "http://localhost:3001/auth/sign_in",
        {
          email: usernameOrEmail,  // Update the key to "email"
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      // Update state with the server response
      this.setState({
        dataFromServer: response.data,
      });
  
      // Show success notification
      toast.success("Login successful!");
  
      console.log("Data from server:", response.data);
    } catch (error) {
      console.error("Error with login request:", error);
      // Show error notification
      toast.error("Login failed. Please check your credentials.");
    }
  };
  

  // Make a registration request
  registerRequest = async () => {
    try {
      const { usernameOrEmail, password, confirmPassword } = this.state;
      const response = await axios.post("http://localhost:3001/auth", {
        user: {
          name: usernameOrEmail,
          email: usernameOrEmail,
          password,
          password_confirmation: confirmPassword,
        },
      });

      // Update state with the server response
      this.setState({
        dataFromServer: response.data,
      });

      // Show success notification
      toast.success("User created successfully!");

      console.log("Data from server:", response.data);
    } catch (error) {
      console.error("Error with registration request:", error);
      // Show error notification
      toast.error("Registration failed. Please try again.");
    }
  };

  render() {
    const { isSignUp } = this.state;

    return (
      <div className="container1">
        <div className="card2">
          <a className="switch" onClick={this.handleSwitchClick}>
            Switch to {isSignUp ? "Login" : "Sign Up"}
          </a>
          <div className="inputBox1">
            <input
              type="text"
              required="required"
              name="usernameOrEmail"
              onChange={this.handleInputChange}
            />
            <span className="user">{isSignUp ? "Email" : "Username"}</span>
          </div>

          {isSignUp && (
            <div className="inputBox">
              <input
                type="text"
                required="required"
                name="name"
                onChange={this.handleInputChange}
              />
              <span>Name</span>
            </div>
          )}

          <div className="inputBox">
            <input
              type="password"
              required="required"
              name="password"
              onChange={this.handleInputChange}
            />
            <span>Password</span>
          </div>

          {isSignUp && (
            <div className="inputBox">
              <input
                type="password"
                required="required"
                name="confirmPassword"
                onChange={this.handleInputChange}
              />
              <span>Confirm Password</span>
            </div>
          )}

          <button
            className="enter"
            onClick={isSignUp ? this.registerRequest : this.loginRequest}
          >
            {isSignUp ? "Sign Up" : "Login"}
          </button>

          {/* Toast Container for displaying notifications */}
          <ToastContainer />
        </div>
      </div>
    );
  }
}

export default Login;
