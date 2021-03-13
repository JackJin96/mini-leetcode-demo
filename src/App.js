import logo from './logo.svg';
import './App.css';
import { Navbar, Nav, Form, Button, Table, Container, Jumbotron } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Problems from "./problems";
import Home from "./home";
import MyProblems from "./myProblems";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="/">Mini Leetcode</Navbar.Brand>
          <Nav className="mr-auto">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/problems" className="nav-link">Problems</Link>
            <Link to="/myProblems" className="nav-link">My Problems</Link>
          </Nav>
          <Form inline>
            {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" /> */}
            <Button className="loginButtons" variant="outline-primary">Login</Button>
            <Button className="loginButtons" variant="outline-primary">Log Off</Button>
          </Form>
        </Navbar>

        <Switch>
          <Route path="/problems">
            <Problems />
          </Route>
          <Route path="/myProblems">
            <MyProblems />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
