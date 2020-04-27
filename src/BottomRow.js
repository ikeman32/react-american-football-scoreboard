import React, { useState } from "react";
import "./App.css";

const BottomRow = () => {
    const [down, setDown] = useState(1);
    const [toGo, setToGo] = useState(10);
    const [ballOn, setBallOn] = useState(0);
    const [quarter, setQuarter] = useState(1);

    function NewDown() {
        if (down !== 4) {
            setDown(down + 1)
        } else {
            setDown(1)
        }
    }

    function NewQuarter() {
        if (quarter !== 4) {
            setQuarter(quarter + 1);
        } else {
            setQuarter(1);
        }
    }
    return ( <
        div className = "bottomRow" >
        <
        div className = "down" >
        <
        h3 className = "down__title" > Down < /h3> <
        div className = "down__value" > { down } < /div> <button className = "bottom_btn" onClick = {() => NewDown()}>Set Down < /
        button > < /
        div > <
        div className = "toGo" >
        <
        h3 className = "toGo__title" > To Go < /h3> <
        div className = "toGo__value" > { toGo } < /div><div id="toGo"><button className = "bottom_btn"onClick = {()=> setToGo(toGo - 1)}>-1 < /
        button > < button className = "bottom_btn"
        onClick = {
            () => setToGo(toGo + 1)
        } > +1 < /
        button > < button className = "bottom_btn"
        onClick = {
            () => setToGo(10)
        } > 10 < /
        button > < button className = "bottom_btn"
        onClick = {
            () => setToGo(toGo - 10)
        } > -10 < /
        button > < button className = "bottom_btn"
        onClick = {
            () => setToGo(toGo + 10)
        } > +10 < /
        button > < /div> < /
        div > <
        div className = "ballOn" >
        <
        h3 className = "ballOn__title" > Ball on < /h3> <
        div className = "ballOn__value" > { ballOn } < /div><div id="ballOn"><button className = "bottom_btn" onClick = {()=> setBallOn(ballOn + 1)}>+1 < /
        button > < button className = "bottom_btn"
        onClick = {
            () => setBallOn(ballOn + 10)
        } > +10 < /
        button > < button className = "bottom_btn"
        onClick = {
            () => setBallOn(0)
        } > 0 < /
        button > < /div> < /
        div > <
        div className = "quarter" >
        <
        h3 className = "quarter__title" > Quarter < /h3> <
        div className = "quarter__value" > { quarter } < /div> <button className = "bottom_btn"onClick = {() => NewQuarter()}>Quarter < /
        button > < /
        div > <
        /div>
    );
};

export default BottomRow;