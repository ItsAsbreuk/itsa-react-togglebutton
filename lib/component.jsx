"use strict";

/**
 * Description here
 *
 *
 *
 * <i>Copyright (c) 2016 ItsAsbreuk - http://itsasbreuk.nl</i><br>
 * New BSD License - http://choosealicense.com/licenses/bsd-3-clause/
 *
 *
 * @module component.jsx
 * @class Component
 * @since 2.0.0
*/

import React, {PropTypes} from "react";
import Button from "itsa-react-button";

const ITSA_TOGGLE_EXPANDER_DIV = "<div class=\"itsa-togglebutton-expander\">",
      END_DIV = "</div>",
      ARIA_LABEL = "aria-label",
      WHITE_SPACE = "&#160;"; // white-space

const Component = React.createClass({

    propTypes: {
        /**
         * Array with the keys that can press the button when focussed.
         * Default: [13, 32]
         *
         * @property activatedBy
         * @type Array
         * @since 0.0.1
        */
        activatedBy: PropTypes.array,

        /**
         * The aria-label. When not set, it will equal the buttonText
         *
         * @property aria-label
         * @type String
         * @since 0.0.1
        */
        "aria-label": PropTypes.string,

        /**
         * The Button-text. Will be escaped. If you need HTML, then use `buttonHTML` instead.
         * If you need different buttonText for the `pressed` and `release`-state, then use
         * `buttonTextPressed` and `buttonTextReleased`
         *
         * @property buttonText
         * @type String
         * @since 0.0.1
        */
        buttonText: PropTypes.string,

        /**
         * The Button-text when pressed. Will be escaped. If you need HTML, then use `buttonHTML` instead.
         *
         * @property buttonTextPressed
         * @type String
         * @since 0.0.1
        */
        buttonTextPressed: PropTypes.string,

        /**
         * The Button-text. Will be escaped. If you need HTML, then use `buttonHTML` instead.
         *
         * @property buttonTextReleased
         * @type String
         * @since 0.0.1
        */
        buttonTextReleased: PropTypes.string,

        /**
         * The Button-text, retaining html-code. If you don't need HTML, then `buttonText` is preferred.
         * If you need different buttonText for the `pressed` and `release`-state, then use
         * `buttonHTMLPressed` and `buttonHTMLReleased`
         *
         * @property buttonHTML
         * @type String
         * @since 0.0.1
        */
        buttonHTML: PropTypes.string,

        /**
         * The Button-text, retaining html-code. If you don't need HTML,
         * then `buttonText` is preferred.
         *
         * @property buttonHTMLPressed
         * @type String
         * @since 0.0.1
        */
        buttonHTMLPressed: PropTypes.string,

        /**
         * The Button-text, retaining html-code. If you don't need HTML,
         * then `buttonText` is preferred.
         *
         * @property buttonHTMLReleased
         * @type String
         * @since 0.0.1
        */
        buttonHTMLReleased: PropTypes.string,

        /**
         * Whether the button is disabled
         *
         * @property disabled
         * @type Boolean
         * @since 0.0.1
        */
        disabled: PropTypes.bool,

        /**
         * The name-attribute of the button
         *
         * @property name
         * @type String
         * @since 0.0.1
        */
        name: PropTypes.string,

        /**
         * Callback wheneveer the button gets clicked.
         *
         * @property onClick
         * @type Function
         * @since 0.0.1
        */
        onChange: PropTypes.func.isRequired,

        /**
         * The Component its children
         *
         * @property pressed
         * @type Object
         * @since 2.0.0
        */
        pressed: PropTypes.bool.isRequired,

        /**
         * The tabIndex
         * Default: 1
         *
         * @property tabIndex
         * @type Number
         * @since 0.0.1
        */
        tabIndex: PropTypes.number
    },

    /**
     * React render-method --> renderes the Component.
     *
     * @method render
     * @return ReactComponent
     * @since 2.0.0
     */
    render() {
        let ariaLabel, buttonHTML, buttonHTMLPressed, buttonHTMLReleased;
        const instance = this,
              props = instance.props,
              buttonTextPressed = props.buttonTextPressed || props.buttonText,
              buttonTextReleased = props.buttonTextReleased || props.buttonText,
              saveButtonTextPressed = instance._saveHTML(buttonTextPressed),
              saveButtonTextReleased = instance._saveHTML(buttonTextReleased);

        buttonHTMLPressed = props.buttonHTMLPressed || props.buttonHTML;
        buttonHTMLReleased = props.buttonHTMLReleased || props.buttonHTML;

        if (!buttonHTMLPressed && !buttonTextPressed) {
            buttonHTMLPressed = WHITE_SPACE;
        }

        if (!buttonHTMLReleased && !buttonTextReleased) {
            buttonHTMLReleased = WHITE_SPACE;
        }

        if (props.pressed) {
            buttonHTML = (buttonHTMLPressed || saveButtonTextPressed) +
                         ITSA_TOGGLE_EXPANDER_DIV +
                             (buttonHTMLReleased || saveButtonTextReleased) +
                         END_DIV;
            ariaLabel = props[ARIA_LABEL] || saveButtonTextPressed || instance._saveHTML(buttonHTMLPressed);
        }
        else {
            buttonHTML = (buttonHTMLReleased || saveButtonTextReleased) +
                         ITSA_TOGGLE_EXPANDER_DIV +
                             (buttonHTMLPressed || saveButtonTextPressed) +
                         END_DIV;
            ariaLabel = props[ARIA_LABEL] || saveButtonTextReleased || instance._saveHTML(buttonHTMLReleased);
        }

        return (
            <Button
                {...props}
                aria-label={ariaLabel}
                buttonHTML={buttonHTML}
                onClick={props.onChange}
                toggled={props.pressed}
                type="button" />
        );
    },

    /**
     * Returns a save string
     *
     * @method _saveHTML
     * @private
     * @param String html the text that should be removed from any html-entities
     * @return String
     * @since 0.0.1
     */
    _saveHTML(html) {
        return html && html.replace(/<[^>]*>/g, '');
    }

});

module.exports = Component;
