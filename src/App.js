import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Work from './components/Work';
import About from './components/About'
import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Radio from './components/Radio';
import Roji from './components/Roji';
import Stardust from './components/Stardust';
import {Helmet} from "react-helmet";

function App() {
  const [selected, setSelected] = useState('Gallery')
  return (
    <div className="App">
      {/* METADATA - any duplicate meta tags set in children components will override parent meta tags */}
      <Helmet>
        <title>ROJI</title>
        <meta
          name="description"
          content="Portfolio design for ROJI DESIGN CO."
        />
        <meta property="og:title" content="ROJI"/>
        <meta property="og:description" content="Portfolio site of ROJI DESIGN"/>
        <meta property="og:image" content="https://www.dropbox.com/s/zxkwzy9rt9b563k/roji-share-card.jpg?dl=1"/>
        <meta property="og:image:secure_url" content="https://www.dropbox.com/s/zxkwzy9rt9b563k/roji-share-card.jpg?dl=1"/>
        <meta property="og:image:type" content="image/jpeg"/>
        <meta property="og:image:width" content="1200"/>
        <meta property="og:image:height" content="630"/>
        <meta property="og:image:alt" content="roji share card"/>
      </Helmet>

      <Header selected={selected} setSelected={setSelected}/>

      <Switch>
        <Route exact path='/'>
          <Work />
        </Route>
        <Route exact path='/roji'>
          <Roji />
        </Route>
        <Route path='/about'>
          <About/>
        </Route>
        <Route path='/gallery'>
          <Work />
        </Route>
        <Route path='/radio'>
          <Radio />
        </Route>  
        <Route path='/stardust'>
          <Stardust />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
