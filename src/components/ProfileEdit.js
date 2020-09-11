import React, { useState } from "react";
import styled from "styled-components";
import ProfileSettings from "./ProfileSettings";
import ChangePassword from "./ChangePassword";

const EditProfileWrapper = styled.div`
	grid-template-columns: 250px 1fr;
	width: 930px;
	border: 1px solid #dbdbdb;
	display: grid;
	background: #fff;

	.tabs {
		border-right: 1px solid #dbdbdb;
		padding: 1rem;
	}

	ul {
		list-style-type: none;
	}

	li {
		margin-bottom: 1.5rem;
		cursor: pointer;
	}

	.profile-form-container {
		display: flex;
		justify-content: center;
	}
`;

const EditProfile = () => {
	const [tab, setTab] = useState("profile");

	return (
		<EditProfileWrapper>
			<div className="tabs">
				<ul>
					<li
						onClick={() => setTab("profile")}
						className={tab === "profile" ? "bold" : ""}
					>
						Edit Profile
					</li>
					<li
						onClick={() => setTab("changepassword")}
						className={tab === "changepassword" ? "bold" : ""}
					>
						Change Password
					</li>
				</ul>
			</div>

			{tab === "profile" && (
				<div className="profile-form-container">
					<ProfileSettings />
				</div>
			)}

			{tab === "changepassword" && (
				<div className="profile-form-container">
					<ChangePassword />
				</div>
			)}
		</EditProfileWrapper>
	);
};

export default EditProfile;
