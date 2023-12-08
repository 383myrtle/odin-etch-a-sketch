let div = document.querySelector('.container')
for (let i = 0; i < 256; i++){
    let block = document.createElement('div')
    block.classList.add('block')
    div.appendChild(block)
    block.addEventListener('mouseover', changeColor)
}

function changeColor(e){
    e.target.classList.add('blue')
}

let input = document.querySelector('input')
let btn = document.querySelector('button')
btn.addEventListener('click', createNewGrid)

function createNewGrid(e){
    let size = input.value
    input.value = ''
    div.textContent = ''

    for (let i = 0; i < size*size; i++){
        let block = document.createElement('div')
        block.classList.add('block')
        block.style.width = 960/size + "px"
        block.style.height = 960/size + "px"
        div.appendChild(block)
        block.addEventListener('mouseover', changeColor)
    }
}