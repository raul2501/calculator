//Functions for math operators: 
function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b;
}

function sum(...args) {
    return [...args].reduce((a, b) => a + b, 0)
}


function multiply(...args) {
    return [...args].reduce((a, b) => a * b, 1)
}

function divide(a, b) {
    return a / b
}

function power(x, y) {
    return Math.pow(x, y)
}

function operator(op, ...args) {
    if (op === '+') {
        return res = sum(...args)
    }
    else if (op === '-') {
        return res = subtract(...args)
    }
    else if (op === 'x') {
        return res = multiply(...args)
    }
    else if (op === '/') {
        return res = divide(...args)
    }
}

let calcarr = [];
let num;
let opt;
let isNum = true;
var btn = document.querySelectorAll("#key");
btn.forEach(key => {
    key.addEventListener('click', (e) => {
        tempnum = e.target.innerText;
        if (isNum) {
            document.getElementById('disp').innerText += tempnum;
            num = parseInt(document.getElementById('disp').innerText);
        }
        else {
            let signchk = document.getElementById('disp').innerText
            if (signchk == '+' || signchk == '-' || signchk == '/' || signchk == 'x') {
                document.getElementById('disp').innerText = tempnum;
                num = parseInt(document.getElementById('disp').innerText);
                console.log('num ' + num)
            }
            else {
                document.getElementById('disp').innerText += tempnum;
                num = parseInt(document.getElementById('disp').innerText);
            }
        }
    })
})

var addi = document.querySelector('#add');
addi.addEventListener('click', (e) => {
    console.log(document.getElementById('disp').innerText)
    let prevchk = document.getElementById('disp').innerText
    if (prevchk == '+' || prevchk == '-' || prevchk == '/' || prevchk == 'x') {       // Housekeeping fn: On clicking the op, the prev entered number is 
        opt = '+'
        document.getElementById('disp').innerText = opt
        isNum = false
    }
    else {
        num = parseInt(document.getElementById('disp').innerText)
        opt = '+'
        document.getElementById('disp').innerText = opt
        calcarr.push(num)
        isNum = false
    }
    num = 0
    if (calcarr[1] != undefined && opt != '' && calcarr[1] != NaN) {
        let prevres = operator(opt, ...calcarr)
        calcarr = []
        calcarr.push(prevres)
    }
})


var subt = document.querySelector('#subt')
subt.addEventListener('click', (e) => {
    let prevchk = document.getElementById('disp').innerText
    if (prevchk == '+' || prevchk == '-' || prevchk == '/' || prevchk == 'x') {       // Housekeeping fn: On clicking the op, the prev entered number is 
        opt = '-'
        document.getElementById('disp').innerText = opt
        isNum = false
    }
    else {
        num = parseInt(document.getElementById('disp').innerText)
        opt = '-'
        document.getElementById('disp').innerText = opt
        calcarr.push(num)
        isNum = false
    }
    num = 0
    if (calcarr[1] != undefined && opt != '' && calcarr[1] != NaN) {
        let prevres = operator(opt, ...calcarr)
        calcarr = []
        calcarr.push(prevres)
    }
})

var mult = document.querySelector('#multiply');
mult.addEventListener('click', (e) => {
    let prevchk = document.getElementById('disp').innerText
    if (prevchk == '+' || prevchk == '-' || prevchk == '/' || prevchk == 'x') {       // Housekeeping fn: On clicking the op, the prev entered number is 
        opt = 'x'
        document.getElementById('disp').innerText = opt
        isNum = false
    }
    else {
        num = parseInt(document.getElementById('disp').innerText)
        opt = 'x'
        document.getElementById('disp').innerText = opt
        calcarr.push(num)
        isNum = false
    }
    num = 0
    if (calcarr[1] != undefined && opt != '' && calcarr[1] != NaN) {
        let prevres = operator(opt, ...calcarr)
        calcarr = []
        calcarr.push(prevres)
    }
})

var divvy = document.querySelector('#divide');
divvy.addEventListener('click', (e) => {
    let prevchk = document.getElementById('disp').innerText
    if (prevchk == '+' || prevchk == '-' || prevchk == '/' || prevchk == 'x') {       // Housekeeping fn: On clicking the op, the prev entered number is 
        opt = '/'
        document.getElementById('disp').innerText = opt
        isNum = false
    }
    else {
        num = parseInt(document.getElementById('disp').innerText)
        opt = '/'
        document.getElementById('disp').innerText = opt
        calcarr.push(num)
        isNum = false
    }
    num = 0
    if (calcarr[1] != undefined && opt != '' && calcarr[1] != NaN) {
        let prevres = operator(opt, ...calcarr)
        calcarr = []
        calcarr.push(prevres)
    }
})

var eqto = document.querySelector('#eqto');
eqto.addEventListener('click', (e) => {
    calcarr.push(num)
    if (operator(opt, ...calcarr) == undefined) {
        alert("please enter a valid math operation")
    }
    else {
        document.getElementById('disp').innerText = operator(opt, ...calcarr)
    }
    calcarr.length = 0
})

var clr = document.querySelector('#clr');
clr.addEventListener('click', (e) => {
    document.getElementById('disp').innerText = ''
    num = ''
    opt = ''
    calcarr = []
    tempnum = ""
    isNum = true
})


var del = document.querySelector('#bksp');
del.addEventListener('click', (e) => {
    let toDel = document.getElementById('disp').innerText.toString()
    document.getElementById('disp').innerText = toDel.substring(0, toDel.length - 1)
    if (toDel == '+' || toDel == '-' || toDel == 'x' || toDel == '/' || toDel == '=') {
        opt = ''
        isNum = true
    }
})
