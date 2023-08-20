import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Examples01 from './Examples01.jsx';
import Examples02 from './Examples02.jsx';

function App() {
  return (
    <BrowserRouter>
    <h1>r3f shakyou</h1>
    <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/examples01">Example01</Link>
        </li>
        <li>
          <Link to="/examples02">Example02</Link>
        </li>
      </ul>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/examples01">
        <Examples01 />
      </Route>
      <Route path="/examples02">
        <Examples02 />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  </BrowserRouter>
  );
}

export default App;

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Contact() {
  return <h2>Contact</h2>;
}

function NotFound() {
  return <h2>Not Found Page</h2>;
}
