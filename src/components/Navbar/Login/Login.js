// import React, { Component } from "react";
// import axios from "axios";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useNavigate } from 'react-router-dom';
// import { withRouter } from 'react-router-dom';  // Import withRouter

// import "./Login.css";

// // class Login extends Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       isSignUp: false,
// //       usernameOrEmail: "",
// //       password: "",
// //       confirmPassword: "",
// //       dataFromServer: null,
// //     };
// //   }
// class Login extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isSignUp: false,
//       usernameOrEmail: "",
//       password: "",
//       confirmPassword: "",
//       dataFromServer: null,
//     };
//   }


//   // Toggle between login and signup
//   handleSwitchClick = () => {
//     this.setState((prevState) => ({
//       isSignUp: !prevState.isSignUp,
//     }));
//   };

//   // Handle input changes for controlled components
//   handleInputChange = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   };

//   // // Make a login request
//   // loginRequest = async () => {
//   //   try {
//   //     const { usernameOrEmail, password } = this.state;
//   //     const response = await axios.post(
//   //       "http://localhost:3001/auth/sign_in",
//   //       {
//   //         email: usernameOrEmail,  // Update the key to "email"
//   //         password,
//   //       },
//   //       {
//   //         headers: {
//   //           "Content-Type": "application/json",
//   //         },
//   //       }
//   //     );
  
//   //     // Update state with the server response
//   //     this.setState({
//   //       dataFromServer: response.data,
//   //     });
  
//   //     // Show success notification
//   //     toast.success("Login successful!");
  
//   //     console.log("Data from server:", response.data);
//   //   } catch (error) {
//   //     console.error("Error with login request:", error);
//   //     // Show error notification
//   //     toast.error("Login failed. Please check your credentials.");
//   //   }
//   // };
  
//   // loginRequest = async () => {
//   //   const { usernameOrEmail, password } = this.state;
//   //   const navigate = useNavigate();

  
//   //   try {
//   //     const response = await axios.post(
//   //       "http://localhost:3001/auth/sign_in",
//   //       {
//   //         email: usernameOrEmail,
//   //         password,
//   //       },
//   //       {
//   //         headers: {
//   //           "Content-Type": "application/json",
//   //         },
//   //       }
//   //     );
  
//   //     // Update state with the server response
//   //     this.setState({
//   //       dataFromServer: response.data,
//   //     });
  
//   //     // Show success notification
//   //     toast.success("Login successful!");
  
//   //     console.log("Data from server:", response.data);
  
//   //     // Check user role
//   //     const userRole = response.data.role;  // Assuming the role is present in the server response
  
//   //     if (userRole === 'admin') {
//   //       // Redirect to the admin window
//   //       navigate('/admin-dashboard');  // Replace '/admin-dashboard' with the actual path of your admin component

//   //     } else {
//   //       // Redirect to the home page
//   //       navigate('/home');  // Replace '/home' with the actual path of your home page
//   //     }
//   //   } catch (error) {
//   //     console.error("Error with login request:", error);
//   //     // Show error notification
//   //     toast.error("Login failed. Please check your credentials.");
//   //   }
//   // };
//   loginRequest = async () => {
//     const { usernameOrEmail, password } = this.state;
//     const { navigate } = this.props;  // Destructure navigate from this.props

//     try {
//       const response = await axios.post(
//         "http://localhost:3001/auth/sign_in",
//         {
//           email: usernameOrEmail,
//           password,
//         },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       // Update state with the server response
//       this.setState({
//         dataFromServer: response.data,
//       });

//       // Show success notification
//       toast.success("Login successful!");

//       console.log("Data from server:", response.data);

//       // Check user role
//       const userRole = response.data.role;

//       if (userRole === 'admin') {
//         // Redirect to the admin window
//         navigate('/admin');
//       } else {
//         // Redirect to the home page
//         navigate
//         ('/home');
//       }
//     } catch (error) {
//       console.error("Error with login request:", error);
//       // Show error notification
//       toast.error("Login failed. Please check your credentials.");
//     }
//   };

//   // Make a registration request
//   registerRequest = async () => {
//     try {
//       const { usernameOrEmail, password, confirmPassword } = this.state;
//       const response = await axios.post("http://localhost:3001/auth", {
//         user: {
//           name: usernameOrEmail,
//           email: usernameOrEmail,
//           password,
//           password_confirmation: confirmPassword,
//         },
//       });

//       // Update state with the server response
//       this.setState({
//         dataFromServer: response.data,
//       });

//       // Show success notification
//       toast.success("User created successfully!");

//       console.log("Data from server:", response.data);
//     } catch (error) {
//       console.error("Error with registration request:", error);
//       // Show error notification
//       toast.error("Registration failed. Please try again.");
//     }
//   };

//   render() {
//     const { isSignUp } = this.state;

//     return (
//       <div className="container1">
//         <div className="card2">
//           <a className="switch" onClick={this.handleSwitchClick}>
//             Switch to {isSignUp ? "Login" : "Sign Up"}
//           </a>
//           <div className="inputBox1">
//             <input
//               type="text"
//               required="required"
//               name="usernameOrEmail"
//               onChange={this.handleInputChange}
//             />
//             <span className="user">{isSignUp ? "Email" : "Username"}</span>
//           </div>

//           {isSignUp && (
//             <div className="inputBox">
//               <input
//                 type="text"
//                 required="required"
//                 name="name"
//                 onChange={this.handleInputChange}
//               />
//               <span>Name</span>
//             </div>
//           )}

//           <div className="inputBox">
//             <input
//               type="password"
//               required="required"
//               name="password"
//               onChange={this.handleInputChange}
//             />
//             <span>Password</span>
//           </div>

//           {isSignUp && (
//             <div className="inputBox">
//               <input
//                 type="password"
//                 required="required"
//                 name="confirmPassword"
//                 onChange={this.handleInputChange}
//               />
//               <span>Confirm Password</span>
//             </div>
//           )}

//           <button
//             className="enter"
//             onClick={isSignUp ? this.registerRequest : this.loginRequest}
//           >
//             {isSignUp ? "Sign Up" : "Login"}
//           </button>

//           {/* Toast Container for displaying notifications */}
//           <ToastContainer />
//         </div>
//       </div>
//     );
//   }
// }

// export default Login;


// Auth.js
// Login.js
import React, { useState } from "react";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isForgotPassword, setIsForgotPassword] = useState(false);

  const handleToggle = () => {
    setIsLogin((prev) => !prev);
    setIsForgotPassword(false);
  };

  const handleForgotPassword = () => {
    setIsForgotPassword(true);
    setIsLogin(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your authentication logic here
    console.log("Form submitted!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white shadow-lg rounded-md">
        <h2 className="text-3xl font-extrabold text-center text-gray-800">
          {isLogin
            ? "Log in to your account"
            : isForgotPassword
            ? "Forgot Password"
            : "Create a new account"}
        </h2>
        {isForgotPassword ? (
          <div>
            <p className="text-sm text-gray-600 mb-4">
              Enter your email address, and we'll send you a link to reset your password.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  required
                  className="mt-1 p-2 w-full sm:w-96 border rounded-md"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
              >
                Send Reset Link
              </button>
            </form>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                required
                className="mt-1 p-2 w-full sm:w-96 border rounded-md"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                autoComplete="current-password"
                required
                className="mt-1 p-2 w-full sm:w-96 border rounded-md"
              />
            </div>
            {!isLogin && (
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="name"
                  required
                  className="mt-1 p-2 w-full sm:w-96 border rounded-md"
                />
              </div>
            )}
            {!isLogin && (
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-600">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  autoComplete="confirm-password"
                  required
                  className="mt-1 p-2 w-full sm:w-96 border rounded-md"
                />
              </div>
            )}
            {/* Additional form fields can be added based on your requirements */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
            >
              {isLogin ? "Log In" : "Sign Up"}
            </button>
          </form>
        )}

        <p className="text-center text-sm text-gray-600 mt-4">
          {isLogin && !isForgotPassword ? "Don't have an account?" : ""}
          {!isLogin && !isForgotPassword ? "Already have an account?" : ""}
          {isLogin && !isForgotPassword ? (
            <span className="text-blue-500 cursor-pointer hover:underline" onClick={handleToggle}>
              {" "}
              Sign up here.
            </span>
          ) : (
            ""
          )}
          {!isLogin && !isForgotPassword ? (
            <span className="text-blue-500 cursor-pointer hover:underline" onClick={handleToggle}>
              {" "}
              Log in here.
            </span>
          ) : (
            ""
          )}
          {!isForgotPassword ? (
            <span
              className="text-blue-500 cursor-pointer hover:underline ml-2"
              onClick={handleForgotPassword}
            >
              Forgot password?
            </span>
          ) : (
            ""
          )}
        </p>
      </div>
    </div>
  );
};

export default Login;
