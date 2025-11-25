"use strict";

// Initial dropdown menu (down)
const firstMenuItems = document.querySelectorAll('.first-menu-item');
const secondMenus = document.querySelectorAll('.second-menu');
firstMenuItems.forEach(
    item => {
        item.addEventListener('click', () => {
            secondMenus.forEach(secondMenu => secondMenu.style.display = 'none');
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
firstMenuItem.forEach(
    item => item.addEventListener('click', () => overlay.style.display = 'block')
)
// Close overlay
const secondMenu = document.querySelectorAll('.second-menu');
overlay.addEventListener('click', function () {
    overlay.style.display = 'none';
    secondMenu.forEach(secondMenu => secondMenu.style.display = 'none');
    firstMenuItemName.forEach(item => item.classList.remove('is-open'));
});

// Change color when menu button is clicked
const firstMenuItemName = document.querySelectorAll('.first-menu-item-name');
firstMenuItemName.forEach(
    item => item.addEventListener('click', function () {
        firstMenuItemName.forEach(i => {
            if (i !== item) i.classList.remove('is-open');
        });
        item.classList.toggle('is-open');
    })
)
