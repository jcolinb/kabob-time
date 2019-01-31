function foodItem ({text,price,img}) {
  const item = document.createElement('div');

  if (img) {
    const pic = document.createElement('div');
    pic.style.backgroundImage = `url(${img})`;
    pic.className = 'food-pic';
    item.append(pic);
  }

  const textBar = document.createElement('div');
  textBar.className = 'text-bar';

  const name = document.createElement('h5');
  name.backgroundColor = "grey";
  name.textContent = `${text}:`;
  textBar.append(name);
  
  const priceText = document.createElement('h5');
  priceText.backgroundColor = "grey";
  priceText.textContent = `${price}`;
  textBar.append(priceText);
  item.append(textBar);

  item.backgroundColor = "grey";
  item.className = (img) ? 'menu-item-pic' : 'menu-item';
  return item;
}

export function menuView (apps) {
  const container = document.createElement('div');
  container.className = 'menu-frame';
  Object.keys(apps).map((key) => container.append(foodItem(apps[key])));
  return container;
}

