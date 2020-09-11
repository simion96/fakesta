import React from "react";
import styled from "styled-components";
import avatar from "../assets/avatar.png";
import Button from "../styles/Button";

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	font-size: 1.1rem;
	margin-bottom: 3rem;

	.avatar {
		width: 160px;
		height: 160px;
		border-radius: 80px;
		margin-right: 2rem;
	}

	.profile-info {
		display: flex;
		align-items: baseline;
		margin-bottom: 1rem;
	}

	.profile-stats {
		display: flex;
		margin-bottom: 1rem;
	}

	span {
		padding-right: 1rem;
	}
`;

const ProfileHeader = () => {
	return (
		<Wrapper>
			<img className="avatar" src={avatar} alt="avatar" />
			<div className="profile-info">
				<div className="profile-info">
					<h2>simionp</h2>
					<Button>follow</Button>
				</div>
				<div className="profile-stats">
					<span>12 posts</span>
					<span>51234k followers</span>
					<span>621 following</span>
				</div>
				<div className="profile-bio">
					<span>simionp</span>
					<p>frontend</p>
				</div>
			</div>
		</Wrapper>
	);
};

export default ProfileHeader;
