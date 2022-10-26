'use strict';

/*1 Вычислить сумму первых N элементов последовательности . параметр N задает пользователь
(например n=4 , 1+2+3+4)*/

const n = +prompt('Enter n');
function sumElement(n) {
    if(typeof n !== Number && isNaN(n)) {
        throw new TypeError('Enter number');
    }
    if(n <= 0) {
        throw new RangeError('Enter positive number');
    }
    let sum = 0;
    for(let i = 1; i <= n; i++) {
        sum += i; 
    }
    return sum;
};

console.log(sumElement(n));


/*2.1 Создать объект student который содержит следующие свойства: имя, фамилию, пол, контактные данные, id.
2.2 Создать объект студентской группы, содержащий имя университета, факультета и кафедры 
2.3 Связать обьект студента с обьектом его группы
2.4 Реализовать функцию вывода на экран всей информации о студенте (включая и информацию, связанную с универом) в произвольном виде. Функция должна принимать обьект студента.
Необязательные бонусные условия:
Добавить обьекту студента свойство dateOfApplication - дату его поступления в университет. Использовать обьект Date для решения задачи*/

const student = {
    firstName: 'Fedor',
    lastName: 'Fedorovich',
    isMale: false,
    contact: 80978377655,
    id: 'rt7638',
    dateOfApplication: new Date('2022-07-12'),
};

const studentGroup = {
    universityName: 'ZNU',
    faculty: 'Physical Education',
    department: 'Physical rehabilitation',
};

const studentInformation = {...student, ...studentGroup};

function getStudentData(student) {
    let result = '';
    for(const allStudentInformation in student) {
        result += `${allStudentInformation}: ${studentInformation[allStudentInformation]}\n`;
    }
    return result;
};

alert(getStudentData(studentInformation))




/*3.1 Создать числовой массив и проинициализировать его из 25 элементов.
3.2 Вывести элементы с четными индексами
3.3 Вывести только четные элементы (четные числа делятся на 2 без остатка)
3.4 Вывести индексы элементов, равных нулю ( если таковых нет то добавить 1-2 для проверки)
3.5 Подсчитать количество отрицательных чисел в массиве*/

const arr = new Array(25).fill(undefined).map((_, i) => (Math.random() > 0.5 ? i : -i));

//3.2 Вывести элементы с четными индексами
const evenIndex = arr.filter(function(_, index) {
    return index % 2 === 0;
});

console.log(evenIndex);


//3.3 Вывести только четные элементы (четные числа делятся на 2 без остатка)
const evenNumbers = arr.filter(function(element) {
    return element % 2 === 0;
});

console.log(evenNumbers);


//3.4 Вывести индексы элементов, равных нулю ( если таковых нет то добавить 1-2 для проверки)
const result = [];
const element = 0;
let indexElement = arr.indexOf(element);
while (indexElement !== -1) {
    result.push(indexElement);
    indexElement = arr.indexOf(element, indexElement + 1);
};

console.log(result);


//3.5 Подсчитать количество отрицательных чисел в массиве
let countNegativeNumbers = 0;
for(const element of arr) {
    if(element < 0) {
        countNegativeNumbers++;
    }
};

console.log(countNegativeNumbers);


/*4 Создать классы:
- Книга (автор, название, год издания, издательство)
- Электронная версия книги (автор, название, год издания, издательство, формат, электронный номер).
Необязательные бонусные условия:
Добавить классам геттеры и сеттеры для свойств с проверками(правильные типы данных, реалистичные диапазоны и т.д).*/

class Book {
    #author;
    #title;
    #publicationYear;
    #publisher;
    constructor (author, title, publicationYear, publisher) {
        this.#author = author;
        this.#title = title;
        this.#publicationYear = publicationYear;
        this.#publisher = publisher;
    }

    get authorBook() {
        return this.#author;
    }

    set authorBook(lastNameAndFirstName) {
        if(typeof lastNameAndFirstName !== 'string') {
            throw new TypeError('Must be string');
        }
        this.#author = lastNameAndFirstName;
    }

    get title() {
        return this.#title;
    }

    set title(titleBook) {
        if(typeof titleBook !== 'string') {
            throw new TypeError('Must be string');
        }
        this.#title = titleBook;
    }

    get publicationYear() {
        return this.#publicationYear;
    }

    set publicationYear(numberYear) {
        if(typeof numberYear !== 'number' || isNaN(numberYear)) {
            throw new TypeError('Must be number');
        }
        if(numberYear <= 0) {
            throw new RangeError('Enter the correct year')
        }
        this.#publicationYear = numberYear;
    }

    get publisher() {
        return this.#publisher;
    }

    set publisher(publisherName) {
        if(typeof publisherName !== 'string') {
            throw new TypeError('Must be string');
        }
        this.#publisher = publisherName;
    }
};

const book1 = new Book('Autor', 'Title', 2020, 'Ukraine');

class EBook extends Book {
    #format;
    #eNumber;
    constructor (autor, title, publicationYear, publisher, format, eNumber) {
        super(autor, title, publicationYear, publisher);
        this.#format = format;
        this.#eNumber = eNumber;
    }

    get format() {
        return this.#format;
    }

    set format(formatEBook) {
        if(typeof formatEBook !== 'string') {
            throw new TypeError('Must be string');
        }
        this.#format = formatEBook;
    }

    get eNumber() {
        return this.#eNumber;
    }

    set eNumber(eNumberBook) {
        if(typeof eNumberBook !== 'number' || isNaN(eNumberBook)) {
            throw new TypeError('Must be number');
        }
        if(eNumberBook <= 0) {
            throw new RangeError('Enter the correct number');
        }
        this.#eNumber = eNumberBook;
    }
};

const eBook1 = new EBook('Autor', 'Title', 2020, 'Ukraine','electro', 543);


/*5 
Требуется написать функцию, выводящую в консоль числа от 1 до n, где n — это целое число, которая функция принимает в качестве параметра, с такими условиями:
вывод fizzbuzz вместо чисел, кратных как 3, так и 5.
вывод fizz вместо чисел, кратных 3;
вывод buzz вместо чисел, кратных 5;*/

    function fizzbus(n) {
        for(let i = 1; i <= n; i++) {
            if(i % 3 === 0 && i % 5 === 0) {
                console.log('fizzbus')
            } else if (i % 3 === 0) {
                console.log('fizz')
            } else if (i % 5 === 0) {
                console.log('buzz');
            }
        }
    };


    
    /*6
С сервера передается обьект, имеющий следующую структуру:
const serverResponse = {
    data: {
        data: [
            {
                id: 0,
                name: 'John',
                lastName: 'Doe'
            },
            {
                id: 1,
                name: 'Jane',
                lastName: 'Doe'
            },
            {
                id: 2,
                name: 'Admin',
                lastName: 'Tiranovich'
            },
            {
                id: 3,
                name: 'User',
                lastName: 'Undefinovich'
            },
        ]
    }
}

С помощью деструктуризации:
- создать переменную users на основании массива в обьекте serverResponse
- создать отдельные переменные для 3 и 4 пользователя*/


const serverResponse = {
data: {
    data: [
        {
            id: 0,
            name: 'John',
            lastName: 'Doe'
        },
        {
            id: 1,
            name: 'Jane',
            lastName: 'Doe'
        },
        {
            id: 2,
            name: 'Admin',
            lastName: 'Tiranovich'
        },
        {
            id: 3,
            name: 'User',
            lastName: 'Undefinovich'
        },
    ],
},
};


const {
    data: { data: users }, 
} = serverResponse;


const [, , user3, user4] = users;
