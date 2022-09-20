//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

const SimpleCounter = (props) => {


    return (
        <div className="wrapper">
            <div className="clock btn btn-dark" onClick={resetCounter} onDoubleClick={reloadCounter}>
                <i className="far fa-clock"></i>
            </div>
            <div className="btn btn-dark">{props.day}</div>
            <div className="btn btn-dark">{props.hour}</div>
            <div className="btn btn-dark">{props.min}</div>
            <div className="btn btn-dark">{props.sec}</div>
        </div>
    )
}

let time = 0;
let sec = 1;
let min = 0;
let hour = 0;
let day = 0;

const intervalID = setInterval(() => {
    sec = time + 1;

    if (sec === 59) {
        time = -2;
    }

    if (sec == 0) {
        min += 1
    };
    if (min == 60) {
        return hour += 1
    };
    if (hour == 24) {
        return day += 1
    };
    time++;
    console.log(sec, min, hour, day);
    ReactDOM.render(<SimpleCounter sec={sec} min={min} hour={hour} day={day} />, document.querySelector("#app"));


}, 1000);

const resetCounter = () => {
    clearInterval(intervalID);
};

const reloadCounter = () => {
    window.location.reload();
}