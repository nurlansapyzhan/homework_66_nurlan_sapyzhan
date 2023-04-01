container = document.getElementById('container')
let colors = ['red', 'blue', 'yellow', 'green', 'cyan']
for (let i = 1; i < 6; i++) {
    const elementDiv = document.createElement('div')
    elementDiv.innerHTML = `<div class="element">Element <span style="color: ${colors[i-1]}">${i}</span></div>`
    container.appendChild(elementDiv)
}