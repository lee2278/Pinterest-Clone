import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import { signUp } from "../../store/session";
import "./SignupForm.css";

function SignupFormModal() {
	const dispatch = useDispatch();
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [errors, setErrors] = useState({});
	const { closeModal } = useModal();



	const handleSubmit = async (e) => {
		e.preventDefault();
		// if (password === confirmPassword) {
		// 	const data = await dispatch(signUp(username, email, password));
		// 	if (data) {
		// 		setErrors(data);
		// 	} else {
		// 		closeModal();
		// 	}
		// } else {
		// 	setErrors([
		// 		"Confirm Password field must be the same as the Password field",
		// 	]);
		// }
		setErrors({})

		const newErrors = {}

		if (username.length > 30) newErrors.username = 'Username must be less than 30 characters'
		if (username.length < 4) newErrors.username = 'Username must be greater than 4 characters'
		if (password.length < 6) newErrors.password = 'Password must be 6 characters or more'
		if (password !== confirmPassword) newErrors.password = 'Confirm Password field must be the same as the Password field'
		if (email.length > 50) newErrors.email = 'Email address length is too long. Please provide a valid email address under 50 characters'


		if (Object.values(newErrors).length) {
			setErrors(newErrors)
			return 
		} else {
			await dispatch(signUp(username, email, password))
			closeModal()
		}

	};

	return (
		<>
			<h1 id='signup-h1'>Sign Up</h1>
			<form id='signup-modal-form' onSubmit={handleSubmit}>
				{/* <ul>
					{errors.map((error, idx) => (
						<li className='sign-up-errors' key={idx}>{error}</li>
					))} 
				</ul> */}

				{errors.username && <p className='sign-up-errors'>{errors.username}</p>}
				{errors.email && <p className='sign-up-errors'>{errors.email}</p>}
				{errors.password && <p className='sign-up-errors'>{errors.password}</p>}
				<label>
					Email
					<input className='signup-inputs'
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</label>
				<label>
					Username
					<input className='signup-inputs'
						type="text"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						required
					/>
				</label>
				<label>
					Password
					<input className='signup-inputs'
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</label>
				<label>
					Confirm Password
					<input className='signup-inputs'
						type="password"
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
						required
					/>
				</label>
				<button type="submit">Sign Up</button>
			</form>
		</>
	);
}

export default SignupFormModal;
