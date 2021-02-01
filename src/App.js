import { Redirect, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Projects from './components/Projects';
import About from './components/About';
import Home from './components/Home';
import Project from './components/projects/Project';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="content">
        <Switch>
          <Route path="/project/:id" component={Project}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/about" component={About}/>
          <Route path="/" exact component={Home}/>
          <Redirect from="/home" to="/"/>
        </Switch>
      </div>
    </div>
  );
}

export default App;
