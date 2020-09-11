import React from "react";
import styled from "styled-components";
import Button from "../styles/Button";
import { ProfileFormWrapper } from "./ProfileSettings";

const buttonStyle = {
	marginLeft: '10rem'
}

const labelStyle = {
	width: '200px'
}


const ChangePassword = () => {
	return (
		<ProfileFormWrapper>
			<form>
				<div className="input-group">
					<label style={labelStyle} className="bold">Old Password</label>
					<input type="password" />
				</div>
				<div className="input-group">
					<label style={labelStyle} className="bold">New Password</label>
					<input type="password" />
				</div>
				<div className="input-group">
					<label style={labelStyle} className="bold">Confirm New Password</label>
					<input type="password" />
				</div>
				<Button style={buttonStyle}>Submit</Button>
			</form>
		</ProfileFormWrapper>
	);
};

export default ChangePassword;
