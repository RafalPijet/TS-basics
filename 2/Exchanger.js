"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Exchanger = void 0;
var Exchanger = /** @class */ (function () {
    function Exchanger(gold, silver, copper) {
        this.gold = gold;
        this.silver = silver;
        this.copper = copper;
    }
    Exchanger.prototype.toCopper = function () {
        var goldToCopper = (this.gold * 20) * 12;
        var silverToCopper = this.silver * 12;
        return goldToCopper + silverToCopper + this.copper;
    };
    return Exchanger;
}());
exports.Exchanger = Exchanger;
