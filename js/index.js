//нажатие по теленалам  
document.querySelector(".tv").addEventListener("click", (e) => {
    e.preventDefault()
    document.querySelector(".tv").classList.add("active")
    document.querySelector(".films").classList.remove("active")

    document.querySelector('.movies').classList.remove('active');
    document.querySelector('.genres').classList.remove('active');
    document.querySelector('.telechanel').classList.add('active');

})

//нажатие на фильмы
document.querySelector(".films").addEventListener("click", (e) => {
    e.preventDefault()
    document.querySelector(".films").classList.add("active")
    document.querySelector(".tv").classList.remove("active")

    document.querySelector('.movies').classList.add('active');
    document.querySelector('.genres').classList.add('active');
    document.querySelector('.telechanel').classList.remove('active');
})

//модальное окно
document.querySelector('#login').addEventListener('click', () => {
    document.querySelector('.login-modal-wrapper').classList.add('active');
})

// клик по фону модалки
document.querySelector('.login-modal-wrapper').addEventListener('click', (event) => {
    if (event.target.classList.contains('login-modal-wrapper')) {
        document.querySelector('.login-modal-wrapper').classList.remove('active');
    } else {
        return
    }
})


document.querySelector('.movies__title').addEventListener('click', (event) => {
    console.log(document.querySelectorAll('.movies__item').length)
})

