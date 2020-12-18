console.log('Hello Lopez, more...');

const changeText = (text: string): string => {

    if (text.substring(0, 2) === 'ts') {
        return text
    } else {
        return `ts${text}`
    }
};

const sum = (a: any, b: any): number => {

    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    } else {
        throw new Error('Type of parameters is not a number');
    }
};

console.log(changeText('ts_script'));
console.log(changeText('_wow_script'));
console.log(sum(3, 5));

class Weapon {

    private name: string;
    private damage: number;
    private ammoLeft: number;
    private maxAmmo: number;
    private rateOfFire: number;
    private range: number

    constructor(name: string, damage: number, ammoLeft: number, maxAmmo: number, rateOfFire: number, range: number) {
        this.name = name;
        this.damage = damage;
        this.ammoLeft = ammoLeft;
        this.maxAmmo = maxAmmo;
        this.rateOfFire = rateOfFire;
        this.range = range;
    }

}

abstract class Unit {

    private name: string;
    private hitPointsLeft: number;
    private maxHitPoints: number;
    private moveDistance: number;
    private weapons: Weapon[];

    protected constructor(name: string, hitPointsLeft: number, maxHitPoints: number, moveDistance: number, weapons: Weapon[]) {
        this.name = name;
        this.hitPointsLeft = hitPointsLeft;
        this.maxHitPoints = maxHitPoints;
        this.moveDistance = moveDistance;
        this.weapons = weapons;
    }
}

class Infantry extends Unit {

    protected constructor(name: string, hitPointsLeft: number, maxHitPoints: number, moveDistance: number, weapons: Weapon[]) {
        super(name, hitPointsLeft, maxHitPoints, moveDistance, weapons);
    }
}

class Vehicle extends Unit {

    private fuelLeft: number;
    private maxFuel: number;
    private fuelConsumptionPerMove: number;

    protected constructor(name: string, hitPointsLeft: number, maxHitPoints: number, moveDistance: number, weapons: Weapon[],
                          fuelLeft: number, maxFuel: number, fuelConsumptionPerMove: number) {
        super(name, hitPointsLeft, maxHitPoints, moveDistance, weapons);
        this.fuelLeft = fuelLeft;
        this.maxFuel = maxFuel;
        this.fuelConsumptionPerMove = fuelConsumptionPerMove;

    }

}

class Point2D {
    private readonly x: number;
    private readonly y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    public getX = () : number => {
       return this.x
    }

    public getY = () : number => {
        return this.y
    }

    public static distanceBetween = (firstPoint: Point2D, secondPoint: Point2D) : number => {
        return Math.ceil(Math.sqrt(Math.pow((firstPoint.getY() - firstPoint.getX()), 2) + Math.pow((secondPoint.getY() - secondPoint.getX()), 2)))
    }
}

let pointA = new Point2D(4, 9);
let pointB = new Point2D(5,9);

console.log(`distance: ${Point2D.distanceBetween(pointA, pointB)}`);
