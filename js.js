import * as menu from './menu.js';
import {phoneLink,phoneText} from './phoneHelpers.js';
import {menuView} from './views.js';

const view = document.getElementById('view');
const address = document.getElementById('address');
const drawer = document.getElementById('drawer');

function heading (type) {
  const title = document.createElement('div');
  title.className = 'menu-head';
  title.textContent = type;
  return title;
}

function buildMenu (menu) {
  const options = document.getElementById('menu');
  Object.keys(menu).map(function (type) {
    const item = document.createElement('li');
    item.textContent = type;
    item.addEventListener('click',() => {
      drawer.className = 'hidden';
      view.innerHTML = "";
      view.style.backgroundImage = "url('')";
      view.style.backgroundColor = 'grey';
      view.append(heading(type));
      view.append(menuView(menu[type]));
      });
    options.append(item);
  });
}

(window.matchMedia("(max-width:550px)").matches) ?
  address.append(phoneLink("1-614-556-6202")) :
  address.append(phoneText("1-614-556-6202"));

document.getElementById('menu-button').addEventListener('click',function () {
  (drawer.className === 'shown') ?
    drawer.className = 'hidden':
    drawer.className = 'shown';
});

buildMenu(menu);