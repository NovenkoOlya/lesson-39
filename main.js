// let a = document.querySelectorAll('li')

// console.log(a)

// let titleElem = document.getElementById('main-heading')

// console.log(titleElem.innerHTML)

// let newTitle = prompt('Please provide a new title')
// titleElem.innerHTML = newTitle
////////////////////////////////////////////////////
// let textDiv = document.querySelector('.one')
// textDiv.style.width = '200px'
// textDiv.style.height = '100px'
// textDiv.style.paddingLeft = '50px'

// textDiv.classList.add('two', 'three')

// textDiv.classList.remove('two')

// let btn = document.querySelector('.button')
// btn.onclick = function (){
//     this.classList.toggle('two')
// }
////////////////////////////////////////////////////
let block = document.querySelector('.block')
let btnDown = document.querySelector('.btn-down')
let btnUp = document.querySelector('.btn-up')
let btnLeft = document.querySelector('.btn-left')
let btnRight = document.querySelector('.btn-right')

let inputWidth = document.getElementById('input-width')
let inputHeight = document.getElementById('input-height')
let inputColor = document.getElementById('input-color')
let inputRadius = document.getElementById('input-radius')
let inputRound =document.getElementById('input-round')
let btnCreate = document.querySelector('.btn-create')
let btnClr = document.querySelector('.btn-clr') 

btnCreate.onclick = () => {
    let iwValue = inputWidth.value + 'px'
    let ihValue = inputHeight.value + 'px'
    let icValue = inputColor.value
    

    newBlock = document.createElement('div')
    newBlock.style.width = iwValue
    newBlock.style.height = ihValue
    newBlock.style.backgroundColor = icValue
    newBlock.style.position = 'absolute'
    newBlock.style.left = '0px'
    newBlock.style.top = '0px'
    if (inputRound.checked == true){
        newBlock.style.borderRadius = inputRadius.value + 'px'
    }
    
    document.querySelector('.field').append(newBlock)
}

btnClr.onclick = () => {
    newBlock.remove('div')

} 



let blockTop = 0
let blockLeft = 0

btnDown.onclick = () =>{
    if (blockTop <= (450 - inputHeight.value)){
        blockTop += 50
    newBlock.style.top = blockTop + 'px'
}
    
   else{
        alert('STAY')
    }
}

btnRight.onclick = () =>{
    if (blockLeft <= (450 - inputWidth.value)){
        blockLeft += 50
        newBlock.style.left = blockLeft + 'px'
}
    
   else{
        alert('STAY')
    }
}

btnUp.onclick = () =>{
    if (blockTop >= 50){
        blockTop += -50
    newBlock.style.top = blockTop + 'px'
}
    
   else{
        alert('STAY')
    }
}



btnLeft.onclick = () =>{
    if (blockLeft >= 50){
        blockLeft += -50
        newBlock.style.left = blockLeft + 'px'
}
   else{
        alert('STAY')
    }
}
