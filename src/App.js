import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Work from "./components/Work";
import About from "./components/About";
import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { Project } from "./components/Project";

function App() {
    const [selected, setSelected] = useState("Work");
    return (
        <div className="App">
            <Header selected={selected} setSelected={setSelected} />

            <Switch>
                <Route exact path="/">
                    <Work />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/work">
                    <Work />
                </Route>
                <Route path="/project/:name" children={rProps => <Project {...rProps} />} />
            </Switch>
            <Footer />
        </div>
    );
}

export default App;
