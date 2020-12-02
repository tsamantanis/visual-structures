import { HashRouter, Route, Switch } from 'react-router-dom';
import Main from './components/Main/Main';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import './App.css';

function App() {
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/" component={ Main }/>
                <Route exact path="/about" component={ About }/>
                <Route exact path="/contact" component={ Contact }/>
            </Switch>
        </HashRouter>
    );
}

export default App;
