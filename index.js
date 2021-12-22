const generateChild = (X, Y) => {
    const newChild = document.createElement('div')
    newChild.className = 'ss'
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16)
    newChild.setAttribute('style', `--x:${X}px;--y:${Y}px;background : ${randomColor}`)
    return newChild
}
const sss = (element, event) => {
    console.log(event)
    console.log(event.offsetX, event.offsetY);
    const newChild = generateChild(event.offsetX, event.offsetY)
    element.appendChild(newChild)
    let a = 's'
    setTimeout(() => deleteChild(a,element,newChild),2000)
}
const deleteChild = (a,element,newChild) => {
    element.removeChild(newChild)
    console.log('deleted')
}