import React from 'react';
import logo from './logo.svg';
import styled from 'styled-components';
import GlobalStyle from "./styles/GlobalStyle";
import NavBar from "./components/NavBar";
import Post from "./components/Post";
import PostPreview from "./components/PostPreview";

//import ProfilePreview from "./components/ProfileView";
import './App.css';

const Container = styled.div`
  width: 920px;
  margin: 0 auto;
  marginTop: 6rem;
`;

function App() {
	return (
		<>
			<GlobalStyle />
			<NavBar />

      <Container>
        <Post />
        <hr />

      </Container>
		</>
	);
}

export default App;
