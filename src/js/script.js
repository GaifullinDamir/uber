'use strict'
document.addEventListener('DOMContentLoaded', () =>{
    var menu = document.getElementsByClassName('menu')[0];
    var menuItems = document.getElementsByClassName('menu_item');
    var hamburger = document.getElementsByClassName('hamburger')[0];
    console.log(menu);

    var menuItemsArray = Array.from(menuItems);
    console.log(menuItemsArray)

    const menuToggler = (e) => {
        e.preventDefault;
        // var item = e.target.offsetParent;
        if(hamburger.classList.contains('hamburger_active')){
            menu.classList.remove('menu_active');
            hamburger.classList.remove('hamburger_active');
        } else {
            menu.classList.add('menu_active');
            hamburger.classList.add('hamburger_active');
        }
    };

    menuItemsArray.forEach(item => {
        item.addEventListener('click', e => {
            e.preventDefault;
            menuToggler(e);
        })
    })
    hamburger.addEventListener('click', menuToggler);
})