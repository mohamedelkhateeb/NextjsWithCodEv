import React, { useState } from "react";
import axios from "axios";
import Login from "./Components/Login";
import Register from "./Components/Register";

const API_URL_REGISTER = "http://192.99.33.197:5216/api/Auth/register";
const API_URL_LOGIN = "http://192.99.33.197:5216/api/Auth/token";

function App() {
  const [loginData, setLoginData] = useState({
		email: "",
		password: "",
	});

	const [registerData, setRegisterData] = useState({
		firstName: "",
		lastName: "",
		userName: "",
		email: "",
		password: "",
	});

	const handleLoginChange = (e) => {
		setLoginData({ ...loginData, [e.target.name]: e.target.value });
	};

	const handleRegisterChange = (e) => {
		setRegisterData({ ...registerData, [e.target.name]: e.target.value });
	};

	const handleLogin = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post(`${API_URL_LOGIN}`, loginData);
			console.log(response);
			console.log(response.data.isSuccess ? "Login Successed": "Login Failed")
		} catch (error) {
			console.error("Login Failed");
		}
	};

	const handleRegister = async (e) => {
		e.preventDefault();
		try {
			await axios
				.post(`${API_URL_REGISTER}`, registerData)
				.then((res) => console.log(res.data));
			console.log("Registration Successful");
		} catch (error) {
			console.error("Registration Failed");
		}
	};

	return (
		<>
			<Login
				handleLogin={handleLogin}
				loginData={loginData}
				handleLoginChange={handleLoginChange}
			/>
			<Register
				handleRegister={handleRegister}
				registerData={registerData}
				handleRegisterChange={handleRegisterChange}
			/>
		</>
	);
}

export default App;
