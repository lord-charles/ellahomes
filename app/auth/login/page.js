"use client";

import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Cookies from "js-cookie";

// ** Next Imports

import { useRouter } from "next/navigation";

// ** MUI Components
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CardContent from "@mui/material/CardContent";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import { styled, useTheme } from "@mui/material/styles";
import MuiCard from "@mui/material/Card";
import InputAdornment from "@mui/material/InputAdornment";
import MuiFormControlLabel from "@mui/material/FormControlLabel";
import EyeOutline from "mdi-material-ui/EyeOutline";
import EyeOffOutline from "mdi-material-ui/EyeOffOutline";
import Link from "next/link";
import { base_url } from "@/utils/baseUrl";

// ** Styled Components
const Card = styled(MuiCard)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: { width: "28rem" },
}));

const FormControlLabel = styled(MuiFormControlLabel)(({ theme }) => ({
  "& .MuiFormControlLabel-label": {
    fontSize: "0.875rem",
    color: theme.palette.text.secondary,
  },
}));

const LinkStyled = styled("a")(({ theme }) => ({
  fontSize: "0.875rem",
  textDecoration: "none",
  color: theme.palette.primary.main,
}));

const LoginPage = () => {
  // ** State
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [disable, setDisable] = useState(false);
  const [loginError, setLoginError] = useState("");

  const user = {
    password: values.password,
    email,
  };

  // ** Hook

  const router = useRouter();
  const notify = (error) => toast.error(error);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);

    // Email validation using regular expression
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = regex.test(value);

    if (!isValid) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (email.length === 0 || values.password.length === 0) {
      return notify("Please fill all fields");
    }
    if (emailError.length > 0) {
      return notify(emailError);
    }

    const loginUser = async () => {
      try {
        setDisable(true);

        const myPromise = new Promise(async (resolve, reject) => {
          try {
            const response = await axios.post(`${base_url}user/login`, user);
            if (response.status === 200) {
              resolve();
              Cookies.set("token", response.data.token, { expires: 1 });
              setDisable(false);

              router.push("/");
            }
          } catch (error) {
            if (error?.response?.status) {
              setLoginError("wrong password!");
              reject();
            } else {
              reject();
              setLoginError("Network connection has failed!");
            }
            setDisable(false);
          }
        });
        toast.promise(myPromise, {
          pending: "Verifying the account...",
          success: "Verification complete. ",
          error: loginError,
        });
      } catch (error) {
        console.log(error);
      }
    };
    loginUser();
  };

  return (
    <Box className="flex justify-center">
      <Card sx={{ zIndex: 1 }}>
        <CardContent
          sx={{ padding: (theme) => `${theme.spacing(12, 9, 7)} !important` }}
        >
          <ToastContainer />
          <Box
            sx={{
              mb: 3,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                lineHeight: 1,
                fontWeight: 600,
                textTransform: "uppercase",
                fontSize: "1.5rem !important",
              }}
              className="text-center"
            >
              EllaHomes
            </Typography>
          </Box>
          <Box sx={{ mb: 4 }}>
            <h2 className="text-center font-serif">
              Please sign-in to your account
            </h2>
          </Box>
          <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <TextField
              fullWidth
              type="email"
              label="Email"
              sx={{ marginBottom: 4 }}
              value={email}
              onChange={handleEmailChange}
              error={Boolean(emailError)}
              helperText={emailError}
            />
            <FormControl fullWidth>
              <InputLabel htmlFor="auth-login-password">Password</InputLabel>
              <OutlinedInput
                label="Password"
                value={values.password}
                id="auth-login-password"
                onChange={handleChange("password")}
                type={values.showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      edge="end"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      aria-label="toggle password visibility"
                    >
                      {values.showPassword ? <EyeOutline /> : <EyeOffOutline />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <Box
              sx={{
                mb: 4,
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                justifyContent: "space-between",
              }}
            >
              <FormControlLabel control={<Checkbox />} label="Remember Me" />
              <Link passHref href="/">
                <LinkStyled onClick={(e) => e.preventDefault()}>
                  Forgot Password?
                </LinkStyled>
              </Link>
            </Box>
            <div>
              <Button
                fullWidth
                size="large"
                variant="contained"
                sx={{ marginBottom: 2 }}
                type="submit"
                disabled={disable ? true : false}
                color="success"
                className="text-white font-bold bg-green-500"
              >
                Login
              </Button>
              <div className="flex items-center space-x-1 justify-center">
                <hr className="h-0.5 bg-gray-500 w-[100px]" />
                <h2 className="text-gray-500">or</h2>
                <hr className="h-0.5 bg-gray-500 w-[100px]" />
              </div>
              <Link href="/auth/signup">
                <Button
                  fullWidth
                  size="large"
                  variant="contained"
                  sx={{ marginTop: 2 }}
                  type="submit"
                  disabled={disable ? true : false}
                  color="success"
                  className="text-white font-bold bg-blue-500"
                >
                  SignUp
                </Button>
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default LoginPage;
