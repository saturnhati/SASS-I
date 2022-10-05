let body = document.querySelector('.main')
let colors = ["lavender", "#F9290E", "#FFFFFF", "#450D7F", "$secondary"]
let i = 0;

const showImage = () => {
    document.querySelector('img').classList.toggle('visibility')
}

const changeColor = () => {
    body.style.backgroundColor = colors[i]
    i++
    if (i == colors.length) {
        i = 0
    }
}