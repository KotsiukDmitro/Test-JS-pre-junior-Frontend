// 1. Создай функцию extractOddItems(arr) 
// Которая принимает аргументом массив или массивоподобный объект, и возвращает новый массив, в котором находятся только элементы с нечетным индексом.

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const object = { 0: 1, "1": 2, 2: 3, 3: 4, 4: 5, 5: 6, length: 10}

function extractOddItems(arr) {

    const array = []
    
    for (elem in arr) {
        const index = parseInt(elem)
        if (index % 2 === 1) {
            array.push(arr[index])
        }
      }
      return (array)
}
console.log('Задача №1');

console.log('исходные данные:', array); 
console.log('результат:', extractOddItems(array));

console.log('исходные данные:', object);
console.log('результат:', extractOddItems(object));

// _________________________________________________________________________________________


// 2. Написать функцию createObject(keys, values)
// Которая принимает аргументами 2 массива, и возвращает объект, название ключей которого - строки из массива keys, а значения - значения из массива values. Если ключей меньше, чем значений, игнорировать не умещающиеся значения. Если ключей больше, чем значений, установить значения в undefined.

const keys = ['cat', 'dog', 'car', 'home', 'room']
const values = [1, 2, 3, 4]

function createObject(keys, values) {

    let obj = {}
    
    for (let i = 0; i < keys.length; i++) {
       let key = keys[i]
        obj[key] = values[i]
    }
    return obj
}
console.log('Задача №2');
console.log('исходные данные:', keys, values);
console.log('результат:', createObject(keys, values));
// _________________________________________________________________________________________

// 3. Реализовать функцию addClass(node, classToAdd)
// Класс не должен добавляться, если у элемента уже есть такой.


function addClass(node, classToAdd) {
    
    if(!node.classList.contains(classToAdd)) {
        node.classList.add(classToAdd)
    } 
}

// _________________________________________________________________________________________

// 4. Реализовать функцию hasClass(node, classToCheck)
// Которая вернет true, если у node есть класс classToCheck

function hasClass(node, classToCheck) {
   
   return node.classList.contains(classToCheck)         
}



