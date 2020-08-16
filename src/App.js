import React from 'react';
import logo from './logo.svg';
import styled from 'styled-components';
import GlobalStyle from "./styles/GlobalStyle";
import NavBar from "./components/NavBar";
import Post from "./components/Post";
import './App.css';

const Container = styled.div`
  width: 920px;
  margin: 0 auto;
`;

function App() {
	return (
		<>
			<GlobalStyle />
			<NavBar />

      <Container>
        <Post />
      </Container>
		</>
	);
}

export default App;
