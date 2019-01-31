export function phoneLink (num) {
  const link = document.createElement('a');
  link.href = `tel:+${num}`;
  link.textContent = `${num}`;
  return link;
}

export function phoneText (num) {
  const p = document.createElement('p');
  p.textContent = `${num}`;
  return p;  
}
