import React from "react";
import styled from "styled-components";
import avatar from "../assets/avatar.png";
import Button from "../styles/Button";
import Avatar from "../styles/Avatar";

export const ProfileSettingsWrapper = styled.div`
	padding: 1rem;

	img {
		cursor: pointer;
		margin-right: 40px;
	}

	.input-group {
		margin-top: 1.5rem;
	}

	.input-group > label {
		display: inline-block;
		width: 100px;
	}

	input,
	textarea {
		padding: 0.4rem 1rem;
		font-family: "Fira Sans", sans-serif;
		font-size: 1rem;
		border-radius: 4px;
		border: 1px solid #dbdbdb;
		width: 350px;
	}

	.textarea-group {
		display: flex;
	}

	.change-avatar {
		display: flex;
	}

	input[id="change-avatar"] {
		display: none;
	}

	span {
		color: #0095f6;
		cursor: pointer;
	}

	button {
		margin-top: 1.5rem;
		margin-left: 6.25rem;
		margin-bottom: 1rem;
	}
`;

const ProfileSettings = () => {
	return (
		<ProfileSettingsWrapper>
			<form>
				<div className="input-group change-avatar">
					<div>
						<label htmlFor="change-avatar">
							<Avatar lg src={avatar} alt="avatar" />
						</label>
						<input id="change-avatar" type="file" />
					</div>
					<div class="change-avatar-meta">
						<h2>simionp</h2>
						<label htmlFor="change-avatar">
							<span>Change Profile Photo</span>
						</label>
						<input id="change-avatar" type="file" />
					</div>
				</div>

				<div className="input-group">
					<label className="bold" htmlFor="name">
						Name
					</label>
					<input type="text" value="Name" />
				</div>
				<div className="input-group">
					<label className="bold" htmlFor="username">
						Username
					</label>
					<input type="text" value="simionp" />
				</div>
				<div className="input-group">
					<label className="bold" htmlFor="website">
						Website
					</label>
					<input type="text" value="https://google.com" />
				</div>
				<div className="input-group textarea-group">
					<label className="bold" htmlFor="bio">
						Bio
					</label>
					<textarea
						cols="8"
						value="sickest guy"
					></textarea>
				</div>
				<div className="input-group">
					<label className="bold" htmlFor="email">
						Email
					</label>
					<input type="email" value="simp9@gmail.com" />
				</div>
				<Button>Submit</Button>
			</form>
		</ProfileSettingsWrapper>
	);
};

export default ProfileSettings;
