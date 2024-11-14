

const screenPrice = 1000






const titleProject = prompt("Название проекта?")

console.log(titleProject)

const screensValue = prompt("Какие нужны типы экранов?")

console.log(screensValue)

const responsive = prompt("нужен ли респонсивный сайт?")

console.log(responsive)

const service1 = prompt("Какой сервис нужен?")

console.log(service1)

const servicePrice1 = +prompt("Сколько это будет стоить?")

console.log(servicePrice1)

const service2 = prompt("Какой сервис еще тебе нужен?")

console.log(service2)

const servicePrice2 = +prompt("Сколько будет стоить этот второй сервис?")

console.log(servicePrice2)

const fullPrice = screenPrice + +servicePrice1 + +servicePrice2

console.log(fullPrice)

const persentage = 15/100

const servicePercentPrice = fullPrice - fullPrice*persentage

console.log(servicePercentPrice)

if (fullPrice < 0) {
    console.log('Что то пошло не так');
} else if (fullPrice == 0) {
    console.log('Сделайте заказ от 20000 и получите скидку');
} else if (fullPrice === 0 || fullPrice < 20000) {
    console.log('скидка не предусмотрена');
} else if (fullPrice == 20000) {
    console.log('Сделайте заказ от 20000 и получите скидку');
} else if (fullPrice < 50000 || fullPrice == 50000) {
    console.log('Сделаем скидку 5%');
} else if (fullPrice == 50000) {
    console.log('Для цены 50000 скидка составит 5%');
} else if (fullPrice > 50000) {
    console.log('Сделаем скидку 10%');
} 