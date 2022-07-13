ScrollReveal().reveal('.imgs-profile')
ScrollReveal().reveal('.container',{ delay: 200 })
ScrollReveal().reveal('.wrapper', { delay: 200 })

const btnEl = document.querySelector('.btn')

const toggleOptions = () => {
  const wrapperEl = document.querySelector('.wrapper')
  const iconEl = btnEl.querySelector('i')

  wrapperEl.classList.toggle('active')

  if (iconEl.classList.contains('ri-share-line')) {
    iconEl.classList.replace('ri-share-line', 'ri-close-line')
  } else {
    iconEl.classList.replace('ri-close-line', 'ri-share-line')
  }
}

btnEl.addEventListener('click', toggleOptions)

function darkMode() {
  document.body.classList.add('dark')
}

function lightMode() {
  document.body.classList.remove('dark')
}

function wa() {
  navigator.clipboard.writeText('http://wa.me/5588997409991')
}
function ig() {
  navigator.clipboard.writeText('https://www.instagram.com/lamicvacinas/')
}
function fb() {
  navigator.clipboard.writeText('https://www.lamicvacinas.com.br')
}
function allert() {
  alertify.success('Você salvou um vida! ❤️')
}
