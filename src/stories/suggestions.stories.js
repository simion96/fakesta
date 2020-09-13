import React from "react";
import Suggestions from "../components/Suggestions";
import styled from 'styled-components';


const StyledUserCard = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 1rem;

	span {
		color: #b2b2b2;
	}
`;


export default {
  title: "User/Suggestions",
  component: Suggestions,
};

export const suggestions = () => <Suggestions  />;
