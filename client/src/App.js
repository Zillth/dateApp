import Auth from "./components/Auth/Auth";
import Profile from "./components/Profile/Profile";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import { Container } from "@material-ui/core";

import { BrowserRouter, Switch, Route } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/login" exact component={Auth} />
          <Route path="/profile" exact component={Profile} />
        </Switch>
      </Container>
    </BrowserRouter>

  );
}

export default App;
