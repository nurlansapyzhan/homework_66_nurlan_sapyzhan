container = document.getElementById('container')
for (let i = 1; i < 6; i++) {
    const elementDiv = document.createElement('div')
    elementDiv.innerHTML = `<div class="element">Element ${i}</div>`
    container.appendChild(elementDiv)
}