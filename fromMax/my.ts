enum Status {ADMIN, READ_ONLY, AUTHOR}

type NewType = string | number | boolean;

const person: {
    name: string;
    age: number;
    hobbies: NewType[];
    role: [number, string];
    status: number
} = {
    name: 'Lopez',
    age: 47,
    hobbies: ['Sports', 12, true],
    role: [2, 'Wowo'],
    status: Status.ADMIN
};

person.name = 'StrongLopez'
console.log(person.name)