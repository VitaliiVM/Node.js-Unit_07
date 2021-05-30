// Task 1
//Создайте функцию f1, которая при запуске из массива ar1 создаем файл ar1.json в текущей папке.
const fs = require('fs');

const f1 = (ar) => {
    let data = JSON.stringify(ar1);
    fs.writeFileSync('ar1.json', data);
};

const ar1 = {
    test: 1,
    code: 2
};
// f1(ar1);

// f1(ar1); для проверки. Должен быть закомментирован

// Task 2
//Создайте функцию f2, которая при запуске из массива ar2 создаем файл ar2.json в текущей папке.

const f2 = (ar) => {
    let data = JSON.stringify(ar2);
    fs.writeFileSync('ar2.json', data);
};

const ar2 = [1, 2, 3];
// f2(ar2);

// f2(ar2); для проверки. Должен быть закомментирован

// Task 3
//Создайте функцию f3, которая при запуске выводит содержимое файла j3.json в консоль.
const alex = require('./j3.json');
const f3 = (ar) => {
    console.log(ar);
};
// f3(alex);
// f3(имя файла); для проверки. Должен быть закомментирован

// Task 4
//Создайте функцию f4, которая при запуске выводит содержимое файла j4.csv в консоль.
const csv = require('csv-parser');
const results = [];
const f4 = (ar) => {
    fs.createReadStream('table.csv')
        .pipe(csv())
        .on('data', (data) => ar.push(data))
        .on('end', () => {
            console.log(ar);
        });
};
// f4(results);
// f4(имя файла); для проверки. Должен быть закомментирован

// Task 5
//Создайте функцию f5, которая при запуске записывает
// массив ar5 в CSV файл t5.csv. Имена колонок Car, Legal, Color. Разделитель - запятая.
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const f5 = (ar) => {
    const csvWriter = createCsvWriter({
        path: 'test.csv',
        header: [
            {id: 'car', title: 'NAME'},
            {id: 'nn', title: 'NN'},
            {id: 'color', title: 'Color'}
        ]
    });
    csvWriter.writeRecords(ar)
        .then(() => {
            console.log('done');
        });
};

let ar5 = [
    {
        car: 'audi',
        nn: 'er5634p',
        color: 'red'
    },
    {
        car: 'bmw',
        nn: 'bb8234p',
        color: 'blue'
    },
]
// f5(ar5);
// f5(имя файла); для проверки. Должен быть закомментирован

// Task 6
//Создайте функцию f6, которая при запуске записывает массив
// ar5 в CSV файл t6.csv. Имена колонок Car, Legal, Color. Разделитель - точка с запятой.

const f6 = (ar) => {
    const csvWriter = createCsvWriter({
        path: 't6.csv',
        header: [
            {id: 'car', title: 'Car'},
            {id: 'nn', title: 'Legal'},
            {id: 'color', title: 'Color'}
        ],
        fieldDelimiter: ";"
    });
    csvWriter.writeRecords(ar)
        .then(() => {
            console.log('done');
        });
};
f6(ar5);
// f6(имя файла); для проверки. Должен быть закомментирован

// Task 7
//Создайте функцию f7, которая при запуске выводит содержимое файла t6.csv в консоль.

const f7 = (ar) => {

};

// f6(имя файла); для проверки. Должен быть закомментирован