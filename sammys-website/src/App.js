import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Work from './components/Work';
import { useState } from 'react';
// import About from './components/About'

function App() {
  const [selected, setSelected] = useState('Work')
  console.log(selected)
  return (
    <div className="App">
      <Header selected={selected} setSelected={setSelected}/>
      {selected === 'Work'}
      <Work/>
      {/* <About/> */}
      <Footer />
    </div>
  );
}

export default App;
