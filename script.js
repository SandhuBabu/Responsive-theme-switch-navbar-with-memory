let r = document.querySelector(':root');
let passwordToggleBtn = document.querySelector('.password-toggler')
let check = document.querySelector('#theme-toggle-switch')
let passwordInput = document.querySelector('#pwd')
let popUpForm = document.querySelector('.sign-in-form')
let onloadSignInPop = document.querySelector('.log-in-form-onload')
let onloadSignInPopClose = document.querySelector('#form-onload-close')
let passwordVisibility = false
let darkThemeChecked


passwordToggleBtn.addEventListener('click', (e) => {
    if (passwordVisibility) {
        passwordInput.setAttribute('type', 'password')
        passwordVisibility = false
    } else {
        passwordInput.setAttribute('type', 'text')
        passwordVisibility = true
    }
})


function getLocalTheme() {
    theme = localStorage.getItem('theme')
    return theme
}


function setLocalTheme(setTheme) {
    localStorage.setItem('theme', setTheme)
}


function setCheckInput(set) {
    darkThemeChecked = set
}


function setLightTheme() {
    r.style.setProperty('--bg-container', '#fff');
    r.style.setProperty('--pop-up-form-bg', '#fff');
    r.style.setProperty('--para-col', '#000');
    r.style.setProperty('--heading-col', '#000');
    r.style.setProperty('--form-inp-border', 'black');
    r.style.setProperty('--nav-link-col', '#fff');
    popUpForm.style.boxShadow = '-9px 17px 23px 1px rgba(0,0,0,0.29)'
}


function setDarkTheme() {
    r.style.setProperty('--bg-container', '#27323a');
    r.style.setProperty('--pop-up-form-bg', '#324c56');
    r.style.setProperty('--para-col', '#fff');
    r.style.setProperty('--heading-col', '#fff');
    r.style.setProperty('--form-inp-border', 'rgba(10, 225, 197, 0.782)');
    r.style.setProperty('--nav-link-col', 'rgba(10, 225, 197, 0.782)');
    popUpForm.style.boxShadow = '-9px 19px 27px -2px rgba(66,85,98,0.69)'
}


function onclickCheck() {
    if (darkThemeChecked) {
        setLocalTheme('light')
        setCheckInput(false)
        setLightTheme()
    } else {
        setLocalTheme('dark')
        setCheckInput(true)
        setDarkTheme()
    }
}


window.addEventListener('load', (e) => {
    localSavedTheme = getLocalTheme()
    if (localSavedTheme === 'light') {
        setCheckInput(false)
        setLightTheme()
    }
    if (localSavedTheme == 'dark') {
        check.setAttribute('checked', true)
        setCheckInput(true)
        setDarkTheme()
    }

    let login = localStorage.getItem('login')
    if (login == 'false') {
        onloadSignInPop.style.display = 'block'
    }
})


onloadSignInPopClose.addEventListener('click', (e) => {
    onloadSignInPop.style.display = 'none'
})