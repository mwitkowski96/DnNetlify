const desktopNav = document.querySelector('.nav');
const nav = document.querySelector('.nav-mobile');
const navBtn = document.querySelector('.burger-btn');
const allNavItems = document.querySelectorAll('.nav-mobile__item')


const handleNav = () => {
    nav.classList.toggle('nav-mobile--active');
    navBtn.classList.toggle('open');

    allNavItems.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.remove('nav-mobile--active')
            navBtn.classList.remove('open')

        })
    })

    handleNavItemsAnimation();
}

const handleNavItemsAnimation = () => {
    let delayTime = 0;

    allNavItems.forEach(item => {
        item.classList.toggle('nav-items-animation')
        item.style.animationDelay = '.' + delayTime + 's';
        delayTime++;
    })
}


const hideNav = () => {

    let lastScrollY = window.scrollY;

        window.addEventListener('scroll', () => {
            if (lastScrollY < window.scrollY) {
                desktopNav.classList.add('nav--hidden');
            } else {
                desktopNav.classList.remove('nav--hidden');
            }

            lastScrollY = window.scrollY;
        });
}

hideNav();
navBtn.addEventListener('click', handleNav);