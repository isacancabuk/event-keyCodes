const container = document.querySelector('.container')
const firstNode = document.getElementById('firstNode')
let idx = 0

    const keyNode = document.createElement('div')
    keyNode.classList.add('block')

    const keyCodeNode = document.createElement('div')
    keyCodeNode.classList.add('block')

    const codeNode = document.createElement('div')
    codeNode.classList.add('block')


const deleteNode = () => {
    container.removeChild(keyNode)
    container.removeChild(keyCodeNode)
    container.removeChild(codeNode)
}

const deleteFirstNode = () => {
    container.removeChild(firstNode)
}

document.addEventListener('keydown', (e) =>{
    if(idx==1) deleteNode() 
    else deleteFirstNode()
    

    if(e.key == " ") keyNode.innerHTML = `<h3>event.key</h3><h1>Space</h1>`
    else keyNode.innerHTML = `<h3>event.key</h3><h1>${e.key}</h1>`
    container.appendChild(keyNode)
    idx = 1

    
    keyCodeNode.innerHTML = `<h3>event.keyCode</h3><h1>${e.keyCode}</h1>`
    container.appendChild(keyCodeNode)

    
    codeNode.innerHTML = `<h3>event.code</h3><h1>${e.code}</h1>`
    container.appendChild(codeNode)
})