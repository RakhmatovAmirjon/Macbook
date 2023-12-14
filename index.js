let price = document.querySelector('.mac_price')
let button_first = document.getElementById('white')
let button_second = document.getElementById('space_gray')
let second = document.getElementById('two')
let third = document.getElementById('three')
let four = document.getElementById('four')

second.onclick = () => {
    price.innerHTML = '$2,199'
    second.style.border = "3px solid blue"
    four.style.border = "1px solid black"
}

third.onclick = () => {
    price.innerHTML = '$2,599'
    second.style.border = "1px solid black"
    third.style.border = "3px solid blue"
}

four.onclick = () => {
    price.innerHTML = '$3,199'
    second.style.border = "1px solid black"
    third.style.border = "1px solid black"
    four.style.border = "3px solid blue"
}