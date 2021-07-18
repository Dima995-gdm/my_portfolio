window.addEventListener('DOMContentLoaded', () => {

    const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      menuLink = document.querySelectorAll('.menu__link'),
      closeElem = document.querySelector('.menu__close'),
      overlay = document.querySelector('.menu__overlay'),
      anchors = document.querySelectorAll('a[href*="#"]'),
      form = document.querySelector('.contacts__form'),
      overlayContacts = document.querySelector('.contacts__overlay')

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

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let formData = new FormData(form)

        fetch('mailer/smart.php', {
            method: 'POST',
            body: formData,
        })
        .then (() => {
            overlayContacts.classList.add('active');
            setTimeout(() => overlayContacts.classList.remove('active'), 2000)
        })
        .catch(() => {
            alert('Произошел сбой при отправке данных');
        })
        .finally(() => {
            form.reset();
        })
    });

});
