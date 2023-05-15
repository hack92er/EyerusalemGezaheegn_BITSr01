
const title = document.querySelector('h1');


function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function changeTitle() {
  
  const color = randomColor();
  title.style.color = color;


  const shadowColor = `rgba(${color.slice(4, -1)}, 0.8)`;
  title.style.textShadow = `0 0 10px ${shadowColor}`;

  
  setTimeout(changeTitle, 500);
}


changeTitle();
