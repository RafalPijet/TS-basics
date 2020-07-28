"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Exchanger_1 = require("./Exchanger");
var initEventListener = function () {
    var btn = document.getElementById("exchange");
    var ex = document.getElementById("result");
    var getInputValue = function (id) {
        var element = document.getElementById(id);
        if (element !== null && element instanceof HTMLInputElement) {
            return element.valueAsNumber;
        }
        else {
            throw new Error("HTML element is null or wrong type");
        }
    };
    if (btn !== null) {
        if (btn instanceof HTMLButtonElement) {
            btn.addEventListener("click", function (event) {
                event.stopPropagation();
                event.preventDefault();
                var exchanger = new Exchanger_1.Exchanger(getInputValue('gold'), getInputValue('silver'), getInputValue('copper'));
                if (ex !== null) {
                    ex.innerText = exchanger.toCopper().toString();
                }
                else {
                    throw new Error("Element to show not found");
                }
            });
        }
        else {
            throw new Error("HTML element for exchange is not a button");
        }
    }
    else {
        throw new Error("Button for exchange not found");
    }
};
initEventListener();
