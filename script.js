// 0.1 + 0.2
let a = 0.1
let b = 0.2
let c = (a + b).toFixed(1)
console.log(`${a} + ${b} = ${c}`)

//'1' + 2
let x = '1'
let y = 2
let z = Number(x) + y
console.log(`${x} + ${y} = ${z}`)

// 820mb files on a flash-drive
let flashSize = prompt('Type in the size of your flash-drive(Gb)')
let numberOfFiles = Math.floor((flashSize * 1000) / 820)
alert(`You can download ${numberOfFiles} files with a size of 820Mb`)

//chocolate bars for pocket money and change
let pocketMoney = prompt('How much money ($) do you have in your pocket?')
let chocoPrice = prompt('What is a price ($) of a Chocolate bar that you want?')
let chocoPcs = Math.floor(pocketMoney / chocoPrice)
let change = (pocketMoney % chocoPrice).toFixed(2)
if (change === 0) {
    alert(`You can buy ${chocoPcs} Chocolate bars!`)
} else {
    alert(`You can buy ${chocoPcs} Chocolate bars and your change will be ${change}$`)
}

//backwards
let number = prompt('Type in a 3-digit number')
let numberLength = ('' + number).length;
if (numberLength === 3) {
    let reverse1 = number % 10
    number2 = parseInt(number / 10)
    let reverse2 = number2 % 10
    number3 = parseInt(number2 / 10)
    let reverse3 = number3 % 10
    alert(`Reverse number is ${reverse1}${reverse2}${reverse3}`)
}
else {
    alert('This is not a 3-digit number!')
}

//deposit
let deposit = prompt('What is the size of your deposit?($)')
let rate = 0.05
let rateTerm = 365
let depositTerm = 62
let interest = (((deposit * rate)/rateTerm)*depositTerm).toFixed(2)
alert(`Your interest for 2 month deposit is ${interest}$`)
