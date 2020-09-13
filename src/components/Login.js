import React, { useContext } from 'react';
import styled from 'styled-components';
import logo from '../assets/logo.png';
import { login, me } from '../services/api';
import useInput from '../hooks/useInput';
import { UserContext } from '../context/UserContext';

export const Form = styled.div`
	background-color: #FFF;
	padding: 1rem;
	width: 350px;
	border: 1px solid #DBDBDB;
	margin: 6rem auto;
	text-align: center;
	padding: 2rem 0;
	img {
		margin-bottom: 1.5rem;
	}
	input {
		display: block;
		margin: 0 auto;
		margin-bottom: 1rem;
		padding: 0.6rem 1.2rem;
		background: #fafafa;
		border: 1px solid #dbdbdb;
		font-family: "Fira Sans", sans-serif;
		font-size: 1rem;
		border-radius: 4px;
		width: 85%;
	}
	input[type="submit"] {
		background-color: #0095f6;
		color: #fff;
		border: 1px solid #fff;
	}
	p {
		margin-top: 2rem;
	}
	span {
		color: #0095f6;
	}
`;

const Login = ({ signup }) => {

	const { setUser } = useContext(UserContext);
	const email = useInput("");
	const password = useInput("");

	const handleLogin = async e => {
		e.preventDefault();

		const body = { email: email.value, password: password.value };
		console.log(body);
		const tokenResponse = await login({ url: "auth/login", body });

		const userResponse = await me({
			url: "/auth/me",
			token: tokenResponse.data.token
		});

		userResponse.data.data.token = tokenResponse.data.token

		localStorage.setItem('user', JSON.stringify(userResponse.data.data))
		setUser(userResponse.data.data)

		email.setValue("");
		password.setValue("");
	};

	return (
		<Form onSubmit={handleLogin}>
			<img className="logo" src={logo} alt="logo" />
			<form>
			<input type="email" placeholder="user@pass.com" value={email.value} onChange={email.onChange} />
			<input type="password" placeholder="verysecretpassword" value={password.value} onChange={password.onChange} />
			<input type="submit" value="Log In" className="login-btn" />
			</form>

			<div>
			<p>
				<span onClick={signup}>Sign up</span>
			</p>
			</div>
		</Form>
	);
};

export default Login;
