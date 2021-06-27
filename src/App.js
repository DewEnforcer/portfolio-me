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
import LanguageContext from './context/LanguageContext';

const navItems = [
  {id: 1, path: "/home", label: {cz: "Domů", en: "Home"}},
  {id: 2, path: "/projects", label: {cz: "Projekty", en: "Projects"}},
  {id: 3, path: "/about", label: {cz: "O mně", en: "About me"}},
]

function App() {
  const [isCaching, setIsCaching] = useState(true);
  const [language, setLanguage] = useState("en");


  useEffect(() => {
    const fetchData = async () => {
      const {data} = await getAllProjectsAssets();
      await cacheAssets(data);
      setIsCaching(false);
    }
    fetchData();
  })

  return (
    <LanguageContext.Provider value={{language, setLanguage}}>
      <div className="App">
        <Header mark="Patrik Medek" navItems={navItems}/>
        <div className="content">
          {isCaching ? <Loader/> : <Switch>
            <Route path="/project/:id" component={Project}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/about" component={About}/>
            <Route path="/home" component={Home}/>
            <Redirect from="/" to="/home"/>
          </Switch>
          }
        </div>
      </div>
    </LanguageContext.Provider>
  );
}

export default App;
