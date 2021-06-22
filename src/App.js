import { Redirect, Route, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Header from './components/Header';
import Projects from './components/Projects';
import About from './components/About';
import Home from './components/Home';
import Project from './components/projects/Project';

import './App.css';
import Loader from './components/Loader';
import { getAllProjectsAssets } from './services/projectService';
import { cacheAssets } from './services/cacheService';

const navItems = [
  {id: 1, path: "/home", label: "Domů"},
  {id: 2, path: "/projects", label: "Projekty"},
  {id: 4, path: "/about", label: "O mně"},
]

function App() {
  const [isCaching, setIsCaching] = useState(true);


  useEffect(() => {
    const fetchData = async () => {
      const {data} = await getAllProjectsAssets();
      await cacheAssets(data);
      setIsCaching(false);
    }
    fetchData();
  })

  return (
    <div className="App">
      <Header navItems={navItems}/>
      <div className="content">
        {isCaching ? <Loader/> : <Switch>
          <Route path="/project/:id" component={Project}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/about" component={About}/>
          <Route path="/" exact component={Home}/>
          <Redirect from="/home" to="/"/>
        </Switch>
        }
      </div>
    </div>
  );
}

export default App;
