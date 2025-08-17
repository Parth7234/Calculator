function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    if(b===0)return 'Error'
    return (a/b).toFixed(2)
}

function operate(string1,string2,operand){
    const a=parseFloat(string1)
    const b=parseFloat(string2)
    if(operand=='+'){
        return String(add(a,b));
    }
    if(operand=='-'){
        return String(subtract(a,b));
    }
    if(operand=='*'){
        return String(multiply(a,b));
    }
    if(operand=='/'){
        return String(divide(a,b));
    }
}

const keys=document.querySelectorAll('.key')
const ops=document.querySelectorAll('.op')
const eq=document.querySelector('.eq')
const screen=document.querySelector('.screen')
const clear=document.querySelector('.clr')
let str=''
let dotCount=0
let str1=''
let str2=''
let operand=''
let opCount=0;

keys.forEach(function(key){
    key.addEventListener('click',function(){
        if(key.value!='.'||dotCount===0){
            if(key.value==='.')dotCount++;
            str+=key.value
            screen.textContent=str
        }
    })
})

ops.forEach(function(op){
    op.addEventListener('click',function(){
        if(str.length!=0){
            opCount++;
            if(str1.length===0){
                str1=str
                str=''
                dotCount=0
                operand=op.value
            }
            else{
                str2=str
                str=''
                dotCount=0
                str1=operate(str1,str2,operand)
                operand=op.value
                if(opCount>1)screen.textContent=str1
            }
        }
    })
})

eq.addEventListener('click',function(){
    if(str.length!=0&&str1.length!=0){
        str2=str
        str1=operate(str1,str2,operand)
        screen.textContent=str1
        str=''
        dotCount=0
    }
})

clear.addEventListener('click',function(){
    str=''
    dotCount=0
    str1=''
    str2=''
    operand=''
    screen.textContent=str
    opCount=0
})
