[![Build Status](https://travis-ci.org/ItsAsbreuk/itsa-react-togglebutton.svg?branch=master)](https://travis-ci.org/ItsAsbreuk/itsa-react-togglebutton)

Interactive Toggle-button.

Lightweight, focussable, responses to keypresses and will act quicker than the HTMLButtonElement.
Meaning, that the onClick-event gets fired on a mouseDown or keyDown event (native HTMLButtonElement emits on mouseUp).

## How to use:

```js
const ReactDOM = require("react-dom"),
      ToggleButton = require("itsa-react-togglebutton");

let props = {
    checked: true
};

const handleChange = () => {
    props.checked = !props.checked;
    renderToggleButton();
};

const renderToggleButton = () => {
    ReactDOM.render(
        <ToggleButton {...props} onChange={handleChange} />,
        document.getElementById("container")
    );
};

renderToggleButton();
```

## About the css

You need the right css in order to make use of `itsa-react-togglebutton`. There are 2 options:

1. You can include the files inside the css-folder of the module: `itsa-react-button`, which is a dependency.
2. You can use: `Component = require("itsa-react-togglebutton/lib/component-styled.jsx");` and build your project with `webpack`. This is needed, because you need the right plugin to handle a requirement of the `scss`-file.


[View live example](http://projects.itsasbreuk.nl/react-components/itsa-togglebutton/component.html)

[API](http://projects.itsasbreuk.nl/react-components/itsa-togglebutton/api/)


#### If you want to express your appreciation

Feel free to donate to one of these addresses; my thanks will be great :)

* Ether: 0xE096EBC2D19eaE7dA8745AA5D71d4830Ef3DF963
* Bitcoin: 37GgB6MrvuxyqkQnGjwxcn7vkcdont1Vmg
