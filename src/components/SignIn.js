import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { UserAuth } from "../context/AuthContext";
import axios from "axios";
import { toast } from "react-toastify";
import TextField from "@mui/material/TextField";
import {
  getAuth,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signInWithEmailAndPassword,
  FacebookAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'; // Import the CSS styles


const Signin = () => {
  const { googleSignIn, githubSignIn } = UserAuth();
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [user, setUser] = useState(null);
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handlePhoneNumberChange = (newPhoneNumber) => {
    // Update the state or perform any necessary actions
    setPhoneNumber(newPhoneNumber);
  };
  
  const handleGoogleSignIn = async (e) => {
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    try {
      const data = await signInWithPopup(auth, googleProvider);
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
      setUser(data.user.email);
      console.log(data.user);

      navigate("/Dashboard");
    } catch (error) {
      console.log("Google Sign-In Error:", error);
    }
  };
  console.log(user);

  useEffect(() => {}, [user]);
  console.log(user);
  const handleEmailPasswordLogin = async (e) => {
    e.preventDefault();

    const auth = getAuth();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      // User is logged in successfully
      navigate("/Dashboard");
    } catch (error) {
      setError(error.message);
    }
  };

  

  console.log(user);

  const handleFacebookSignIn = async (e) => {
    const auth = getAuth();
    const facebookProvider = new FacebookAuthProvider();
    try {
      const data = await signInWithPopup(auth, facebookProvider);
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
      setUser(data.user.email);
      console.log(data.user);

      navigate("/Dashboard");
    } catch (error) {
      console.log("Google Sign-In Error:", error);
    }
  };
  console.log(user);

  useEffect(() => {}, [user]);
  console.log(user);
  const handleGithubSignIn = async (e) => {
    const auth = getAuth();
    const githubProvider = new GithubAuthProvider();
    try {
      const data = await signInWithPopup(auth, githubProvider);
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
      setUser(data.user.email);
      console.log(data.user);

      navigate("/Dashboard");
    } catch (error) {
      console.log("Google Sign-In Error:", error);
    }
  };
  console.log(user);
  console.log(user);
  // const handleSignin = async (e) => {
  //   e.preventDefault();

  //   let data = {
  //     email: e.target.email.value,
  //     password: e.target.password.value,
  //   };
  //   console.log(data);
  //   try {
  //     let res = await axios.post(
  //       `${process.env.REACT_APP_API_URL}/user/signIn`,
  //       data
  //     );
  //     if (res.status === 200) {
  //       toast.success(res.data.message);
  //       sessionStorage.setItem("token", res.data.token);
  //       navigate("/Dashboard");
  //     }
  //   } catch (error) {
  //     toast.error(error.response.data.error || error.response.data.message);
  //   }
  // };

  return (
    <div
      style={{
        backgroundImage:
          "url('https://img.freepik.com/premium-photo/dark-background-with-red-leaves-circle-red-leaves_421632-16209.jpg')",
        backgroundSize: "cover",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "24px",
          fontWeight: "bold",
          padding: "20px",
          color: "pink",
        }}
      >
        SIGN IN
      </h1>
      <div style={{ maxWidth: "440px", margin: "auto", padding: "20px",color:'white' }}>
      <form onSubmit={handleEmailPasswordLogin}>
  <TextField
    label="Email address"
    type="email"
    placeholder="Enter email"
    variant="standard"
    margin="normal"
    fullWidth
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    InputLabelProps={{
      style: {
        color: "white", 
      },
    }}
    InputProps={{
      style: {
        color: "white", 
      },
    }}
  />
  <TextField
    label="Password"
    type="password"
    placeholder="Password"
    variant="standard"
    margin="normal"
    fullWidth
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    InputLabelProps={{
      style: {
        color: "white", // Change the label text color
      },
    }}
    InputProps={{
      style: {
        color: "white", // Change the input text color
      },
    }}
  />

  <div style={{ textAlign: "center" }}>
    <Button
      variant="contained"
      color="primary"
      type="submit"
      fullWidth
      style={{
        marginTop: "18px",
        width: "30%",
        backgroundColor: "green",
        color: "white", // Change the button text color
      }}
    >
      Submit
    </Button>
  </div>
  &nbsp;
</form>

        <Button
          variant="contained"
          type="submit"
          onClick={handleGoogleSignIn}
          style={{
            marginTop: "16px",
            color: "white",
            width: "30%",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="20"
            fill="green"
            class="bi bi-google"
            viewBox="0 0 16 16"
          >
            <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
          </svg>
          Google
        </Button>
        <Button
          variant="contained"
          type="submit"
          onClick={handleGithubSignIn}
          style={{
            marginTop: "16px",
            color: "white",
            width: "30%",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="20"
            fill="green"
            class="bi bi-github"
            viewBox="0 0 16 16"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
          </svg>
          Github
        </Button>
        <Button
          variant="contained"
          type="submit"
          onClick={handleFacebookSignIn}
          style={{
            marginTop: "16px",
            color: "white",
            width: "35%",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="20"
            fill="green"
            class="bi bi-facebook"
            viewBox="0 0 16 16"
          >
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
          </svg>
          Facebook
        </Button>
      </div>
    </div>
  );
};

export default Signin;
