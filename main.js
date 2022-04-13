const buttons = document.querySelectorAll('.btn')
const panels = document.querySelectorAll('.panel')

toggle()

function toggle() {
    buttons.forEach(btn => btn.addEventListener("click", () => add(event.target)))
}

function add(btn) {
    resetAll()
    let dataset = document.querySelectorAll(`[data-js="${btn.dataset.js}"]`)
    dataset.forEach(dataset => dataset.classList.add('active'))
}

function resetAll() {
    buttons.forEach(btn => btn.classList.remove('active'))
    panels.forEach(panel => panel.classList.remove('active'))
}

