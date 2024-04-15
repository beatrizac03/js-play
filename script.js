let btnNotification = document.querySelector('.btn-primary')
let btnCheckAge = document.querySelector('.btn-checkage')

let divResult = document.querySelector('.result-country')
let btnCheckCountry = document.querySelector('.btn-checkcountry')
let inputCountry = document.querySelector('.input-country')

let btnDoubleNumber = document.querySelector('.btn-doublenumber')
let inputNumber = document.querySelector('#input-numb')
let divResultDoubleNumber = document.querySelector('.result-doublenumber')

let inputFirstNumber = document.querySelector('.firstnumber')
let inputSecondNumber = document.querySelector('.secondnumber')
let btnSumNumbers = document.querySelector('.btn-sumnumbers')
let btnMultiplyNumbers = document.querySelector('.btn-multnumbers')
let divResultNumbsOperation = document.querySelector('.result-summult')

let inputGrade1 = document.querySelector('#grade1')
let inputGrade2 = document.querySelector('#grade2')
let inputGrade3 = document.querySelector('#grade3')
let inputStudentName = document.querySelector('#input-stdname')
let btnRegisterGrades = document.querySelector('.btn-registergrades')
let divResultStudent = document.querySelector('.c-resultgrades')
let btnClearData = document.querySelector('.btn-clearstudentdata')
let optionsDisc = document.querySelectorAll('.options-disc')

let btnCalculateComplexOperation = document.querySelector('.btn-calculatecomplexoperation')
let inputToComplexOperation = document.querySelector('#inputnumbtocomplex')
let divResultComplexOperation = document.querySelector('.result-numbertocomplexop')

let btnCountClicks = document.querySelector('.btn-countclicks')
let textQntityClicks = document.querySelector('.c-countclicks p')

function displayNotification() {
    window.alert('Você foi notificado!')
}

function checkAge() {
    let idade = Number(prompt('Quantos anos você tem?'))
    const resul = idade >= 18 ? "Você é maior de idade" : "Você é menor de idade"
    alert(resul)
}

function checkCountry() {
    let country = inputCountry.value.toLowerCase()
    console.log(country)

    if(country == 'brasil') {
        divResult.innerHTML = 'Você é brasileiro!!!'
    } else {
        divResult.innerHTML = 'Você não é do Brasil :('
    }
}

function doubleNumber(event) {
    let numberTobeDoubled = Number(inputNumber.value) * 2

    divResultDoubleNumber.innerHTML = `O dobro do número é: ${numberTobeDoubled}`
    divResultDoubleNumber.style.display = 'flex'
    divResultDoubleNumber.style.justifyContent = 'center'
}

function clearInput(event) {
    event.target.value = ""
    console.log(event.target)

    divResultDoubleNumber.innerHTML = ""
}

const sumNumbers = () => {
    let firstNumber = Number(inputFirstNumber.value), secondNumber = Number(inputSecondNumber.value)
    let sum = firstNumber + secondNumber

    divResultNumbsOperation.innerHTML = `Soma entre ${firstNumber} e ${secondNumber}: ${sum}`
}

const multiplyNumbers = () => {
    let firstNumber = Number(inputFirstNumber.value), secondNumber = Number(inputSecondNumber.value)
    let mult = firstNumber * secondNumber

    divResultNumbsOperation.innerHTML = `Multiplicação entre ${firstNumber} e ${secondNumber}: ${mult}`
}

const registerGrades = () => {
    let grade1 = Number(inputGrade1.value), grade2 = Number(inputGrade2.value), grade3 = Number(inputGrade3.value)
    let averageGrade = (grade1 + grade2 + grade3) / 3
    let studentName = inputStudentName.value

    optionsDisc.forEach(element => {
        console.log(element.innerHTML)
    })


    let eachDivStudentResult = document.createElement('div')
    eachDivStudentResult.classList.add('each-studentresult')
    

    eachDivStudentResult.style.width = '20%'
    eachDivStudentResult.style.height = '130px'
    eachDivStudentResult.style.backgroundColor = "grey"
    eachDivStudentResult.style.borderRadius = '10px'
    eachDivStudentResult.innerHTML = `<b>Aluno(a): </b>${studentName}
    <b>Média: </b> ${averageGrade}`


    divResultStudent.style.display = 'flex'
    divResultStudent.style.height = '300px'
    divResultStudent.style.flexWrap = 'wrap'
    divResultStudent.style.justifyContent = 'center'
    divResultStudent.style.gap = '2rem'
    divResultStudent.style.border = '1px solid red'

    divResultStudent.appendChild(eachDivStudentResult)
    
}

function clearStudentData() {
    inputStudentName.value = ""
    inputGrade1.value = ""
    inputGrade2.value = ""
    inputGrade3.value = ""
}

const calculateComplexOperations = () => {

    
    let number = Number(inputToComplexOperation.value)
    console.log(number)

    let calc1 = Math.sqrt(number).toFixed(2)
    let calc2 = Math.cbrt(number).toFixed(2)
    let calc3 = Math.pow(number, 2)
    let calc4 = Math.pow(number, 3)

    let eachComplexOpResult = document.createElement('div')
    eachComplexOpResult.classList.add('each-complexopresult')


    eachComplexOpResult.innerHTML += `<span>Raiz quadrada: ${calc1}</span>`
    eachComplexOpResult.innerHTML += `<span>Raiz cúbica: ${calc2}</span>`
    eachComplexOpResult.innerHTML += `
    <span>Potenciação ao quadrado: ${calc3}</span>`
    eachComplexOpResult.innerHTML += `
    <span>Potenciação ao cubo: ${calc4}</span>`

    eachComplexOpResult.style.display = 'flex'
    eachComplexOpResult.style.flexDirection = 'column'

    divResultComplexOperation.appendChild(eachComplexOpResult)
}

function clearInputCompOp () {
    inputToComplexOperation.value = ""
    eachComplexOpResult.innerHTML += ""
}

let currentNumber = Number(textQntityClicks.textContent)
const countClicks = () => {
    textQntityClicks.innerHTML = currentNumber++
}


btnNotification.addEventListener('click', displayNotification)
btnCheckAge.addEventListener('click', checkAge)

btnCheckCountry.addEventListener('click', checkCountry)

btnDoubleNumber.addEventListener('click', doubleNumber)
inputNumber.addEventListener('focus', clearInput)

btnSumNumbers.addEventListener('click', sumNumbers)
btnMultiplyNumbers.addEventListener('click', multiplyNumbers)

btnRegisterGrades.addEventListener('click', registerGrades)
btnClearData.addEventListener('click', clearStudentData)

btnCalculateComplexOperation.addEventListener('click', calculateComplexOperations)
inputToComplexOperation.addEventListener('focus', clearInputCompOp)

btnCountClicks.addEventListener('click', countClicks)