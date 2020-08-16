import React from "react";
import styled from "styled-components";
import avatar from "../assets/avatar.png";
import post from "../assets/post.png";
import { HeartIcon, CommentIcon, InboxIcon, BookmarkIcon } from "./Icons";

const StyledPost = styled.div`
	margin: 1rem 0;
	width: 615px;
	background: #fff;
	border: 1px solid #dbdbdb;
	.post-header {
		display: flex;
		align-items: center;
		padding: 1rem;
	}
	.avatar {
		width: 32px;
		height: 32px;
		border-radius: 16px;
		margin-right: 1rem;
	}
	.post-img {
		width: 100%;
		height: 100%;
	}
	.post-actions {
		display: flex;
		align-items: center;
		padding: 0.5rem 1rem;
		padding-bottom: 0.2rem;
	}
	.post-actions svg:last-child {
		margin-left: auto;
	}
	svg {
		margin-right: 1rem;
	}
	.likes-caption-comments {
		padding: 1rem;
	}
	.bold {

		font-weight: bold;
	}
	.username {
		padding-right: 0.2rem;
	}
	textarea {
		height: 100%;
		width: 100%;
		border: none;
		border-top: 1px solid #dbdbdb;
		resize: none;
		padding: 1rem 0 0 1rem;
		font-size: 1rem;
		font-family: 'Helvetica', sans-serif;
	}
`;

const Post = () => {
	const comments = [
		{ user: "bob", text: "this is my comment" },
		{ user: "james", text: "i like making long long long long long comments sometimes " },
		{
			user: "rich",
			text: "more comments"
		}
	];

	return (
		<StyledPost>
			<div className="post-header">
				<img className="avatar" src={avatar} alt="avatar" />
				<p>an username</p>
			</div>

			<img className="post-img" src={post} alt="post-img" />

			<div className="post-actions">
				<HeartIcon />
				<CommentIcon />
				<InboxIcon />
				<BookmarkIcon />
			</div>

			<div class="likes-caption-comments">
				<span class="likes bold">12,420 likes</span>

				{comments.map(comment => (
					<p>
						<span class="username bold">{comment.user}</span>
						{comment.text}
					</p>
				))}
			</div>

			<div className="add-comment">
				<textarea columns="3"></textarea>
			</div>
		</StyledPost>
	);
};

export default Post;