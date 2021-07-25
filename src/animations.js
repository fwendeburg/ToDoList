// Burger menu animation.

const burgerMenuAnimation = (function() {
    const body = document.querySelector('body');
    const burgerMenuBtn = document.querySelector('.burger-menu');
    const sidebar = document.querySelector('#sidebar');

    let burgerMenuOpen = false;

    const addBurgerMenuEL = () => {
        burgerMenuBtn.addEventListener('click', () => {
            if (!burgerMenuOpen) {
                burgerMenuOpen = true;
            }
            else {
                burgerMenuOpen = false;
            }
        
            sidebar.classList.toggle('visible-mobile-nav');
            burgerMenuBtn.classList.toggle('open');
        });
    }

    return {addBurgerMenuEL}
})()

burgerMenuAnimation.addBurgerMenuEL();

