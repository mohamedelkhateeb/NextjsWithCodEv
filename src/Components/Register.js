import React from "react";

const Register = ({handleRegister , registerData , handleRegisterChange}) => {
	return (
		<>
			{/* Register */}
			<h2>Register</h2>
			<form onSubmit={handleRegister}>
				{/* firstName */}
				<input
					type="text"
					name="firstName"
					placeholder="Enter Your First Name"
					value={registerData.name}
					onChange={handleRegisterChange}
				/>
				{/* lastName */}
				<input
					type="text"
					name="lastName"
					placeholder="Enter Your Last Name"
					value={registerData.name}
					onChange={handleRegisterChange}
				/>
				{/* userName */}
				<input
					type="text"
					name="userName"
					placeholder="Create a username"
					value={registerData.name}
					onChange={handleRegisterChange}
				/>
				{/* Email */}
				<input
					type="email"
					name="email"
					placeholder="Email"
					value={registerData.email}
					onChange={handleRegisterChange}
				/>
				{/* Password */}
				<input
					type="password"
					name="password"
					placeholder="Password"
					value={registerData.password}
					onChange={handleRegisterChange}
				/>
				<button type="submit">Register</button>
			</form>
		</>
	);
};

export default Register;
