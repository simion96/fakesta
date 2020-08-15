import React from "react";
import styled from "styled-components";
import logo from '../assets/logo.png';

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

const Login = () => {
	return (
		<Form>
			<img className="logo" src={logo} alt="logo" />
			<form>
				<input type="email" placeholder="user@pass.com" />
				<input type="password" placeholder="secretpassword" />
				<input type="submit" value="Log In" className="login-btn" />
			</form>

			<div>
				<p>
					Don't have an account? <span>Sign up</span>
				</p>
			</div>
		</Form>
	);
};

export default Login;
