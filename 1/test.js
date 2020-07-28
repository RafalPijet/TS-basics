"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log('Hello Lopez, more...');
var changeText = function (text) {
    if (text.substring(0, 2) === 'ts') {
        return text;
    }
    else {
        return "ts" + text;
    }
};
var sum = function (a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    else {
        throw new Error('Type of parameters is not a number');
    }
};
console.log(changeText('ts_script'));
console.log(changeText('_wow_script'));
console.log(sum(3, 5));
var Weapon = /** @class */ (function () {
    function Weapon(name, damage, ammoLeft, maxAmmo, rateOfFire, range) {
        this.name = name;
        this.damage = damage;
        this.ammoLeft = ammoLeft;
        this.maxAmmo = maxAmmo;
        this.rateOfFire = rateOfFire;
        this.range = range;
    }
    return Weapon;
}());
var Unit = /** @class */ (function () {
    function Unit(name, hitPointsLeft, maxHitPoints, moveDistance, weapons) {
        this.name = name;
        this.hitPointsLeft = hitPointsLeft;
        this.maxHitPoints = maxHitPoints;
        this.moveDistance = moveDistance;
        this.weapons = weapons;
    }
    return Unit;
}());
var Infantry = /** @class */ (function (_super) {
    __extends(Infantry, _super);
    function Infantry(name, hitPointsLeft, maxHitPoints, moveDistance, weapons) {
        return _super.call(this, name, hitPointsLeft, maxHitPoints, moveDistance, weapons) || this;
    }
    return Infantry;
}(Unit));
var Vehicle = /** @class */ (function (_super) {
    __extends(Vehicle, _super);
    function Vehicle(name, hitPointsLeft, maxHitPoints, moveDistance, weapons, fuelLeft, maxFuel, fuelConsumptionPerMove) {
        var _this = _super.call(this, name, hitPointsLeft, maxHitPoints, moveDistance, weapons) || this;
        _this.fuelLeft = fuelLeft;
        _this.maxFuel = maxFuel;
        _this.fuelConsumptionPerMove = fuelConsumptionPerMove;
        return _this;
    }
    return Vehicle;
}(Unit));
var Point2D = /** @class */ (function () {
    function Point2D(x, y) {
        var _this = this;
        this.getX = function () {
            return _this.x;
        };
        this.getY = function () {
            return _this.y;
        };
        this.x = x;
        this.y = y;
    }
    Point2D.distanceBetween = function (firstPoint, secondPoint) {
        return Math.ceil(Math.sqrt(Math.pow((firstPoint.getY() - firstPoint.getX()), 2) + Math.pow((secondPoint.getY() - secondPoint.getX()), 2)));
    };
    return Point2D;
}());
var pointA = new Point2D(4, 9);
var pointB = new Point2D(5, 9);
console.log("distance: " + Point2D.distanceBetween(pointA, pointB));
