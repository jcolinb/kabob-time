import * as menu from './menu.js';
import {menuView} from './views.js';

const view = document.getElementById('view');
const drawer = document.getElementById('drawer');

function text (str) {
  const box = document.createElement('p');
  box.textContent = str;
  return box;
}

function heading (type) {
  const title = document.createElement('div');
  title.className = 'menu-head';
  title.textContent = type;
  return title;
}

function description (type) {
  const box = document.createElement('div');
  box.className = 'description';

    if (type == 'appetizers' || 'desserts') {
      box.append(text(''));
      }
    if (type == 'sandwiches') {
      box.append(text('served with lettuce,tomato,onion,and house sauce'));
      box.append(text('add fries for $2'));
    }
    if (type == 'platters') {
      box.append(text('all platters are served with rice and salad'));
      box.append(text('full rice or salad extra $2'));
    }
  return box;
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
      view.append(description(type));
      view.append(menuView(menu[type]));
      });
    options.append(item);
  });
}

document.getElementById('menu-button').addEventListener('click',function () {
  (drawer.className === 'shown') ?
    drawer.className = 'hidden':
    drawer.className = 'shown';
});

buildMenu(menu);
