import React from 'react';
//import ReactDOM from 'react-dom';
import {render} from 'react-dom';
import App from './App';
import { UserProvider } from "./context/UserContext";

render(
	<UserProvider>
		<App />
	</UserProvider>,
	document.getElementById("root")
);
