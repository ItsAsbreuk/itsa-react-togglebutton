"use strict";

const React = require("react"),
      ReactDOM = require("react-dom"),
      ToggleButton = require("./lib/component-styled.jsx");

let props = {
    buttonTextPressed: "I",
    buttonTextReleased: "O",
    className: "itsa-button-oval",
    pressed: false
};

let props2 = {
    buttonTextPressed: "Operational",
    buttonTextReleased: "Shut off",
    pressed: false
};

const handleChange1 = () => {
    props.pressed = !props.pressed;
    renderCheckBox1();
};

const handleChange2 = () => {
    props2.pressed = !props2.pressed;
console.info('handleChange2', props2);
    renderCheckBox2();
};

const renderCheckBox1 = () => {
    ReactDOM.render(
        <ToggleButton {...props} onChange={handleChange1} />,
        document.getElementById("component-container")
    );
};

const renderCheckBox2 = () => {
    ReactDOM.render(
        <ToggleButton {...props2} onChange={handleChange2} />,
        document.getElementById("component-container2")
    );
};

renderCheckBox1();
renderCheckBox2();