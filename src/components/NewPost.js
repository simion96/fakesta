import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";
import useInput from "../hooks/useInput"; 
import { InboxIcon } from "./Icons";

const NewPostWrapper = styled.div`
	.newpost-header {
		display: flex;
		justify-content: space-between;
		padding: 0.5rem 1rem;
	}

	.newpost-header h3:first-child {
		color: #ed4956;
	}

	h3 {
		cursor: pointer;
	}

	.newpost-header h3:last-child {
		color: #0095f6;
	}

	textarea {
		height: 100%;
		width: 100%;
		font-family: "Fira Sans", sans-serif;
		font-size: 1rem;
		padding: 0.5rem 1rem;
		border: none;
		resize: none;
	}
`;


const NewPost = () => {
	const caption = useInput("");
	const [showModal, setShowModal] = useState(false);
	const [preview, setPreview] = useState("");
	const [postImage, setPostImage] = useState("");

	return (
		<NewPostWrapper>
			<label htmlFor="upload-post">
				<InboxIcon />
			</label>
			<input
				id="upload-post"
				type="file"
				accept="image/*"
				style={{ display: "none" }}
			/>
			{showModal && (
				<Modal>
					<div className="newpost-header">
						<h3 onClick={() => setShowModal(false)}>Cancel</h3>
					</div>
					{preview && <img src={preview} alt="preview" />}
					<div>
						<textarea
							placeholder="Add caption"
							value={caption.value}
							onChange={caption.onChange}
						/>
					</div>
				</Modal>
			)}
		</NewPostWrapper>
	);
};

export default NewPost;
