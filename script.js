"use strict";

// Initial dropdown menu (down)
const items = document.querySelectorAll('.first-menu-item');
items.forEach(
    item => {
        item.addEventListener('click', () => {
            item.querySelector('.second-menu').style.display = 'block';
        })
    }
)
// Second dropdown menu (to the right side)
const subMenuItems = document.querySelectorAll('.second-menu-item-name');
const thirdMenus = document.querySelectorAll('.third-menu-container');
const overlay = document.getElementById('overlay');
subMenuItems.forEach(
    item => {
        item.addEventListener('click', () => {
            // hide all the third menus
            thirdMenus.forEach(thirdMenu => thirdMenu.style.display = 'none');
            // display the one clicked
            item.nextElementSibling.style.display = 'grid';
        })
    }
)
// Open overlay
const firstMenuItem = document.querySelectorAll('.first-menu-item');
firstMenuItem.forEach(item => item.addEventListener('click', () => overlay.style.display = 'block'))
// Close overlay
const secondMenu = document.querySelectorAll('.second-menu');
overlay.addEventListener('click', function () {
    overlay.style.display = 'none';
    secondMenu.forEach(secondMenu => secondMenu.style.display = 'none');
});