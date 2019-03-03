import React, { Fragment } from 'react';
import Home from './Home'
import About from './About'
import Portfolio from './Portfolio'
import Contact from './Contact'
import { Route, Link, NavLink, Switch } from "react-router-dom";

const App = (props) => {
    return (
      <div className="App">
        <header>
          <Link to="/"><img src="./portfolio_icon.png" alt="logo"/><span>helen liutongco</span></Link>
          <NavLink activeClassName="activeLink" to="/about">About</NavLink>
          <NavLink activeClassName="activeLink" to="/portfolio">Portfolio</NavLink>
          <NavLink activeClassName="activeLink" to="/contact">Contact</NavLink>
        </header>

        <Switch>
          <Fragment>
            <Route exact path="/" render={Home} />
            <Route path="/about" component={About} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" render={Contact} />
          </Fragment>
       </Switch>

        <footer>
          <span><a rel="noopener noreferrer" target="_blank" href="https://github.com/hliutongco">github</a></span>
          <span><a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/liutongcoh/">linkedin</a></span>
          <span><Link to="/contact">Contact</Link></span>
        </footer>
      </div>

    );
}

export default App;
