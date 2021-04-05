import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form"
import FormControl from "react-bootstrap/FormControl"
import Button from "react-bootstrap/cjs/Button";
import Navibar from "./Navibar";
import useFetch from "../store/useFetch";


export default function Mod() {
    const res = useFetch('http://api.openweathermap.org/data/2.5/weather?q=Thailand&appid=a303469ba0570ee6f7adbb6c4ed95396');
    console.log(res.response);
    return (
        <div className="mod">
            <Navibar/>
            <h1>MOD</h1>
        </div>
    );
}