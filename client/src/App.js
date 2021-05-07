import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Registration from "./pages/Registration";
import Home from "./components/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import About from "./components/About";
import PlantAdd from "./components/PlantAdd";
import {Provider} from "react-redux";
import store from "./store/store";
import Users from "./components/Users";
import RecommendationForWatering from "./components/RecommendationForWatering";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Route path="/" exact render={(props) => <Registration />} />
                <Route path="/home" render={(props) => <Home />} />
                <Route path="/about" render={(props) => <About/>}/>
                <Route path="/plantAdd" render={(props) => <PlantAdd/>} />
                <Route path="/users" render={(props) => <Users/>}/>
                <Route path="/recommendation" render={(props) => <RecommendationForWatering/>}/>
            </Router>
        </Provider>
    );
}

export default App;