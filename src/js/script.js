const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      menuLink = document.querySelectorAll('.menu__link'),
      closeElem = document.querySelector('.menu__close'),
      overlay = document.querySelector('.menu__overlay'),
      anchors = document.querySelectorAll('a[href*="#"]')

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

window.addEventListener('click', (e) => {
    if (e.target == overlay) {
        menu.classList.remove('active');
    }
});

menuLink.forEach((item) => {
    item.addEventListener('click', (e) => {
        menu.classList.remove('active');
    })
})

anchors.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const blockID = item.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
})

const percents = document.querySelectorAll('.progress__item-percent'),
      lines = document.querySelectorAll('.progress__item-line span');


percents.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});