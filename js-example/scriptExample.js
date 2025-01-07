// ODEV

let user = prompt()
let title = 'Kodluyoruz Frontend Web Development Patikası'

// GET DAY
let todayIndex = new Date().getDay() // 0-6 arası değer döndürecek
const daysOfWeek = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe','Cuma','Cumartesi']
let dayName = daysOfWeek[todayIndex]

let userDOM = document.querySelector('#user')
let timeDOM = document.querySelector('#time')
let commentDOM = document.querySelector('#comment')

userDOM.innerHTML = `Merhaba, ${user}! Hoş geldin!`
timeDOM.innerHTML = `${new Date().toLocaleDateString()} ${dayName.toUpperCase()}`
commentDOM.innerHTML = `${title}'nın Javascript bölümü 1. Ödevindesin. Öğrenme yolunda başarılar dilerim. <br> Haydi basit bir örnek yapalım!`



// EXTRA

let counter = 0
let counterDOM = document.querySelector('#counter')
let increaseDOM = document.querySelector('#increase')
let decreaseDOM = document.querySelector('#decrease')

counterDOM.innerHTML = counter
increaseDOM.addEventListener('click', clickEvent)
decreaseDOM.addEventListener('click', clickEvent)

function clickEvent(){
    this.id == 'increase' ? counter += 1 : counter -= 1
    counterDOM.innerHTML = counter
    this.classList.add('hover-effect')
    setTimeout(() => {
        this.classList.remove("hover-effect");
      }, 1000);
}