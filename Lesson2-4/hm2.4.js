let screenPrice = 1000






let titleProject = prompt("Название проекта?")

console.log(titleProject)

let screensValue = prompt("Какие нужны типы экранов?")

console.log(screensValue)

let responsive = prompt("нужен ли респонсивный сайт?")

console.log(responsive)

let service1 = prompt("Какой сервис нужен?")

console.log(service1)

let servicePrice1 = +prompt("Сколько это будет стоить?")

console.log(servicePrice1)

let service2 = prompt("Какой сервис еще тебе нужен?")

console.log(service2)

let servicePrice2 = +prompt("Сколько будет стоить этот второй сервис?")

console.log(servicePrice2)


let persentage = 15/100


const getAllServicePrices = function () {
    return servicePrice1 + servicePrice2
}

const allServicePrices = getAllServicePrices()
console.log (allServicePrices)

function getFullPrice() {
    return allServicePrices + screenPrice
 }

fullPrice = getFullPrice();
console.log (fullPrice)

let newTitle = '';
let firstChar = titleProject.charAt(0).toUpperCase();
let otherChars = titleProject.slice(1).toLowerCase();

const getTitle = function () {
    return firstChar + otherChars;

}

newTitle = getTitle();
console.log (newTitle)
 

const getServicePercentPrices = function () {
    return fullPrice - fullPrice*persentage
 }

 servicePercentPrice = getServicePercentPrices(); 
 console.log (servicePercentPrice)


 
 const getRollbackMessage = function () { 
    if (fullPrice < 0) {
        return 'Что то пошло не так';
    } else if (fullPrice == 0) {
        return 'Сделайте заказ от 20000 и получите скидку';
    } else if (fullPrice === 0 || fullPrice < 20000) {
        return 'скидка не предусмотрена';
    } else if (fullPrice == 20000) {
        return'Сделайте заказ от 20000 и получите скидку';
    } else if (fullPrice < 50000 || fullPrice == 50000) {
        return'Сделаем скидку 5%';
    } else if (fullPrice == 50000) {
        return 'Для цены 50000 скидка составит 5%';
    } else if (fullPrice > 50000) {
        return 'Сделаем скидку 10%';
    } 
 };    
 
 
 console.log (getRollbackMessage());