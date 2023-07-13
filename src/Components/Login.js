import React from "react";

const Login = ({handleLogin, loginData , handleLoginChange}) => {
	return (
		<div>
			<h2>Login</h2>
			<form onSubmit={handleLogin}>
				<input
					type="email"
					name="email"
					placeholder="Email"
					value={loginData.email}
					onChange={handleLoginChange}
				/>
				<input
					type="password"
					name="password"
					placeholder="Password"
					value={loginData.password}
					onChange={handleLoginChange}
				/>
				<button type="submit">Login</button>
			</form>
		</div>
	);
};

export default Login;
