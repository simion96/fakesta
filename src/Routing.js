import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DetailedPost from './components/DetailedPost';
import ProfileEdit from './components/ProfileEdit';
import Home from './components/Home';
import Profile from './components/Profile';
import NavBar from './components/NavBar';

import Explore from './components/Explore';

import Container from './styles/Container';

const Routing = () => (
  <Router>
    <NavBar />
    <Container>
      <Switch>
        <Route path="/explore" component={Explore} />
        <Route path="/p/:postId" component={DetailedPost} />
        <Route path="/accounts/edit" component={ProfileEdit} />
        <Route path="/:username" component={Profile} />
        <Route path="/" component={Home} />
      </Switch>
    </Container>
  </Router>
);

export default Routing;
