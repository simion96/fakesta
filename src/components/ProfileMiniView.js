import React from "react";
import styled from "styled-components";
import avatar from "../assets/default_avatar.jpg";
import Button from "../styles/Button";

const PreviewWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 175px;
	height: 200px;
	border: 1px solid #dbdbdb;
	border-radius: 4px;
	margin-right: 1rem;
	align-items: center;
	img {
		width: 50px;
		height: 50px;
		border-radius: 25px;
		margin-bottom: 1rem;
	}
	.fullname {
		font-size: 0.9rem;
		color: #9f98b4;
	}
`;

const ProfileMiniView = ({ user }) => {
	return (
		<PreviewWrapper key={user.username}>
			<img src={avatar} alt="avatar" />
			<h4>{user.username}</h4>
			<span className="fullname">{user.fullname}</span>
			<Button>Follow</Button>
		</PreviewWrapper>
	);
};

export default ProfileMiniView;
