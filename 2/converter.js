"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Exchanger_1 = require("./Exchanger");
var _ = __importStar(require("lodash"));
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
                    ex.innerText = _.padStart(exchanger.toCopper().toString(), 5, '-');
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
