let screenPrice = 1000
let persentage = 15/100
let allServicePrices;
let newTitle = "";
let titleProject;
let screensValue;
let responsive;



const asking = function () {
    titleProject = prompt("Название проекта")
    screensValue = prompt("Какие типы экранов нужны?")
    responsive = prompt("Нужен ли респонсив на сайте?")
}
console.log (asking())


const checkIsNumber = function (x) {
    return !isNaN(parseFloat(x)) && isFinite(x)

}
console.log (checkIsNumber())

const getAllServicePrices = function() {
    let sum = 0

    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            service = prompt("Какой дополнительный тип услуги нужен?", "Услуга 1")

        } else if (i === 1) {
            serviceSecond = prompt("Какой дополнительный тип услуги нужен?", "Услуга 2")
        }

        let textFromPrompt = "";

        while (!checkIsNumber(textFromPrompt) || textFromPrompt.trim() === "" || textFromPrompt === null) {
            textFromPrompt = prompt("Сколько это будет стоить?")
        }
        sum = sum + Number(textFromPrompt)
    
    }
    return sum
}
console.log (getAllServicePrices())


