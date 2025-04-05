"use strict"

// Задача 1: Суммирование зарплат
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
}

let sum = 0
for (let key in salaries) {
  sum += salaries[key]
}
console.log("Сумма зарплат:", sum)

// Задача 2: Функция multiplyNumeric
function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2
    }
  }
}

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
}

console.log("До вызова multiplyNumeric:", menu)
multiplyNumeric(menu)
console.log("После вызова multiplyNumeric:", menu)

// Задача 3: Объект calculator с методами read, sum, mul
let calculator = {
  read() {
    this.a = +prompt("Введите первое значение:", 0)
    this.b = +prompt("Введите второе значение:", 0)
  },
  sum() {
    return this.a + this.b
  },
  mul() {
    return this.a * this.b
  },
}

calculator.read()

// Задача 4: Функция extractCurrencyValue
function extractCurrencyValue(str) {
  return +str.slice(1)
}

let cost = "$120"
console.log("Извлечённое числовое значение:", extractCurrencyValue(cost))

// Задача 5: Преобразование массива объектов в массив имён
let vasya = {name: "Вася", age: 25}
let petya = {name: "Петя", age: 30}
let masha = {name: "Маша", age: 28}

let users = [vasya, petya, masha]
let names = users.map(user => user.name)
console.log("Имена пользователей:", names)

// Задача 6: Функция getAverageAge для вычисления среднего возраста
function getAverageAge(users) {
  let totalAge = users.reduce((sum, user) => sum + user.age, 0)
  return totalAge / users.length
}

console.log("Средний возраст:", getAverageAge(users))
